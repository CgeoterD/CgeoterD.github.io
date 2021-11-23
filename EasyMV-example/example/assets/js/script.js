class EasyMV {
    constructor(model) {
        this.model = document.querySelector(`#${model}`)
    }
    get getAvailableAnimations() {
        return this.model.availableAnimations
    }
    setAnimation(animationName) {
        this.model.animationName = animationName
    }
    setModelColor(arrayRGBColor, numMesh) {
        this.model.model.materials[numMesh].pbrMetallicRoughness.setBaseColorFactor(arrayRGBColor)
    }
    setModelTexture(textureURL, numMesh) {
        this.model.model.materials[numMesh].pbrMetallicRoughness.baseColorTexture.texture.source.setURI(textureURL)
    }
    setModelCameraOrbit(x,y,z) {
        this.model.setAttribute("camera-orbit",`${x}deg ${y}deg ${z}%` )
    }
    setModelSrc(url) {
        this.model.src = url
    }
    setCameraTarget(x,y,z) {
        this.model.cameraTarget = `${x} ${y} ${z}`
    }
    setMaxCameraOrbit(x,y,z) {
        this.model.maxCameraOrbit = `${x}, ${y}, ${z}`
    }

}


let helmet = new EasyMV("test-model")
helmet.model.addEventListener("load", () => {
    console.log(helmet)
    console.log(`helmet.setModelColor([0,0,0,1],4)`)
    console.log(`helmet.setModelCameraOrbit(0,60, 100)`)
    changeBtn.addEventListener('click', () => {
        helmet.setCameraTarget("auto 92m auto")
    })
    changeBtn.addEventListener('dblclick', () => {
        helmet.setCameraTarget("auto 15m auto")
    })

})
// let sneakers = new EasyMV("test-model_2")
// sneakers.model.addEventListener("load", () => {
//     console.log(sneakers)
//     console.log(`sneakers.setModelTexture("https://thumbs.dreamstime.com/z/white-grey-hexagon-background-texture-d-render-metal-illustration-82112026.jpg",0)`)
//
// })
let changeBtn = document.querySelector(".btn")

