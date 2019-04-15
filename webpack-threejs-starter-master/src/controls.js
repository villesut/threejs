
import * as OrbitControls from 'three-orbitcontrols';


const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 1, 1000);
camera.position.set(400,200,0);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.minDistance = 10;
controls.maxDistance = 500;


export{controls, camera};

