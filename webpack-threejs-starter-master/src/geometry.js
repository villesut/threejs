import * as THREE from 'three-full';



const bgeometry = new THREE.BoxGeometry(10, 20, 30);
const bmaterial = new THREE.MeshBasicMaterial({ color: 0x0000ab, wireframe: true });
const box = new THREE.Mesh(bgeometry, bmaterial);

//galaxy loader material geom

const galaxyTexture = new THREE.TextureLoader().load('models/pictures/galaxy.png');
const galaxyGeom = new THREE.SphereGeometry(800,32,32);
const galaxyMaterial = new THREE.MeshPhongMaterial({
map: galaxyTexture,
side: THREE.BackSide
});
const galaxy = new THREE.Mesh(galaxyGeom, galaxyMaterial);


//cloud loader material geom

const cloudtexture = new THREE.TextureLoader().load('models/pictures/clouds.png');

const cloudGeom = new THREE.SphereGeometry(181, 32,32);
const cloudmaterial = new THREE.MeshPhongMaterial({
    map: cloudtexture,
    opacity: 1.0,
    transparent: true
});

const clouds = new THREE.Mesh(cloudGeom, cloudmaterial);

//earth loader material geom
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
    specularMap: specular,
    side: THREE.DoubleSide


});

const moonTexture = new THREE.TextureLoader().load('models/pictures/2k_moon.jpg');

const sphere = new THREE.Mesh(geometry, material);

//moon
const moonGeometry = new THREE.SphereGeometry(15,32,32);
const moonMaterial = new THREE.MeshPhongMaterial({
    specular: 0x333333,
    shininess: 80,
    map: moonTexture
});

const moon = new THREE.Mesh(moonGeometry, moonMaterial);


export{sphere, box, clouds, galaxy, moon};