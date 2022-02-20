// EasyMV
class EasyMW {
    constructor(model) {
        this.model = document.querySelector(`#${model}`)
    }
    // Animation
    get getAvailableAnimations() {
        return this.model.availableAnimations
    }
    get getAnimationCurrentTime() {
        return this.model.currentTime
    }
    get getAnimationDuration() {
        return this.model.duration
    }
    setAnimationTime(time) {
        this.model.currentTime = `${time}`
    }
    setAnimation(animationName) {
        this.model.animationName = animationName
    }
    animationStop() {
        this.model.pause()
    }
    animationPlay() {
        this.model.play()
    }
    // Variants
    get getAvailableVariants() {
        return this.model.availableVariants
    }
    setVariant(variantName) {
        this.model.variantName = `${variantName}`
    }
    // Work with mesh
    setModelColor(color, numMesh) {
        arrayColor = color.split(',').map(numberString => parseFloat(numberString));
        this.model.model.materials[numMesh].pbrMetallicRoughness.setBaseColorFactor(arrayColor)
    }

    // Camera position
    setCameraTarget(value) {
        this.model.cameraTarget = `${value}`
    }
    setModelCameraOrbit(x,y,z) {
        this.model.setAttribute("camera-orbit",`${x}deg ${y}deg ${z}%` )
    }

}

// Pods preview

const podsModel = new EasyMW("pods__model")
const podsActiveBtn = document.querySelector(".pods__btn--active")
const podsRightBtn = document.querySelector(".pods__btn--right")
const podsLeftBtn = document.querySelector(".pods__btn--left")
const podsBackBtn = document.querySelector(".pods__btn--back")

podsModel.model.addEventListener("load", () => {
    let animationBack = false;
    podsActiveBtn.addEventListener("click", () => {
        if(animationBack === false ) {
            podsModel.animationPlay()
            podsActiveBtn.classList.add("pods__btn--hide")
            setTimeout(() => {
                podsModel.animationStop()
                podsRightBtn.classList.add("pods__btn--right--active")
                podsLeftBtn.classList.add("pods__btn--left--active")
                animationBack = true
                podsActiveBtn.children[0].children[1].classList.remove("pods__text--hide")
                podsActiveBtn.children[0].children[0].classList.add("pods__text--hide")
                podsActiveBtn.classList.remove("pods__btn--hide")
            }, 3000)
        }
        else {
            podsModel.animationPlay()
            podsRightBtn.classList.remove("pods__btn--right--active")
            podsLeftBtn.classList.remove("pods__btn--left--active")
            podsActiveBtn.classList.add("pods__btn--hide")
            setTimeout(() => {
                podsModel.animationStop()
                podsModel.setAnimationTime(0)
                animationBack = false
                podsActiveBtn.children[0].children[1].classList.add("pods__text--hide")
                podsActiveBtn.children[0].children[0].classList.remove("pods__text--hide")
                podsActiveBtn.classList.remove("pods__btn--hide")
            }, 3000)
        }
    })
    podsRightBtn.addEventListener("click", () => {
     podsModel.setCameraTarget("5m 17m auto")
        podsBackBtn.classList.add("pods__btn--back--active")

    })
    podsLeftBtn.addEventListener("click", () => {
        podsModel.setCameraTarget("-5m 17m auto")
        podsBackBtn.classList.add("pods__btn--back--active")

    })
    podsBackBtn.addEventListener("click", () => {
        podsModel.setCameraTarget("auto auto auto")
        podsBackBtn.classList.remove("pods__btn--back--active")
    })


})

// Variants model

const variantsModel = new EasyMW("variants__model")

variantsModel.model.addEventListener("load", () => {
    let select = document.querySelector("#variants__select")
    let variantModelArray = variantsModel.getAvailableVariants
    variantModelArray.forEach(item => {
        let newOption = document.createElement("option")
        newOption.value = item
        newOption.innerText = item
        select.appendChild(newOption)
    })
    select.addEventListener("change", (i) => {
        switch (select.value) {
            case "midnight": {
                variantsModel.setVariant("midnight")
                break
            }
            case "beach": {
                variantsModel.setVariant('beach')
                break
            }
            case "street": {
                variantsModel.setVariant('street')
                break
            }
        }
    })
})


// Position model

const customModel = new EasyMW("custom__model")

const positionModelBtnFront = document.querySelector("#position__front")
const positionModelBtnBack = document.querySelector("#position__back")
const positionModelBtnAbove = document.querySelector("#position__above")
const positionModelBtnInside = document.querySelector("#position__inside")

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

function changeCameraPosition(btn, positionArray) {
    btn.addEventListener("click", () => {
        customModel.model.cameraOrbit = positionArray
    })
}
function changeMaterial(initiator, meshIndex, color) {
    initiator.addEventListener("click", () => {
        customModel.setModelColor(color,meshIndex)
    })
}


