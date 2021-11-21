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
}

let _3d = new EasyMV("test-model")
_3d.model.addEventListener("load", () => {
    console.log(_3d)
    console.log(`_3d.setModelColor([0,0,0,1],4)`)
    console.log(`_3d.setModelCameraOrbit(0,60, 100)`)
})
let _3d_2 = new EasyMV("test-model_2")
_3d_2.model.addEventListener("load", () => {
    console.log(_3d)
    console.log(`_3d_2.setModelTexture("https://thumbs.dreamstime.com/z/white-grey-hexagon-background-texture-d-render-metal-illustration-82112026.jpg",0)`)
})