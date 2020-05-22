import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const canva = document.querySelector(".webgl")
const canvaBounding = canva.getBoundingClientRect()


const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75,canvaBounding.width/canvaBounding.height,0.1,200)
camera.position.z = 50
scene.add(camera)

const renderer = new THREE.WebGLRenderer({canvas: canva, alpha: true })
renderer.setSize(canvaBounding.width,canvaBounding.height)
renderer.setClearColor( 0x00000000, 0 );

// const controls = new OrbitControls(camera, renderer.domElement)

/** resize **/


window.addEventListener('resize', () => {
    console.log()
    const canvasBounding = canva.getBoundingClientRect()

    camera.aspect = canvasBounding.width / canvasBounding.height
    camera.updateProjectionMatrix()

    
    renderer.setSize(window.innerWidth,window.innerHeight)
})

/** Objects **/ 

const debugCube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xFF5555})

)
// scene.add(debugCube)

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(3,3,3),
    new THREE.MeshStandardMaterial({color: 0xCCCCCC})

)
scene.add(cube)

cube.position.x = 30
cube.position.y = -20
cube.position.z = 10

const cube2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(4,4,4),
    new THREE.MeshStandardMaterial({color: 0xCCCCCC})

)
scene.add(cube2)

cube2.position.x = 10
cube2.position.y = -30
cube2.position.z = -60

const cube3 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(4,4,4),
    new THREE.MeshStandardMaterial({color: 0xCCCCCC})

)
scene.add(cube3)

cube3.position.x = 40
cube3.position.y = -10
cube3.position.z = -50


const sphere = new THREE.Mesh(
    new THREE.IcosahedronBufferGeometry(3,3),
    new THREE.MeshStandardMaterial({color: 0xCCCCCC})

)
scene.add(sphere)

sphere.position.x = -30
sphere.position.y = -20
sphere.position.z = -40

const donut = new THREE.Mesh(
    new THREE.TorusBufferGeometry(4,2,8,15),
    new THREE.MeshStandardMaterial({color: 0xCCCCCC})

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


const cliGroup = new THREE.Group()
gltfLoader.load(
    'models/cli.gltf',
    (gltf) => {
        while(gltf.scene.children.length)
        {
            cliGroup.add(gltf.scene.children[0])
        }
    },
    undefined,
    (error) => {
        console.log("error")
        console.log(error)
    }
)
scene.add(cliGroup)
cliGroup.scale.set(0.005,0.005,0.005)

cliGroup.position.x = -30
cliGroup.position.y = 0
cliGroup.position.z = 20


const burgerGroup = new THREE.Group()
gltfLoader.load(
    'models/burger.gltf',
    (gltf) => {
        while(gltf.scene.children.length)
        {
            burgerGroup.add(gltf.scene.children[0])
        }
    },
    undefined,
    (error) => {
        console.log("error")
        console.log(error)
    }
)
scene.add(burgerGroup)
burgerGroup.scale.set(0.05,0.05,0.05)

burgerGroup.position.x = 30
burgerGroup.position.y = 0
burgerGroup.position.z = 20

const telescopeGroup = new THREE.Group()
gltfLoader.load(
    'models/telescope.gltf',
    (gltf) => {
        while(gltf.scene.children.length)
        {
            telescopeGroup.add(gltf.scene.children[0])
        }
    },
    undefined,
    (error) => {
        console.log("error")
        console.log(error)
    }
)
scene.add(telescopeGroup)
telescopeGroup.scale.set(0.07,0.07,0.07)

telescopeGroup.position.x = 0
telescopeGroup.position.y = 10
telescopeGroup.position.z = 0

const aircraftGroup = new THREE.Group()
gltfLoader.load(
    'models/avion.gltf',
    (gltf) => {
        while(gltf.scene.children.length)
        {
            aircraftGroup.add(gltf.scene.children[0])
        }
    },
    undefined,
    (error) => {
        console.log("error")
        console.log(error)
    }
)
scene.add(aircraftGroup)
aircraftGroup.scale.set(0.08,0.08,0.08)

aircraftGroup.position.x = -70
aircraftGroup.position.y = -30
aircraftGroup.position.z = -40


/** Lights **/


const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
directionalLight.position.z = 50
scene.add(directionalLight)


/** loop **/ 



let nextPos =[
    {x: 0,y: 0},
    {x: 0,y: 0},
    {x: 0,y: 0},
    {x: 0,y: 0},
    {x: 0,y: 0},
    {x: 0,y: 0},
    {x: 0,y: 0},
    {x: 0,y: 0},
    {x: 0,y: 0},
    {x: 0,y: 0},
    {x: 0,y: 0}]

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

        cube2.rotation.x += 0.007
        cube2.rotation.y += 0.022

        cube2.position.x += ((nextPos[7].x * 40) - cube2.position.x) * 0.001
        cube2.position.y += ((nextPos[7].y * 20) - cube2.position.y) * 0.001

        cube3.rotation.x += 0.007
        cube3.rotation.y += 0.022

        cube3.position.x += ((nextPos[8].x * 40) - cube3.position.x) * 0.001
        cube3.position.y += ((nextPos[8].y * 20) - cube3.position.y) * 0.001


        cliGroup.rotation.y += 0.01

        cliGroup.position.x += ((nextPos[5].x * 40) - cliGroup.position.x) * 0.001
        cliGroup.position.y += ((nextPos[5].y * 20) - cliGroup.position.y) * 0.001


        burgerGroup.rotation.y += 0.01
        burgerGroup.rotation.x += 0.02

        burgerGroup.position.x += ((nextPos[6].x * 40) - burgerGroup.position.x) * 0.001
        burgerGroup.position.y += ((nextPos[6].y * 20) - burgerGroup.position.y) * 0.001


        telescopeGroup.rotation.y += 0.01
        telescopeGroup.rotation.x += 0.007

        telescopeGroup.position.x += ((nextPos[6].x * 40) - telescopeGroup.position.x) * 0.001
        telescopeGroup.position.y += ((nextPos[6].y * 20) - telescopeGroup.position.y) * 0.001


        aircraftGroup.rotation.y += 0.004
        aircraftGroup.rotation.x -= 0.001

        aircraftGroup.position.x += ((nextPos[9].x * 40) - aircraftGroup.position.x) * 0.001
        aircraftGroup.position.y += ((nextPos[9].y * 20) - aircraftGroup.position.y) * 0.001



        sphere.position.x += ((nextPos[4].x * 40) - sphere.position.x) * 0.001
        sphere.position.y += ((nextPos[4].y * 20) - sphere.position.y) * 0.001

        renderer.render(scene, camera)

    }
}
loop()