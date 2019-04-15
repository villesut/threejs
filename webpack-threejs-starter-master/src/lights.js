import * as THREE from 'three-full';
const light = new THREE.DirectionalLight(0xffabba);
light.position.set(10, 10, 5);
light.intensity = 2;
const ambientLight = new THREE.AmbientLight(0xffffff, 6.0);

const newLight = new THREE.PointLight(0x85F238);
light.position.set(20,20,35);
light.intensity = 2;
//scene.add(ambientLight);
//scene.add(light);
//scene.add(newLight);
export{newLight, light, ambientLight};