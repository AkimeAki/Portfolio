import * as THREE from "three";

export class Orbit {
	mesh: THREE.LineLoop;
	curve: THREE.CatmullRomCurve3;
	points: THREE.Vector2[];
	private readonly scene: THREE.Scene;

	constructor(scene: THREE.Scene) {
		this.scene = scene;

		this.points = new THREE.Path().absarc(0, 0, 2, 0, Math.PI * 2).getPoints(90);
		this.curve = new THREE.CatmullRomCurve3(this.points.map((p) => new THREE.Vector3(p.x * 5, 0, p.y * 5)));
		const geometry = new THREE.BufferGeometry().setFromPoints(this.points);
		const material = new THREE.LineBasicMaterial({ transparent: true, color: 0xffffff, opacity: 0 });
		// const material = new THREE.LineBasicMaterial({ color: 0xffffff });
		this.mesh = new THREE.LineLoop(geometry, material);
		this.mesh;

		this.scene.add(this.mesh);

		// 影を作る
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;

		this.mesh.rotation.x = THREE.MathUtils.degToRad(-90);

		// サイズ調整
		this.mesh.scale.set(5, 5, 5);
		this.mesh.position.set(0, 0, 0);
	}

	changePoints(x: number, y: number, r: number) {
		this.points = new THREE.Path().absarc(x, y, r, 0, Math.PI * 2).getPoints(90);
		this.curve = new THREE.CatmullRomCurve3(this.points.map((p) => new THREE.Vector3(p.x * 5, 0, p.y * 5)));
		this.mesh.geometry.setFromPoints(this.points);
	}

	changeRotation(x: number, y: number, z: number) {
		this.mesh.rotation.x = THREE.MathUtils.degToRad(-90 + x);
		this.mesh.rotation.y = THREE.MathUtils.degToRad(y);
		this.mesh.rotation.z = THREE.MathUtils.degToRad(z);
	}
}
