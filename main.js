import * as THREE from "three";
import { color } from "three/webgpu";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

camera.position.z = 5;

const cubegeo = new THREE.BoxGeometry(2, 2, 2);
const cubemat = new THREE.MeshBasicMaterial({
  color: "red",
  wireframe: true,
});
const cube = new THREE.Mesh(cubegeo, cubemat);

scene.add(cube);

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const clock = new THREE.Clock();

const animate = () => {
  window.requestAnimationFrame(animate);
  cube.rotation.y = clock.getElapsedTime() * 3;
  renderer.render(scene, camera); // capture an image
};

animate();