changeCameraPosition(positionModelBtnFront, "180deg 60deg 100%")
changeCameraPosition(positionModelBtnBack, "0deg 60deg 100%")
changeCameraPosition(positionModelBtnAbove, "180deg 10deg 100%")
changeCameraPosition(positionModelBtnInside, "180deg 190deg 0%")

changeMaterial(positionProtectTrueBtn,2,positionColorRed)
changeMaterial(positionProtectFalseBtn,2,positionColorTransparent)
changeMaterial(positionColorBtnRed,4,positionColorRed)
changeMaterial(positionColorBtnYellow,4,positionColorYellow)
changeMaterial(positionColorBtnBlack,4,positionColorBlack)


// Describe model

const describeModel = new EasyMW("guitar__model")

let describeBtnTop = document.querySelector(".describe__btn--top")
let describeBtnMiddle = document.querySelector(".describe__btn--middle")
let describeBtnBottom = document.querySelector(".describe__btn--bottom")
let describeBottomContent  = document.querySelector(".bridge__content")
let describeTopContent = document.querySelector(".head__content")
let describeMiddleContent = document.querySelector(".frets__content")

let describeBackBtn = document.querySelector(".describe-back__btn")
let describeDefaultContent = document.querySelector(".hello__content")
function removeAllContent() {
    describeBottomContent.classList.remove("describe__content-item--active")
    describeTopContent.classList.remove("describe__content-item--active")
    describeMiddleContent.classList.remove("describe__content-item--active")
    describeDefaultContent.classList.remove("hello__content--active")
}
function describeChangeStyle(content) {
    describeBackBtn.classList.add("describe-back__btn--active")
    content.classList.add("describe__content-item--active")
}

describeBackBtn.addEventListener("click", () => {
    removeAllContent()
    describeModel.setCameraTarget("auto auto auto")
    describeModel.setModelCameraOrbit(0,75,105)
    describeBackBtn.classList.remove("describe-back__btn--active")
    describeDefaultContent.classList.add("hello__content--active")

})

describeBtnBottom.addEventListener("click", () => {
    removeAllContent()
    describeModel.setCameraTarget("auto 3m auto")
    describeModel.setModelCameraOrbit(-20,65,0)
    describeChangeStyle(describeBottomContent)
})
describeBtnTop.addEventListener("click", () => {
    removeAllContent()
    describeModel.setCameraTarget("auto 13m auto")
    describeModel.setModelCameraOrbit(-20,65,0)
    describeChangeStyle(describeTopContent)

})
describeBtnMiddle.addEventListener("click", () => {
    removeAllContent()
    describeModel.setCameraTarget("auto 8m auto")
    describeModel.setModelCameraOrbit(-20,65,0)
    describeChangeStyle(describeMiddleContent)

})


// Animation model

const animationModel = new EasyMW("animation__model")
const select = document.querySelector("#animation__select")

animationModel.model.addEventListener("load", () => {
    animationModel.animationStop()
    animationModel.setAnimation("Wave")
    animationModel.animationPlay()
    setTimeout(() => {
        animationModel.setAnimation("Idle")
    },2000)

    let animationModelArray = animationModel.getAvailableAnimations
    animationModelArray.forEach(item => {
        let newOption = document.createElement("option")
        newOption.value = item
        newOption.innerText = item
        select.appendChild(newOption)
    })

    select.addEventListener("change", (i) => {

        switch (select.value) {
            case "Dance": {
                animationModel.setAnimation("Dance")
                break
            }
            case "Death": {
                animationModel.setAnimation("Death")
                break
            }
            case "Idle": {
                animationModel.setAnimation("Idle")
                break
            }
            case "Jump": {
                animationModel.setAnimation("Jump")
                break
            }
            case "No": {
                animationModel.setAnimation("No")
                break
            }
            case "Punch": {
                animationModel.setAnimation("Punch")
                break
            }
            case "Running": {
                animationModel.setAnimation("Running")
                break
            }
            case "Sitting": {
                animationModel.setAnimation("Sitting")
                break
            }
            case "Standing": {
                animationModel.setAnimation("Standing")
                break
            }
            case "ThumbsUp": {
                animationModel.setAnimation("ThumbsUp")
                break
            }
            case "Walking": {
                animationModel.setAnimation("Walking")
                break
            }
            case "WalkJump": {
                animationModel.setAnimation("WalkJump")
                break
            }
            case "Wave": {
                animationModel.setAnimation("Wave")
                break
            }
            case "Yes": {
                animationModel.setAnimation("Yes")
                break
            }

        }
    })

})
