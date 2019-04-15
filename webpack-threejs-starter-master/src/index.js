import * as THREE from 'three-full';
import * as OrbitControls from 'three-orbitcontrols';

import {newLight, light, ambientLight} from './lights.js';
import {sphere, box} from './geometry.js';
// create a scene

const bcolor = new THREE.Color( 0xFFFFF);

const scene = new THREE.Scene();

// create a box

scene.add(box);
scene.add(sphere);

scene.background = bcolor;

/*
// add some light
const light = new THREE.PointLight(0xffabba);
light.position.set(10, 10, 35);
light.intensity = 2;
const ambiendLight = new THREE.AmbientLight(0xffffff, 1.0);
*/
scene.add(ambientLight);
scene.add(light);
scene.add(newLight);
// create a camera and set position
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 1, 1000);
camera.position.set(400,200,0);




// create a renderer & add to DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//using
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.minDistance = 10;
controls.maxDistance = 500;


// set & start rendering the scene
const render = () => {
  requestAnimationFrame(render);
  box.rotation.x += 0.01;
  controls.update();
  renderer.render(scene, camera);
};
render();

console.log('Here is your scene', scene);

// adapt camera & renderer to browser window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}, false);
