import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl1')


//Scene 
const scene = new THREE.Scene()

//Object: geometries or other object
//Mesh: which is combination of geometry (the shape) and material(how it looks)

//geometry 
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new  THREE.MeshBasicMaterial({color:0Xff0000})
const mesh = new THREE.Mesh(geometry,material)

//ADD MESH TO THE SCENE
scene.add(mesh)


//size 
const sizes = {
    width: 800, 
    height: 600 
}
//camera : theoretical point of view used when rendering 
//two parameter: field of view, aspect ratio(width and height)
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.z =3
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas:canvas

})
renderer.setSize(sizes.width,sizes.height)

renderer.render(scene,camera)