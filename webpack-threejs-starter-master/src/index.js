import {pivotPoint, sphere, box, clouds, moon} from './geometry.js';
import {scene} from './scene.js';
import {controls, camera, renderer} from './controls.js';
import {rot} from './stuff.js';

const render = () => {
  requestAnimationFrame(render);
  box.rotation.x += 0.01;
  sphere.rotation.y += rot;
  clouds.rotation.y += (rot - 0.002);
  moon.rotation.y -= rot;
  controls.update();
  renderer.render(scene, camera);
//Kuun kierto

  var orbitRadius = 210;
  var date;
  date = Date.now()*0.0005;
  moon.position.set(
    Math.cos(date) * orbitRadius, 5, Math.sin(date) * orbitRadius
  );


};

render();
console.log('Here is your scene', scene);

// adapt camera & renderer to browser window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}, false);


