import * as THREE from '../js/three.module.js';
export default function O7 ({x,y,z}){

   
var geometry01 = new THREE.ConeGeometry(20, 80, 50); 
var material01 = new THREE.MeshLambertMaterial({
    color: 0xFFEDC7,
    side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01, material01);
//scene.add(mesh01);
mesh01.position.set(1, 40, 0);
var mesh02 = new THREE.Mesh(geometry01, material01);
//scene.add(mesh02);
mesh02.position.set(10, 40, 0);

var geometry02 = new THREE.RingGeometry(5, 10, 32); 
var material02 = new THREE.MeshLambertMaterial({
    color: 0xFC0000,
    side: THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry02, material02);
//scene.add(mesh04);
mesh04.position.set(5, 25, 17);

var geometry03 = new THREE.CylinderGeometry(30, 30, 5, 32); 
var material03 = new THREE.MeshLambertMaterial({
    color: 0x122DC7,
    side: THREE.DoubleSide
});
var mesh05 = new THREE.Mesh(geometry03, material03);
//scene.add(mesh05);
mesh05.position.set(5, 5, 0);

var doom= new THREE.Group();
          doom.add(mesh01,mesh02,mesh04,mesh05);
          
          doom.position.set (x,y,z);
          return doom;

}