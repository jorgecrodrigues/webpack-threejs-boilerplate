const THREE = require('./three');

let scene;
let camera;
let renderer;
let cube;

let init = function () {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    createACube();
    camera.position.z = 5;
    render();
};

let render = function () {
    requestAnimationFrame(render);
    animateCube();
    renderer.render(scene, camera);
};

let createACube = function () {
    let geometry = new THREE.BoxGeometry(1, 3, 5);
    let material = new THREE.MeshBasicMaterial({
        reflectivity: 0,
        color: "blue"
    });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
};

let animateCube = function () {
    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    console.log(cube.rotation);
};

init();
