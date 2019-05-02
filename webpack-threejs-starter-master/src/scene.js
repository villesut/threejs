import * as THREE from 'three-full';
import {newLight, light, ambientLight} from './lights.js';
import {sphere, box, clouds, galaxy, moon} from './geometry.js';

const scene = new THREE.Scene();



const loader = new THREE.OBJLoader;
loader.load('models/test.obj', function(object){
    
    scene.add(object);
});



scene.add(box, sphere, ambientLight, clouds, galaxy, light, moon);


export{scene};