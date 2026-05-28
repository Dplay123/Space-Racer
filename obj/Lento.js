import * as THREE from '../js/three.module.js';
export default function O9 ({x,y,z}){


    var geo1 =new THREE.BoxGeometry(6.5,2,2);
    var m1= new THREE.MeshLambertMaterial({ color: 0x084A9C,
    side: THREE.DoubleSide});
    var mesh01 = new THREE.Mesh(geo1, m1);
    mesh01.rotation.set(0,0,0.610);
    mesh01.position.set(-2,0,0);
    //scene.add(mesh01);

    var geo2 =new THREE.BoxGeometry(2,6.5,2);
    var m2= new THREE.MeshLambertMaterial({ color: 0x084A9C,
    side: THREE.DoubleSide});
    var mesh02= new THREE.Mesh(geo2, m2);
    mesh02.rotation.set(0,0,0.685);
    mesh02.position.set(2,0,0)
    //scene.add(mesh02);

    var geo3 =new THREE.BoxGeometry(6.5,2,2);
    var m3= new THREE.MeshLambertMaterial({ color: 0x084A9C,
    side: THREE.DoubleSide});
    var mesh03 = new THREE.Mesh(geo3, m3);
    mesh03.rotation.set(0,0,0.610);
    mesh03.position.set(-2,4,0);
    //scene.add(mesh03);

    var geo4 =new THREE.BoxGeometry(2,6.5,2);
    var m4= new THREE.MeshLambertMaterial({ color: 0x084A9C,
    side: THREE.DoubleSide});
    var mesh04= new THREE.Mesh(geo4, m4);
    mesh04.rotation.set(0,0,0.685);
    mesh04.position.set(2,4,0)
    //scene.add(mesh04);


    var lento= new THREE.Group();
                  lento.add(mesh01,mesh02,mesh03,mesh04);
                  
                  lento.position.set (x,y,z);
                  return lento;

}