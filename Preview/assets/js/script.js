//  model viewer var model
const animationModel = document.querySelector("#animation__container model-viewer")
const variantsModel = document.querySelector("#variants__container model-viewer")
const positionModel = document.querySelector("#position__container model-viewer")


// Variants model
variantsModel.addEventListener("load", () => {
    let select = document.querySelector("#variants__select")
    let variantModelArray = variantsModel.availableVariants
    variantModelArray.forEach(item => {
        let newOption = document.createElement("option")
        newOption.value = item
        newOption.innerText = item
        select.appendChild(newOption)
    })
    select.addEventListener("change", (i) => {
        switch (select.value) {
            case "midnight": {
                variantsModel.variantName = 'midnight'
                break
            }
            case "beach": {
                variantsModel.variantName = 'beach'
                break
            }
            case "street": {
                variantsModel.variantName = 'street'
                break
            }
        }
    })



})


// Position model
const positionModelBtnFront = document.querySelector("#position__front")
const positionModelBtnBack = document.querySelector("#position__back")
const positionModelBtnAbove = document.querySelector("#position__above")
const positionModelBtnInside = document.querySelector("#position__inside")

function changeCameraPosition(btn, positionArray) {
    btn.addEventListener("click", () => {
        positionModel.cameraOrbit = positionArray
    })
}

changeCameraPosition(positionModelBtnFront, "180deg 60deg 100%")
changeCameraPosition(positionModelBtnBack, "0deg 60deg 100%")
changeCameraPosition(positionModelBtnAbove, "180deg 10deg 100%")
changeCameraPosition(positionModelBtnInside, "180deg 190deg 0%")

const positionColorBtnRed = document.querySelector(".color_circle--red")
const positionColorBtnYellow = document.querySelector(".color_circle--yellow")
const positionColorBtnBlack = document.querySelector(".color_circle--black")

const positionProtectTrueBtn = document.querySelector("#position__protect--true")
const positionProtectFalseBtn = document.querySelector("#position__protect--false")

const positionColorRed = "1,0,0,1";
const positionColorYellow = "1, 0.9292978008, 0, 1";
const positionColorBlack = "0,0,0,1";
const positionColorTransparent = "0,0,0,-1";
let arrayColor;
function changeMaterial(initiator, meshIndex, color) {
    initiator.addEventListener("click", () => {
        arrayColor = color.split(',').map(numberString => parseFloat(numberString));
        positionModel.model.materials[meshIndex].pbrMetallicRoughness.setBaseColorFactor(arrayColor);
    })
}


changeMaterial(positionProtectTrueBtn,2,positionColorRed)
changeMaterial(positionProtectFalseBtn,2,positionColorTransparent)
changeMaterial(positionColorBtnRed,4,positionColorRed)
changeMaterial(positionColorBtnYellow,4,positionColorYellow)
changeMaterial(positionColorBtnBlack,4,positionColorBlack)



// Animation model
animationModel.addEventListener("load", () => {
        animationModel.pause()
        animationModel.animationName = "Wave"
        animationModel.play()
        setTimeout(() => {
            animationModel.animationName = "Idle"
        },2000)

    })

animationModel.addEventListener("load", () => {
    let select = document.querySelector("#animation__select")
    let animationModelArray = animationModel.availableAnimations
    animationModelArray.forEach(item => {
        let newOption = document.createElement("option")
        newOption.value = item
        newOption.innerText = item
        select.appendChild(newOption)
    })

    select.addEventListener("change", (i) => {

        switch (select.value) {
            case "Dance": {
                animationModel.animationName = 'Dance'
                break
            }
            case "Death": {
                animationModel.animationName = 'Death'
                break
            }
            case "Idle": {
                animationModel.animationName = 'Idle'
                break
            }
            case "Jump": {
                animationModel.animationName = 'Jump'
                break
            }
            case "No": {
                animationModel.animationName = 'No'
                break
            }
            case "Punch": {
                animationModel.animationName = 'Punch'
                break
            }
            case "Running": {
                animationModel.animationName = 'Running'
                break
            }
            case "Sitting": {
                animationModel.animationName = 'Sitting'
                break
            }
            case "Standing": {
                animationModel.animationName = 'Standing'
                break
            }
            case "ThumbsUp": {
                animationModel.animationName = 'ThumbsUp'
                break
            }
            case "Walking": {
                animationModel.animationName = 'Walking'
                break
            }
            case "WalkJump": {
                animationModel.animationName = 'WalkJump'
                break
            }
            case "Wave": {
                animationModel.animationName = 'Wave'
                break
            }
            case "Yes": {
                animationModel.animationName = 'Yes'
                break
            }

        }
    })
})

class EasyMW {
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
    setCameraTarget(x,y,z) {
        this.model.cameraTarget = `${x}m ${y}m ${z}m`
    }
    setModelCameraOrbit(x,y,z) {
        this.model.setAttribute("camera-orbit",`${x}deg ${y}deg ${z}%` )
    }

}
let _3d = new EasyMW("test_model")
_3d.model.addEventListener("load", () => {
    _3d.model.touchAction = "pan-y"
    console.log(_3d)
})
 let b = new EasyMW("test-model-2")
b.model.addEventListener("load", () => {
    console.log(b)
})
let t = new EasyMW("test-model-3")
t.model.addEventListener("load", () => {
    console.log(t)
})
let d = new EasyMW("test-model-4")
d.model.addEventListener("load", () => {
    console.log(d)
})




let hotspotBtn_3 = document.querySelector(".Hotspot_3")
let hotspotBtn_2 = document.querySelector(".Hotspot_2")
let hotspotBtn_1 = document.querySelector(".Hotspot_1")
let hotspotBtn_1_content = document.querySelector(".bridge__content")
let hotspotBtn_2_content = document.querySelector(".head__content")
let hotspotBtn_3_content = document.querySelector(".frets__content")

let backBtn = document.querySelector("#back__btn")
let defaultContent = document.querySelector(".hello__content")

backBtn.addEventListener("click", () => {
    removeAllContent()
    d.model.cameraTarget = "auto auto auto"
    d.setModelCameraOrbit(0,75,105)
    backBtn.classList.remove("back__btn--active")
    defaultContent.classList.add("hello__content--active")

})

hotspotBtn_1.addEventListener("click", () => {
    removeAllContent()
    d.model.cameraTarget = "auto 3m auto"
    d.setModelCameraOrbit(-20,65,0)
    backBtn.classList.add("back__btn--active")
    hotspotBtn_1_content.classList.add("describe__content-item--active")
})
hotspotBtn_2.addEventListener("click", () => {
    removeAllContent()
    d.model.cameraTarget = "auto 13m auto"
    d.setModelCameraOrbit(-20,65,0)
    backBtn.classList.add("back__btn--active")
    hotspotBtn_2_content.classList.add("describe__content-item--active")
})
hotspotBtn_3.addEventListener("click", () => {
    removeAllContent()
    d.model.cameraTarget = "auto 8m auto"
    d.setModelCameraOrbit(-20,65,0)
    backBtn.classList.add("back__btn--active")
    hotspotBtn_3_content.classList.add("describe__content-item--active")
})

function removeAllContent() {
    hotspotBtn_1_content.classList.remove("describe__content-item--active")
    hotspotBtn_2_content.classList.remove("describe__content-item--active")
    hotspotBtn_3_content.classList.remove("describe__content-item--active")
    defaultContent.classList.remove("hello__content--active")
}