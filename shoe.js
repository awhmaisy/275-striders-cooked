import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

const modelViewerElement = document.querySelector('.shoe-viewer');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(modelViewerElement.clientWidth, modelViewerElement.clientHeight);
renderer.outputColorSpace = THREE.sRGBColorSpace;
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
modelViewerElement.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, modelViewerElement.clientWidth / modelViewerElement.clientHeight, 1, 1000);
camera.position.set(3, 1.5, .5);
camera.lookAt(scene.position);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 1.25;
controls.maxDistance = 5;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target.set(0, 1, 0);
controls.update();

function rotateObject(object, degreeX, degreeY, degreeZ) {
    object.rotation.x = degreeX * Math.PI / 180;
    object.rotation.y = degreeY * Math.PI / 180;
    object.rotation.z = degreeZ * Math.PI / 180;
}

const spotlight1 = new THREE.SpotLight(0xffffff, 3);
spotlight1.position.set(10, 10, 0);
spotlight1.castShadow = true;
scene.add(spotlight1);

const spotlight2 = new THREE.SpotLight(0xffffff, 3);
spotlight2.position.set(-10, 10, 0);
spotlight2.castShadow = true;
scene.add(spotlight2);

const loader = new GLTFLoader();
let shoe;  
loader.load('3D Assets/converse.gltf', function (gltf) {
    shoe = gltf.scene;
    scene.add(shoe);
    console.log('Model Loaded');
}, undefined, function (error) {
    console.error('An error occurred:', error);
});
const textureLoader = new THREE.TextureLoader();
textureLoader.load(
    'collectionassets/Dragtorotatebg.png',
    (texture) => {
        scene.background = texture;
    },
    undefined,
    function(err) {
        console.error('An error has occurred during loading the texture.', err);
    }
);

function onWindowResize() {
    camera.aspect = modelViewerElement.clientWidth / modelViewerElement.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(modelViewerElement.clientWidth, modelViewerElement.clientHeight);
}

window.addEventListener('resize', onWindowResize);

let pins = [];
const pinPositions = [
    //sports
    new THREE.Vector3(-.1, 1.2, 0),
    new THREE.Vector3(-.09, 1.5, -.5),
    new THREE.Vector3(-.6, 1.2, 0),
    new THREE.Vector3(-.55, 1.7, -.2),
    new THREE.Vector3(-.6, 1.4, -.35),
    new THREE.Vector3(1, 1.2, 1),
    new THREE.Vector3(-.6, 1.2, 0),
    //animal
    new THREE.Vector3(-.1, 1.2, 0),
    new THREE.Vector3(-.09, 1.5, -.5),
    new THREE.Vector3(-.6, 1.2, 0),
    new THREE.Vector3(-.55, 1.7, -.2),
    new THREE.Vector3(-.6, 1.4, -.35),
    new THREE.Vector3(1, 1.2, 1),
    new THREE.Vector3(-.6, 1.2, 0),
    //cartoon
    new THREE.Vector3(-.1, 1.2, 0),
    new THREE.Vector3(-.09, 1.5, -.5),
    new THREE.Vector3(-.6, 1.2, 0),
    new THREE.Vector3(-.55, 1.7, -.2),
    new THREE.Vector3(-.6, 1.4, -.35),
    new THREE.Vector3(1, 1.2, 1),
    new THREE.Vector3(-.6, 1.2, 0),
    //letters
    new THREE.Vector3(-.1, 1.2, 0),
    new THREE.Vector3(-.09, 1.5, -.5),
    new THREE.Vector3(-.6, 1.2, 0),
    new THREE.Vector3(-.55, 1.7, -.2),
    new THREE.Vector3(-.6, 1.4, -.35),
    new THREE.Vector3(1, 1.2, 1),
    new THREE.Vector3(-.6, 1.2, 0),
    //retro
    new THREE.Vector3(-.1, 1.2, 0),
    new THREE.Vector3(-.09, 1.5, -.5),
    new THREE.Vector3(-.6, 1.2, 0),
    new THREE.Vector3(-.55, 1.7, -.2),
    new THREE.Vector3(-.6, 1.4, -.35),
    new THREE.Vector3(1, 1.2, 1),
    new THREE.Vector3(-.6, 1.2, 0),
    //university
    new THREE.Vector3(-.1, 1.2, 0),
    new THREE.Vector3(-.09, 1.5, -.5),
    new THREE.Vector3(-.6, 1.2, 0),
    new THREE.Vector3(-.55, 1.7, -.2),
    new THREE.Vector3(-.6, 1.4, -.35),
    new THREE.Vector3(1, 1.2, 1),
    new THREE.Vector3(-.6, 1.2, 0),
];

