import * as THREE from '../js/three.module.js';
export default function O4 ({x,y,z}){

  // Grupo del satélite
  const satelite = new THREE.Group();

  const textureLoader = new THREE.TextureLoader();


  // Cuerpo principal
  const bodyGeometry = new THREE.BoxGeometry(2, 2, 2);
  const bodyMaterial = new THREE.MeshStandardMaterial({color: 0x5A9690});
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  //satelite.add(body);

  // Antena 
  const dishGeometry = new THREE.CylinderGeometry(0.1, 1, 0.5, 32, 1, true);
  const dishMaterial = new THREE.MeshStandardMaterial({color: 0xcccccc});
  const dish = new THREE.Mesh(dishGeometry, dishMaterial);
  dish.rotation.z = Math.PI / 2;
  dish.position.set(2, 0, 0);
  //satelite.add(dish);

  // Soporte antena
  const supportGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 16);
  const supportMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
  const support = new THREE.Mesh(supportGeometry, supportMaterial);
  support.rotation.z = Math.PI / 2;
  support.position.set(1, 0, 0);
  //satelite.add(support);

  // Panel solar
  const panelGeometry = new THREE.BoxGeometry(4, 0.2, 2);
  const panelMaterial = new THREE.MeshStandardMaterial({ color: 0xB6CEB4});

  const Panel1 = new THREE.Mesh(panelGeometry, panelMaterial);
  Panel1.position.set(0, 0, -3.4);
  Panel1.rotation.set(0,1.53,0);
  //satelite.add(Panel1);

  const Panel2 = new THREE.Mesh(panelGeometry, panelMaterial);
  Panel2.position.set(0, 0, 3.4);
    Panel2.rotation.set(0,1.53,0);
  //satelite.add(Panel2);

  // Agregar 
  //scene.add(satelite);

  var leo = new THREE.Group();
  leo.add(body, dish, support, Panel1, Panel2, satelite);
  
  leo.position.set (x,y,z);
  return leo;

}