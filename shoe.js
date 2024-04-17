import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

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
controls.minDistance = 2;
controls.maxDistance = 5;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target.set(0, 1, 0);
controls.update();

// Ground plane
const groundMesh = new THREE.Mesh(new THREE.PlaneGeometry(0, 0), new THREE.MeshStandardMaterial({ color: 0x555555, side: THREE.DoubleSide }));
groundMesh.rotation.x = -Math.PI / 2;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

const spotlight1 = new THREE.SpotLight(0xffffff, 3);
spotlight1.position.set(10, 10, 0);
spotlight1.castShadow = true;
scene.add(spotlight1);

const spotlight2 = new THREE.SpotLight(0xffffff, 3);
spotlight2.position.set(-10, 10, 0);
spotlight2.castShadow = true;
scene.add(spotlight2);

const loader = new GLTFLoader();
loader.load('converse.gltf', function (gltf) {
    scene.add(gltf.scene);
    console.log('Model Loaded');
}, undefined, function (error) {
    console.error('An error occurred:', error);
});

// Use a TextureLoader to load the background image
const textureLoader = new THREE.TextureLoader();
textureLoader.load(
    './sprinkles.jpeg',  // Ensure this path is correct
    function(texture) {
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

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();
