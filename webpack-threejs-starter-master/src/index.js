import * as THREE from 'three-full';
import * as OrbitControls from 'three-orbitcontrols';

import {newLight, light, ambientLight} from './lights.js';
import {sphere, box} from './geometry.js';
import {scene} from './scene.js';
import {controls, camera, renderer} from './controls.js';
import {rot} from './stuff.js';

//var rot = 0;
function myFunction(){
  rot++;
  console.log(rot);
};
const render = () => {
  requestAnimationFrame(render);
  box.rotation.x += 0.01;

  sphere.rotation.y += rot;
  
  
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


