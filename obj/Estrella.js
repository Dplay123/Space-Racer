import * as THREE from '../js/three.module.js';
export default function O11({ x, y, z }) {

    // estrella
    var g1 = new THREE.ConeGeometry( 1, 4, 50 );
    var m1 = new THREE.MeshLambertMaterial( {color: 0xFFFF00} );
    var mesh1 = new THREE.Mesh( g1, m1 );
    mesh1.position.set(0,2, 0);
    mesh1.castShadow = true;
    //scene.add( mesh1 );

    var g2 = new THREE.ConeGeometry( 1, 4, 50 );
    var m2 = new THREE.MeshLambertMaterial( {color: 0xFFFF00} );
    var mesh2 = new THREE.Mesh( g2, m2 );
    mesh2.position.set(-2, .5, 0);
    mesh2.rotation.set(0, 0, 1.17);
    mesh2.castShadow = true;
    //scene.add( mesh2 );

    var g3 = new THREE.ConeGeometry( 1, 4, 50 );
    var m3 = new THREE.MeshLambertMaterial( {color: 0xFFFF00} );
    var mesh3 = new THREE.Mesh( g3, m3 );
    mesh3.position.set(2, .5, 0);
    mesh3.rotation.set(0, 0, -1.17);
    mesh3.castShadow = true;
    //scene.add( mesh3 );

    var g4 = new THREE.ConeGeometry( 1, 4, 50 );
    var m4 = new THREE.MeshLambertMaterial( {color: 0xFFFF00} );
    var mesh4 = new THREE.Mesh( g4, m4 );
    mesh4.position.set(-1.5, -1.8, 0);
    mesh4.rotation.set(0, 0, 2.4);
    mesh4.castShadow = true;
    //scene.add( mesh4 );

    var g5 = new THREE.ConeGeometry( 1, 4, 50 );
    var m5 = new THREE.MeshLambertMaterial( {color: 0xFFFF00} );
    var mesh5 = new THREE.Mesh( g5, m5 );
    mesh5.position.set(1.5, -1.8, 0);
    mesh5.rotation.set(0, 0, -2.4);
    mesh5.castShadow = true;
    //scene.add( mesh5 );

    var g6 = new THREE.SphereGeometry( 1.2, 4, 50 );
    var m6 = new THREE.MeshLambertMaterial( {color: 0xFFFF00} );
    var mesh6 = new THREE.Mesh( g6, m6 );
    mesh6.position.set(0, 0, 0);
    mesh6.rotation.set(0, 0, -2.4);
    mesh6.castShadow = true;
    //scene.add( mesh6 );

    var est= new THREE.Group();
    est.add(mesh1, mesh2, mesh3, mesh4, mesh5, mesh6);
    est.position.set(x, y, z);
    return est;

}
