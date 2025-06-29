import * as THREE from "three";
import type { Orbit } from "@/components/background/galaxy/Orbit";
import { type GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export class Planet {
	mesh: THREE.Group | null;
	model: GLTF | null;
	moveTime: number;
	private readonly scene: THREE.Scene;

	constructor(scene: THREE.Scene) {
		this.scene = scene;
		this.moveTime = 0;
		this.mesh = null;
		this.model = null;
	}

	tracking(orbit: Orbit, speed: number, x: number, y: number) {
		const point = orbit.curve.getPointAt(this.moveTime);
		if (this.mesh !== null) {
			this.mesh.position.set(point.x + x, point.y + y, point.z);

			this.moveTime += speed;
			if (this.moveTime > 1) {
				this.moveTime = 0;
			}
		}
	}

	rotate(rotatePx: number, directionX: 1 | -1, directionY: 1 | -1, directionZ: 1 | -1) {
		if (this.mesh !== null) {
			this.mesh.rotation.x = THREE.MathUtils.degToRad(
				THREE.MathUtils.radToDeg(this.mesh.rotation.x) + rotatePx * directionX
			);
			this.mesh.rotation.y = THREE.MathUtils.degToRad(
				THREE.MathUtils.radToDeg(this.mesh.rotation.y) + rotatePx * directionY
			);
			this.mesh.rotation.z = THREE.MathUtils.degToRad(
				THREE.MathUtils.radToDeg(this.mesh.rotation.z) + rotatePx * directionZ
			);

			if (Math.abs(THREE.MathUtils.radToDeg(this.mesh.rotation.x)) >= 360) {
				this.mesh.rotation.x = 0;
			}

			if (Math.abs(THREE.MathUtils.radToDeg(this.mesh.rotation.y)) >= 360) {
				this.mesh.rotation.y = 0;
			}

			if (Math.abs(THREE.MathUtils.radToDeg(this.mesh.rotation.z)) >= 360) {
				this.mesh.rotation.z = 0;
			}
		}
	}

	async load(modelPath: string) {
		const loader = new GLTFLoader();
		const model = await loader.loadAsync(modelPath);
		model.scene.scale.set(10, 10, 10);
		model.scene.rotation.x = THREE.MathUtils.degToRad(0);
		model.scene.rotation.z = THREE.MathUtils.degToRad(0);
		model.scene.rotation.y = THREE.MathUtils.degToRad(180);
		model.scene.traverse((node) => {
			node.castShadow = true;
			node.receiveShadow = true;

			// 縁取り
			if ((node as THREE.Mesh).isMesh && (node as THREE.Mesh).geometry) {
				const mesh = node as THREE.Mesh;

				// アウトライン用のメッシュ
				const outline = new THREE.Mesh(
					mesh.geometry,
					new THREE.MeshBasicMaterial({
						color: 0xad2b46,
						side: THREE.BackSide
					})
				);

				outline.scale.multiplyScalar(1.03);
				outline.name = "outline";

				// メッシュの親に追加
				if (mesh.parent !== null) {
					mesh.parent.add(outline);
					outline.position.copy(mesh.position);
					outline.quaternion.copy(mesh.quaternion);
					outline.rotation.copy(mesh.rotation);
				}
			}
		});
		this.scene.add(model.scene);
		this.mesh = model.scene;
		this.model = model;
	}
}
