import * as THREE from 'three-full';



const bgeometry = new THREE.BoxGeometry(10, 20, 30);
const bmaterial = new THREE.MeshBasicMaterial({ color: 0x0000ab, wireframe: true });
const box = new THREE.Mesh(bgeometry, bmaterial);

const texture = new THREE.TextureLoader().load('models/pictures/earth_atmos_2048.jpg');
const normal = new THREE.TextureLoader().load('models/pictures/earth_normal_2048.jpg');
const bump = new THREE.TextureLoader().load('models/pictures/earth_bump.jpg');
const specular = new THREE.TextureLoader().load('models/pictures/earth_specular_2048.jpg');



const geometry = new THREE.SphereGeometry(180,32,32);
const material = new THREE.MeshPhongMaterial({
    specular: 0x333333,
    shininess: 80,
    map: texture,
    normalMap: normal,
    bumpMap: bump,
    specularMap: specular

});

const sphere = new THREE.Mesh(geometry, material);

export{sphere, box};