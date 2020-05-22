import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Color } from 'three'

const canva = document.querySelector(".webgl")
const canvaBounding = canva.getBoundingClientRect()


const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75,canvaBounding.width/canvaBounding.height,0.1,100)
camera.position.z = 50
scene.add(camera)

const renderer = new THREE.WebGLRenderer({canvas: canva, alpha: true })
renderer.setSize(canvaBounding.width,canvaBounding.height)
renderer.setClearColor( 0x00000000, 0 );

// const controls = new OrbitControls(camera, renderer.domElement)

/** resize **/


window.addEventListener('resize', () => {
    const canvasBounding = canva.getBoundingClientRect()

    camera.aspect = canvasBounding.width / canvasBounding.height
    camera.updateProjectionMatrix()

    
    renderer.setSize(canvaBounding.width,canvaBounding.height)
})

/** Objects **/ 

const debugCube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xFF5555})

)
// scene.add(debugCube)

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(3,3,3),
    new THREE.MeshStandardMaterial({color: 0xAAAAAA})

)
scene.add(cube)

cube.position.x = 30
cube.position.y = -20
cube.position.z = 10


const sphere = new THREE.Mesh(
    new THREE.IcosahedronBufferGeometry(3,3),
    new THREE.MeshStandardMaterial({color: 0xAAAAAA})

)
scene.add(sphere)

sphere.position.x = -30
sphere.position.y = -20
sphere.position.z = -40

const donut = new THREE.Mesh(
    new THREE.TorusBufferGeometry(4,2,5,10),
    new THREE.MeshStandardMaterial({color: 0xAAAAAA})

)
scene.add(donut)

donut.position.x = -50
donut.position.y = 30
donut.position.z = -20


const gltfLoader = new GLTFLoader()

const screenGroup = new THREE.Group()
gltfLoader.load(
    'models/screen.gltf',
    (gltf) => {
        while(gltf.scene.children.length)
        {
            screenGroup.add(gltf.scene.children[0])
        }
    },
    undefined,
    (error) => {
        console.log("error")
        console.log(error)
    }
)
scene.add(screenGroup)

screenGroup.scale.set(0.01,0.01,0.01)

screenGroup.position.x = 20
screenGroup.position.y = 20


const keyboardGroup = new THREE.Group()
gltfLoader.load(
    'models/keyboard.gltf',
    (gltf) => {
        while(gltf.scene.children.length)
        {
            keyboardGroup.add(gltf.scene.children[0])
        }
    },
    undefined,
    (error) => {
        console.log("error")
        console.log(error)
    }
)
scene.add(keyboardGroup)
keyboardGroup.scale.set(17,17,17)

keyboardGroup.position.x = -20
keyboardGroup.position.y = -30
keyboardGroup.position.z = -10


/** Lights **/


const ambientLight = new THREE.AmbientLight(0x000000, 0.4)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.4)
directionalLight.position.z = 50
scene.add(directionalLight)


/** loop **/ 



let nextPos =[{x: 0,y: 0},{x: 0,y: 0},{x: 0,y: 0},{x: 0,y: 0},{x: 0,y: 0}]

setInterval(()=>{
    nextPos.forEach((e)=> {
        e.x += (Math.random()-0.5)
        e.y += (Math.random()-0.5)
        if (e.x > 2.5) {
            e.x -= 0.5
        }else if(e.x < -2.5){
            e.x += 0.5
        }
        if (e.y < -2) {
            e.y += 0.5
        }else if(e.y > 2){
            e.y -= 0.5
        }
    })

    // nextPosX += (Math.random()-0.5)
    // nextPosY += (Math.random()-0.5)
    // console.log(nextPosX)
    // console.log(nextPosY)
    // console.log("-------")
    
    debugCube.position.x = nextPos[0].x * 60
    debugCube.position.y = nextPos[0].y * 40
},500)

const HomePage = document.querySelector(".homePage")

const loop = () => {
    window.requestAnimationFrame(loop)

    if(!HomePage.classList.contains("displayNone")){

        screenGroup.rotation.x += 0.005
        screenGroup.rotation.y += 0.02

        screenGroup.position.x += ((nextPos[0].x * 40) - screenGroup.position.x) * 0.001
        screenGroup.position.y += ((nextPos[0].y * 20) - screenGroup.position.y) * 0.001


        keyboardGroup.rotation.x += 0.004
        keyboardGroup.rotation.y += 0.016

        keyboardGroup.position.x += ((nextPos[1].x * 40) - keyboardGroup.position.x) * 0.001
        keyboardGroup.position.y += ((nextPos[1].y * 20) - keyboardGroup.position.y) * 0.001


        donut.rotation.x += 0.006
        donut.rotation.y += 0.019

        donut.position.x += ((nextPos[2].x * 40) - donut.position.x) * 0.001
        donut.position.y += ((nextPos[2].y * 20) - donut.position.y) * 0.001


        cube.rotation.x += 0.007
        cube.rotation.y += 0.022

        cube.position.x += ((nextPos[3].x * 40) - cube.position.x) * 0.001
        cube.position.y += ((nextPos[3].y * 20) - cube.position.y) * 0.001



        sphere.position.x += ((nextPos[4].x * 40) - sphere.position.x) * 0.001
        sphere.position.y += ((nextPos[4].y * 20) - sphere.position.y) * 0.001

        // console.log(cube.position.x)
        renderer.render(scene, camera)

    }
}
loop()