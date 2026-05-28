import * as THREE from '../js/three.module.js';
export default function O1 ({x,y,z}){

const nave = new THREE.Group();


//Cuerpo

const cuerpo = new THREE.Mesh(
new THREE.CylinderGeometry(1.5,2,10,32),
new THREE.MeshStandardMaterial({color:0x888888})
);

cuerpo.rotation.x = Math.PI/2;
//nave.add(cuerpo);


//Cabina

const cabina = new THREE.Mesh(
new THREE.SphereGeometry(1.4,32,32),
new THREE.MeshStandardMaterial({
color:0x3366ff,
transparent:true,
opacity:0.7
})
);

cabina.position.z = 2.5;
//nave.add(cabina);


// Punta

const punta = new THREE.Mesh(
new THREE.ConeGeometry(1.5,3,32),
new THREE.MeshStandardMaterial({color:0xaaaaaa})
);

punta.rotation.x = Math.PI/2;
punta.position.z = 6.5;
//nave.add(punta);


// alas

function ala(x){

const a = new THREE.Mesh(
new THREE.BoxGeometry(6,0.3,2),
new THREE.MeshStandardMaterial({color:0x444444})
);

a.position.set(x,0,0);
//nave.add(a);

}

ala(3);
ala(-3);


// motor

function motor(x){

const m = new THREE.Mesh(
new THREE.CylinderGeometry(0.6,0.8,3,20),
new THREE.MeshStandardMaterial({color:0x222222})
);

m.rotation.x = Math.PI/2;
m.position.set(x,-0.8,-5);
//nave.add(m);

const propulsor = new THREE.Mesh(
new THREE.TorusGeometry(0.5,0.15,16,32),
new THREE.MeshStandardMaterial({color:0x00ffff})
);

propulsor.position.set(x,-0.8,-6.5);
//nave.add(propulsor);

}

motor(1.2);
motor(-1.2);

var kik = new THREE.Group();
kik.add(cuerpo, cabina, punta, nave);

kik.position.set (x,y,z);
return kik;
}