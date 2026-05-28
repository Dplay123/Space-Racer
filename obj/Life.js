import * as THREE from '../js/three.module.js';
export default function O8 ({x,y,z}){

    var geo1 =new THREE.BoxGeometry(6.5,2,2);
    var m1= new THREE.MeshLambertMaterial({ color: 0x31FF00,
    side: THREE.DoubleSide});
    var mesh01 = new THREE.Mesh(geo1, m1);
    //scene.add(mesh01);

    var geo2 =new THREE.BoxGeometry(2,6.5,2);
    var m2= new THREE.MeshLambertMaterial({ color: 0x31FF00,
    side: THREE.DoubleSide});
    var mesh02= new THREE.Mesh(geo2, m2);
    //scene.add(mesh02);

    var life= new THREE.Group();
              life.add(mesh01,mesh02);
              
              life.position.set (x,y,z);
              return life;

}