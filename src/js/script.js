import * as THREE from 'three';
import { Camera } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

// Stoped at 22:10 

//installs -    npm install data.gui - add the gui helper
//              npm install parcel -g  (installed globaly)
//   parcel ./src/index.html - run program

//add renderer
const renderer = new THREE.WebGLRenderer();
//set size of renderer
renderer.setSize(window.innerWidth, window.innerHeight);
//add the renderer to the dom
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

// set camera up
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
    );

// orbit control instance
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();
// x/y/z helper guids
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

//X,Y,Z feild of view
camera.position.set(-10,30,30);

// ADD abox to the scene
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);
// end of box

// Add plain to scene
const planeGeometry = new THREE.PlaneGeometry(30, 30);
const PlaneMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF,
    //make the palane bottom solid
side: THREE.DoubleSide
});

const plane = new THREE.Mesh(planeGeometry, PlaneMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;
//end of plain

//make a sphere -
// const sphereGeometry = new THREE.SphereGeometry(4, 50,50);
// //shere with standard material - 
// const sphereMaterial = new THREE.MeshStandardMaterial({color: 0x0000FF,
// wireframe:false
// });
//spherer with basic material
const sphereGeometry = new THREE.SphereGeometry(4, 50,50);
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF,
wireframe:true
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
// position shere
sphere.position.set(-10, 10,0);
//gui helper
const gui = new dat.GUI();
const options = {
    sphereColor: '#ffea00',
     wireframe:false
}
//gui control color option
gui.addColor(options, 'sphereColor').onChange(function(e){
    sphere.material.color.set(e);
});
//gui control wireframe option
gui.add(options, 'wireframe').onChange(function(e){
    sphere.material.wireframe = e;
});
//end of sphere


// animate box
function animate(time){
 box.rotation.x = time / 1000;
 box.rotation.y = time / 1000;
 //box.rotation.y += 0.01;  manual
    renderer.render(scene, camera);
 
}

renderer.setAnimationLoop(animate);




 

