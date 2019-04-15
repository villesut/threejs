import * as THREE from 'three-full';
import {newLight, light, ambientLight} from './lights.js';
import {sphere, box} from './geometry.js';

const scene = new THREE.Scene();

const loader = new THREE.OBJLoader;
loader.load('models/test.obj', function(object){
    
    scene.add(object);
});


scene.add(box);

scene.add(sphere);
scene.add(ambientLight);
scene.add(light);


export{scene};