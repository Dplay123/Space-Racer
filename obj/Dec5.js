import * as THREE from '../js/three.module.js';
export default function O5 ({x,y,z}){


    // Espacio para colocar los objetos

    

        //nave
        var domo1 = new THREE.SphereGeometry( 15, 32, 16, 0, Math.PI*2,0, Math.PI/2 );
        var material01 = new THREE.MeshBasicMaterial( { color: 0x00D4FF, transparent:true, opacity:0.2 } );
        var mesh1 = new THREE.Mesh( domo1, material01 );
        //scene.add( mesh1 );
        mesh1.position.set(0, 19, 0); 

        var domo2 = new THREE.SphereGeometry( 15, 32, 16, 0, Math.PI*2,0, Math.PI/2 );
        var material02 = new THREE.MeshBasicMaterial( { color:0x111C38} );
        var mesh2 = new THREE.Mesh( domo2, material02 );
        //scene.add( mesh2 );
        mesh2.position.set(0, 19, 0);
        mesh2.rotation.x=Math.PI;

        var anillo = new THREE.CylinderGeometry(25, 1, 5, 32 );
        var material03 = new THREE.MeshBasicMaterial( { color: 0x111C38} );
        var mesh3 = new THREE.Mesh( anillo, material03 );
        //scene.add( mesh3 )
        mesh3.position.set(0, 16, 0);

        
        var anilloluz = new THREE.CylinderGeometry(25, 25, 1, 32 );
        var material05 = new THREE.MeshStandardMaterial( { color: 0xFFFFFF } );
        var mesh5 = new THREE.Mesh( anilloluz, material05 );
        //scene.add( mesh5 )
        mesh5.position.set(0, 19, 0);

        //marciano

        var cabeza1 = new THREE.SphereGeometry(4, 32, 16 );
        var material11 = new THREE.MeshBasicMaterial( { color: 0x16E305 } );
        var mesh001 = new THREE.Mesh( cabeza1, material11 );
        //scene.add( mesh001);
        mesh001.position.set(0, 30, 0);

        var cabeza2 = new THREE.SphereGeometry(4, 32, 16 );
        var material12 = new THREE.MeshBasicMaterial( { color: 0x16E305 } );
        var mesh002 = new THREE.Mesh( cabeza2, material12 );
        //scene.add( mesh002);
        mesh002.position.set(1, 29, 0);

        var cojo1 = new THREE.SphereGeometry(2, 32, 16 );
        var material13 = new THREE.MeshBasicMaterial( { color: 0x060D05 } );
        var mesh003 = new THREE.Mesh( cojo1, material13 );
        //scene.add( mesh003);
        mesh003.position.set(4, 31, 2);

        var cojo2 = new THREE.SphereGeometry(2, 32, 16 );
        var material14 = new THREE.MeshBasicMaterial( { color: 0x060D05 } );
        var mesh004 = new THREE.Mesh( cojo2, material14 );
        //scene.add( mesh004);
        mesh004.position.set(4, 31, -2);

        var anillo = new THREE.CylinderGeometry(1, 2, 10, 32 );
        var material03 = new THREE.MeshBasicMaterial( { color: 0x16E305} );
        var mesh03 = new THREE.Mesh( anillo, material03 );
        //scene.add( mesh03 )
        mesh03.position.set(-2, 25, 0);

        var wil = new THREE.Group();
          wil.add(mesh1, mesh2, mesh3, mesh5, mesh001, mesh002, mesh003, mesh004,mesh03 );
          
          wil.position.set (x,y,z);
          return wil;

 
}