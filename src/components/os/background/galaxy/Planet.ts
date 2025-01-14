import * as THREE from "three";
import { Orbit } from "@/components/os/background/galaxy/Orbit";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export class Planet {
	mesh: THREE.Group | null;
	moveTime: number;
	private readonly scene: THREE.Scene;

	constructor(scene: THREE.Scene) {
		this.scene = scene;
		this.moveTime = 0;

		this.mesh = null;
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

	async load(modelPath: string, radX: number, radY: number) {
		const loader = new GLTFLoader();
		const model = await loader.loadAsync(modelPath);
		model.scene.scale.set(10, 10, 10);
		model.scene.rotation.x = THREE.MathUtils.degToRad(radX);
		model.scene.rotation.z = THREE.MathUtils.degToRad(radY);
		model.scene.rotation.y = THREE.MathUtils.degToRad(180);
		model.scene.traverse(function (node) {
			node.castShadow = true;
			node.receiveShadow = true;
		});
		this.scene.add(model.scene);
		this.mesh = model.scene;
	}
}
