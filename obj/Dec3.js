import * as THREE from '../js/three.module.js';
export default function O3 ({x,y,z}){

// CARGAR TEXTURA
const textureLoader = new THREE.TextureLoader();

const metalTexture = textureLoader.load('images/nave.jpg');

const glassTexture = textureLoader.load('images/vidrio.jpg');

// BASE DE LA NAVE
const baseGeometry = new THREE.CylinderGeometry(2,2,0.4,32);
const baseMaterial = new THREE.MeshStandardMaterial({
map: metalTexture
});
const base = new THREE.Mesh(baseGeometry, baseMaterial);
//scene.add(base);

// Capsula
const domeGeometry = new THREE.SphereGeometry(1,32,32,0,Math.PI*2,0,Math.PI/2);

const domeMaterial = new THREE.MeshStandardMaterial({
map: glassTexture
});

const dome = new THREE.Mesh(domeGeometry, domeMaterial);
dome.position.y = 0.2;
//scene.add(dome);

var mar = new THREE.Group();
mar.add(base, dome);

mar.position.set (x,y,z);
return mar;
}