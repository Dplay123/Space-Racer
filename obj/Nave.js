import * as THREE from '../js/three.module.js';
import{RoundedBoxGeometry} from '../js/RoundedBoxGeometry.js';
export default function Obj1({ x, y, z }) {


    // cuerpo de Nave
    var g1 = new THREE.CylinderGeometry(2,2,6,50); 
    var m1 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh02 = new THREE.Mesh(g1,m1);
    // scene.add(mesh02);
    mesh02.rotation.set(1.57,0,0);
    mesh02.position.set(0,1,-1);

    var g2 = new THREE.CylinderGeometry(1,2,4,50); 
    var m2 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh03 = new THREE.Mesh(g2,m2);
    // scene.add(mesh03);
    mesh03.rotation.set(1.57,0,0);
    mesh03.position.set(0,1,4);

    var g3 = new THREE.CylinderGeometry(0,1,8,50); 
    var m3 = new THREE.MeshLambertMaterial ({
        color: 0xF52727, side: THREE.DoubleSide
    });
    
    var mesh04 = new THREE.Mesh(g3,m3);
    // scene.add(mesh04);
    mesh04.rotation.set(1.57,0,0);
    mesh04.position.set(0,1,10);

    var g4 = new THREE.CylinderGeometry(2,1,2,50); 
    var m4 = new THREE.MeshLambertMaterial ({
        color: 0xF52727, side: THREE.DoubleSide
    });
    var mesh05 = new THREE.Mesh(g4,m4);
    // scene.add(mesh05);
    mesh05.rotation.set(1.57,0,0);
    mesh05.position.set(0,1,-5);

    //Propulsor

    var g5 = new THREE.CylinderGeometry(1,2,2,50,50,false ); 
    var m5 = new THREE.MeshLambertMaterial ({
        color: 0xFF9105, side: THREE.DoubleSide
    });
    var mesh06 = new THREE.Mesh(g5,m5);
    // scene.add(mesh06);
    mesh06.rotation.set(1.57,0,0);
    mesh06.position.set(0,1,-7);

    //ventanilla
    var g6 = new THREE.CylinderGeometry(1,1,2,50); 
    var m6 = new THREE.MeshLambertMaterial ({
        color: 0x70EFFF, side: THREE.DoubleSide
    });
    var mesh07 = new THREE.Mesh(g6,m6);
    // scene.add(mesh07);
    mesh07.rotation.set(1.57,1.57,1.57);
    mesh07.position.set(0,2.3,0);

    //Propulsores laterales
    var g7 = new THREE.CylinderGeometry(.3,.8,4,50);
    var m7 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh08 = new THREE.Mesh(g7,m7);
    // scene.add(mesh08);
    mesh08.rotation.set(1.57,0,0);
    mesh08.position.set(2.5,1,0);

    var g8 = new THREE.CylinderGeometry(.3,.8,4,50);
    var m8 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh09 = new THREE.Mesh(g8,m8);
    // scene.add(mesh09);
    mesh09.rotation.set(1.57,0,0);
    mesh09.position.set(-2.5,1,0);
    
    var g7 = new THREE.CylinderGeometry(.3,.8,4,50);
    var m7 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh08 = new THREE.Mesh(g7,m7);
    // scene.add(mesh08);
    mesh08.rotation.set(-1.57,0,0);
    mesh08.position.set(2.5,1,-3);

    var g8 = new THREE.CylinderGeometry(.3,.8,4,50);
    var m8 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh09 = new THREE.Mesh(g8,m8);
    // scene.add(mesh09);
    mesh09.rotation.set(-1.57,0,0);
    mesh09.position.set(-2.5,1,-3);

    var g10 = new THREE.CylinderGeometry(.8,.3,1.5,50);
    var m10 = new THREE.MeshLambertMaterial ({
        color: 0xFBFF00, side: THREE.DoubleSide
    });
    var mesh010 = new THREE.Mesh(g10,m10);
    // scene.add(mesh010);
    mesh010.rotation.set(-1.57,0,0);
    mesh010.position.set(2.5,1,-5);

    var g11 = new THREE.CylinderGeometry(.8,.3,1.5,50);
    var m11 = new THREE.MeshLambertMaterial ({
        color: 0xFBFF00, side: THREE.DoubleSide
    });
    var mesh011 = new THREE.Mesh(g11,m11);
    // scene.add(mesh011);
    mesh011.rotation.set(-1.57,0,0);
    mesh011.position.set(-2.5,1,-5);

    //puente para alas
    var g12 = new RoundedBoxGeometry(15,1.5,1,10,10);
    var m12 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh012 = new THREE.Mesh(g12,m12);
    // scene.add(mesh012);
    mesh012.rotation.set(1.57,0,0);
    mesh012.position.set(0,1,-1);

    //alas
    var g13 = new THREE.CylinderGeometry(.5,1.5,10,50);
    var m13 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh013 = new THREE.Mesh(g13,m13);
    // scene.add(mesh013);
    mesh013.rotation.set(1.57,0,0);
    mesh013.position.set(-6.5,1,4);

    var g14 = new THREE.CylinderGeometry(.5,1.5,10,50);
    var m14 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh014 = new THREE.Mesh(g14,m14);
    // scene.add(mesh014);
    mesh014.rotation.set(1.57,0,0);
    mesh014.position.set(6.5,1,4);

    var g15 = new THREE.CylinderGeometry(.5,1.5,4,50);
    var m15 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh015 = new THREE.Mesh(g15,m15);
    // scene.add(mesh015);
    mesh015.rotation.set(-1.57,0,0);
    mesh015.position.set(-6.5,1,-3);

    var g16 = new THREE.CylinderGeometry(.5,1.5,4,50);
    var m16 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh016 = new THREE.Mesh(g16,m16);
    // scene.add(mesh016);
    mesh016.rotation.set(-1.57,0,0);
    mesh016.position.set(6.5,1,-3);

    var g17 = new THREE.CylinderGeometry(.8,.8,.5,50);
    var m17 = new THREE.MeshLambertMaterial ({
        color: 0xD18F00, side: THREE.DoubleSide
    });
    var mesh017 = new THREE.Mesh(g17,m17);
    // scene.add(mesh017);
    mesh017.rotation.set(-1.57,0,0);
    mesh017.position.set(6.5,1,9);

    var g18 = new THREE.CylinderGeometry(.8,.8,.5,50);
    var m18 = new THREE.MeshLambertMaterial ({
        color: 0xD18F00, side: THREE.DoubleSide
    });
    var mesh018 = new THREE.Mesh(g18,m18);
    // scene.add(mesh018);
    mesh018.rotation.set(-1.57,0,0);
    mesh018.position.set(-6.5,1,9);

    var g19 = new THREE.CylinderGeometry(.6,0,3,50);
    var m19 = new THREE.MeshLambertMaterial ({
        color: 0xD18F00, side: THREE.DoubleSide
    });
    var mesh019 = new THREE.Mesh(g19,m19);
    // scene.add(mesh019);
    mesh019.rotation.set(-1.57,0,0);
    mesh019.position.set(6.5,1,10.5);

    var g20 = new THREE.CylinderGeometry(.6,0,3,50);
    var m20 = new THREE.MeshLambertMaterial ({
        color: 0xD18F00, side: THREE.DoubleSide
    });
    var mesh020 = new THREE.Mesh(g20,m20);
    // scene.add(mesh020);
    mesh020.rotation.set(-1.57,0,0);
    mesh020.position.set(-6.5,1,10.5);

    //cañones de las alas superiores
    var g21 = new THREE.CylinderGeometry(1,.2,7,50);
    var m21 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh021 = new THREE.Mesh(g21,m21);
    // scene.add(mesh021);
    mesh021.rotation.set(-1.57,0,0);
    mesh021.position.set(-6.5,5,4);

    var g22 = new THREE.CylinderGeometry(1,.2,7,50);
    var m22 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh022 = new THREE.Mesh(g22,m22);
    // scene.add(mesh022);
    mesh022.rotation.set(-1.57,0,0);
    mesh022.position.set(6.5,5,4);

    var g23 = new THREE.SphereGeometry(1,50,50);
    var m23 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh023 = new THREE.Mesh(g23,m23);
    // scene.add(mesh023);
    mesh023.rotation.set(-1.57,0,0);
    mesh023.position.set(-6.5,5,.5);

    var g24 = new THREE.SphereGeometry(1,50,50);
    var m24 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh024 = new THREE.Mesh(g24,m24);
    // scene.add(mesh024);
    mesh024.rotation.set(-1.57,0,0);
    mesh024.position.set(6.5,5,.5);

    var g25 = new RoundedBoxGeometry(1,5,1,10,10);
    var m25 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh025 = new THREE.Mesh(g25,m25);
    // scene.add(mesh025);
    mesh025.rotation.set(.585,0,0);
    mesh025.position.set(-6.5,3.5,0);

    var g26 = new RoundedBoxGeometry(1,5,1,10,10);
    var m26 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh026 = new THREE.Mesh(g26,m26);
    // scene.add(mesh026);
    mesh026.rotation.set(.585,0,0);
    mesh026.position.set(6.5,3.5,0);

    //cañones de las alas inferiores
    var g27 = new THREE.CylinderGeometry(1,.2,7,50);
    var m27 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh027 = new THREE.Mesh(g27,m27);
    // scene.add(mesh027);
    mesh027.rotation.set(-1.57,0,0);
    mesh027.position.set(-6.5,-3,4);

    var g28 = new THREE.CylinderGeometry(1,.2,7,50);
    var m28 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh028 = new THREE.Mesh(g28,m28);
    // scene.add(mesh028);
    mesh028.rotation.set(-1.57,0,0);
    mesh028.position.set(6.5,-3,4);

    var g29 = new THREE.SphereGeometry(1,50,50);
    var m29 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh029 = new THREE.Mesh(g29,m29);
    // scene.add(mesh029);
    mesh029.rotation.set(-1.57,0,0);
    mesh029.position.set(-6.5,-3,.5);

    var g30 = new THREE.SphereGeometry(1,50,50);
    var m30 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh030 = new THREE.Mesh(g30,m30);
    // scene.add(mesh030);
    mesh030.rotation.set(-1.57,0,0);
    mesh030.position.set(6.5,-3,.5);

    var g31 = new RoundedBoxGeometry(1,5,1,10,10);
    var m31 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh031 = new THREE.Mesh(g31,m31);
    // scene.add(mesh031);
    mesh031.rotation.set(-.585,0,0);
    mesh031.position.set(-6.5,-1,0);

    var g32 = new RoundedBoxGeometry(1,5,1,10,10);
    var m32 = new THREE.MeshLambertMaterial ({
        color: 0xFFFFFF, side: THREE.DoubleSide
    });
    var mesh032 = new THREE.Mesh(g32,m32);
    // scene.add(mesh032);
    mesh032.rotation.set(-.585,0,0);
    mesh032.position.set(6.5,-1,0);

    var nave= new THREE.Group();
    nave.add(mesh02,mesh03,mesh04,mesh05,mesh07,mesh08, mesh09,
        mesh010,mesh011,mesh012,mesh013,mesh014,mesh015,mesh016,
        mesh017,mesh018,mesh019,mesh020,mesh021,mesh022,mesh023,
        mesh024,mesh025,mesh026, mesh027,mesh028,mesh029,mesh030,
        mesh031,mesh032);
    nave.position.set(x,y,z);
    return nave;

}