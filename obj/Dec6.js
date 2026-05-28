import * as THREE from '../js/three.module.js';
export default function O6 ({x,y,z}){

// 🚀 ================= NAVE TIPO TRANSBORDADOR =================
const nave = new THREE.Group();
//scene.add(nave);

// 🧱 Fuselaje principal (alargado)
const cuerpo = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1.2, 10, 32),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
);
cuerpo.rotation.z = Math.PI / 2;
cuerpo.position.y = 3;
//nave.add(cuerpo);

// 🔺 Nariz aerodinámica
const punta = new THREE.Mesh(
    new THREE.ConeGeometry(1, 3, 32),
    new THREE.MeshLambertMaterial({ color: 0xdddddd })
);
punta.rotation.z = -Math.PI / 2;
punta.position.set(6.5, 3, 0);
//nave.add(punta);

// 🪟 Cabina inclinada
const cabina = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1, 1.5),
    new THREE.MeshLambertMaterial({ color: 267874})
);
cabina.position.set(3.5, 4, 0);
cabina.rotation.z = -0.2;
//nave.add(cabina);

// 🪽 Alas tipo delta
const alaGeo = new THREE.BufferGeometry();
const vertices = new Float32Array([
    0,0,0,
    -6,0,4,
    -2,0,0
]);
alaGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
alaGeo.setIndex([0,1,2]);
alaGeo.computeVertexNormals();

const alaMat = new THREE.MeshLambertMaterial({ color: 267874, side: THREE.DoubleSide });

const ala1 = new THREE.Mesh(alaGeo, alaMat);
ala1.position.set(1, 3, 0);
//nave.add(ala1);

const ala2 = ala1.clone();
ala2.scale.z = -1;
//nave.add(ala2);

// 🧱 Cola vertical
const cola = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 3, 2),
    new THREE.MeshLambertMaterial({ color: 0xcccccc })
);
cola.position.set(-4, 5, 0);
//nave.add(cola);

// 🔥 Motor (mismo nombre para animación)
const motor = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 0.8, 2, 32),
    new THREE.MeshLambertMaterial({ color: 0xff8800 })
);
motor.rotation.z = Math.PI / 2;
motor.position.set(-6, 3, 0);
//nave.add(motor);

nave.position.set(0, 2, 0);

var ani= new THREE.Group();
          ani.add(nave, cuerpo, punta, cabina, ala1, ala2, cola, motor);
          
          ani.position.set (x,y,z);
          return ani;
}