import * as THREE from 'three-full';
var rot = 0.0;
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x0000ab, wireframe: true});
document.getElementById("myBtnR").addEventListener("click", function(){
    rot -= 0.02;
    console.log(rot);
  });
  document.getElementById("myBtnL").addEventListener("click", function(){
    rot += 0.02;
    console.log(rot);
  });
  document.getElementById("myBtnRes").addEventListener("click", function(){
    rot = 0;
    console.log(rot);
  });
  

  export{rot};