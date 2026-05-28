import * as THREE from '../js/three.module.js';
export default function O10 ({x,y,z}){
   

var geo1 = new THREE.SphereGeometry(2.5,50);
var m1 = new THREE.MeshLambertMaterial ({
        color: 0x787878, side: THREE.DoubleSide
    });
var mesh01 = new THREE.Mesh(geo1,m1);
mesh01.position.set(0,0,0);
//scene.add(mesh01);

var geo2 = new THREE.SphereGeometry(.5,50);
var m2 = new THREE.MeshLambertMaterial ({
        color: 0x303030, side: THREE.DoubleSide
    });
var mesh02 = new THREE.Mesh(geo2,m2);
mesh02.position.set(2.3,1,0);
//scene.add(mesh02);

var geo3 = new THREE.SphereGeometry(1.4,50);
var m3 = new THREE.MeshLambertMaterial ({
        color: 0x303030, side: THREE.DoubleSide
    });
var mesh03 = new THREE.Mesh(geo3,m3);
mesh03.position.set(-2.3,-1,0);
//scene.add(mesh03);

var geo4 = new THREE.SphereGeometry(1.7,50);
var m4 = new THREE.MeshLambertMaterial ({
        color: 0x303030, side: THREE.DoubleSide
    });
var mesh04 = new THREE.Mesh(geo4,m4);
mesh04.position.set(-.3,1.3,-.8);
//scene.add(mesh04);

var geo5 = new THREE.SphereGeometry(.9,50);
var m5 = new THREE.MeshLambertMaterial ({
        color: 0x303030, side: THREE.DoubleSide
    });
var mesh05 = new THREE.Mesh(geo3,m3);
mesh05.position.set(.3,1,1);
//scene.add(mesh05);

var ene= new THREE.Group();
                  ene.add(mesh01,mesh02,mesh03,mesh04,mesh05);
                  
                  ene.position.set (x,y,z);
                  return ene;

}