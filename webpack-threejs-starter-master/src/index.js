import {pivotPoint, sphere, box, clouds, moon} from './geometry.js';
import {scene} from './scene.js';
import {controls, camera, renderer} from './controls.js';
import {rot} from './stuff.js';

const render = () => {
  requestAnimationFrame(render);
  box.rotation.x += 0.01;
  sphere.rotation.y += rot;
  clouds.rotation.y += (rot - 0.002);
  controls.update();
  renderer.render(scene, camera);

  var time = Date.now() * 0.0005;
	moon.position.x = Math.cos( time * 10 ) * 50;
	moon.position.y = Math.cos( time * 7 ) * 30;
	moon.position.z = Math.cos( time * 8 ) * 40;

	// Animating sphere 2
  pivotPoint.rotation.y += 0.05;


};

render();
console.log('Here is your scene', scene);

// adapt camera & renderer to browser window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}, false);