const modelPaths = {
    //sports page
    Soccer: '3D Assets/soccer.gltf',
    Basketball: '3D Assets/cherry.gltf',
    Football: '3D Assets/butterfly.gltf',
    Glove: '3D Assets/bones.gltf',
    Nascar: '3D Assets/rollingstone.gltf',
    Dodgers: '3D Assets/bones.gltf',
    Softball: '3D Assets/bones.gltf',
    //animals page
    Cat: '3D Assets/soccer.gltf',
    Unicorn: '3D Assets/cherry.gltf',
    Ladybug: '3D Assets/bones.gltf',
    Butterfly: '3D Assets/butterfly.gltf',
    Dinosaur: '3D Assets/rollingstone.gltf',
    PawPrint: '3D Assets/bones.gltf',
    Llama: '3D Assets/bones.gltf',
    //cartoon page
    Rick: '3D Assets/soccer.gltf',
    Morty: '3D Assets/cherry.gltf',
    BuzzLightyear: '3D Assets/bones.gltf',
    MinnieMouse: '3D Assets/butterfly.gltf',
    Snoopy: '3D Assets/rollingstone.gltf',
    Woodstock: '3D Assets/bones.gltf',
    Yoda: '3D Assets/bones.gltf',
    Spongebob: '3D Assets/rollingstone.gltf',
    // letters
    A: '3D Assets/soccer.gltf',
    M: '3D Assets/cherry.gltf',
    E: '3D Assets/bones.gltf',
    J: '3D Assets/butterfly.gltf',
    H: '3D Assets/rollingstone.gltf',
    O: '3D Assets/bones.gltf',
    W: '3D Assets/bones.gltf',
    // retro
    RetroPack: '3D Assets/soccer.gltf',
    HangLoose: '3D Assets/cherry.gltf',
    SeventiesHeartChain: '3D Assets/bones.gltf',
    DiscoCherries: '3D Assets/butterfly.gltf',
    FestivalDaisyIcon: '3D Assets/rollingstone.gltf',
    HeartSunglasses: '3D Assets/bones.gltf',
    BeadedStrapChain: '3D Assets/bones.gltf',
    // university
    Standford: '3D Assets/soccer.gltf',
    Duke: '3D Assets/cherry.gltf',
    UOM: '3D Assets/bones.gltf',
    UOK: '3D Assets/butterfly.gltf',
    OOU: '3D Assets/rollingstone.gltf',
    LSU: '3D Assets/bones.gltf',
    FSU: '3D Assets/bones.gltf',
};

function tryOn(productName) {
    const index = Object.keys(modelPaths).indexOf(productName);
    if (index === -1) {
        console.error('Product name not found:', productName);
        return; 
    }


    if (pins[index]) {
        scene.remove(pins[index]);
        pins[index] = null;      
        console.log('Pin removed:', productName);
        return;
    }

    if (pins.filter(Boolean).length >= 5) {
        console.log('Maximum of 5 pins are already added');
        return;
    }

    const modelPath = modelPaths[productName];
    const pinLoader = new GLTFLoader();
    pinLoader.load(modelPath, function (gltf) {
        const pin = gltf.scene;
        pin.scale.set(0.2, 0.2, 0.2); 

        if (!pinPositions[index]) {
            console.error('Pin position is undefined for index:', index);
            return;
        }
        
        pin.position.copy(pinPositions[index]); 
        pin.rotation.x = degreesToRadians(90); 
        pin.rotation.y = degreesToRadians(0);
        pin.rotation.z = degreesToRadians(270);

        scene.add(pin); 
        pins[index] = pin; 
        console.log('Pin added:', productName);
    }, undefined, function (error) {
        console.error('Error loading the pin model:', productName, error);
    });
}

document.querySelectorAll('.product button').forEach(btn => {
    const productName = btn.getAttribute('data-product');
    btn.addEventListener('click', () => tryOn(productName));
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.try-on-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            if (this.textContent.includes('Remove')) {
                this.textContent = `Try On`;
            } else {
                this.textContent = `Remove`;
            }
        });
    });
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();
