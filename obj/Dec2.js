import * as THREE from '../js/three.module.js';
export default function O2 ({x,y,z}){

// 🚀 ================= NAVE =================
const nave = new THREE.Group();
//scene.add(nave);

// 🛢 Cuerpo
const cuerpo = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.2, 8, 32),
    new THREE.MeshLambertMaterial({ color: 0x999999 })
);
cuerpo.rotation.z = Math.PI / 2;
cuerpo.position.y = 0;
//nave.add(cuerpo);

// 🔺 Punta
const punta = new THREE.Mesh(
    new THREE.ConeGeometry(1.2, 3, 32),
    new THREE.MeshLambertMaterial({ color: 0xff3333 })
);
punta.rotation.z = -Math.PI / 2;
punta.position.set(5.5, 0, 0);
//nave.add(punta);

// 🔵 Cabina
const cabina = new THREE.Mesh(
    new THREE.SphereGeometry(1.3, 32, 32),
    new THREE.MeshLambertMaterial({ color: 0x00ccff })
);
cabina.position.set(1.5, 1, 0);
//nave.add(cabina);

// 🪽 Alas
const ala1 = new THREE.Mesh(
    new THREE.BoxGeometry(5, 0.3, 2),
    new THREE.MeshLambertMaterial({ color: 0x2222ff })
);
ala1.position.z = 3;
ala1.rotation.x = -0.3;
ala1.rotation.x = 0.3;

//nave.add(ala1);

const ala2 = ala1.clone();
ala2.position.z = -3;
ala2.rotation.x = -0.3;
ala2.position.y = 0;
//nave.add(ala2);

// 🔥 Motor
const motor = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 0.8, 2, 32),
    new THREE.MeshLambertMaterial({ color: 0xff8800 })
);
motor.rotation.z = Math.PI / 2;
motor.position.set(-5, 0, 0);
//nave.add(motor);

nave.position.set(0, 0, 0);

var hope = new THREE.Group();
hope.add(nave,cuerpo,punta,cabina,ala1,ala2,motor);

hope.position.set (x,y,z);
return hope;
}
