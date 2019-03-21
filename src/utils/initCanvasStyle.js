import { Color } from "../const"
import { glob } from "../utils"

const svgToCanvas = {
    fill: "fillStyle",
    stroke: "strokeStyle",
    strokeWidth: "lineWidth",
}

export default (props = {}) => {
    if (!glob.paper) {
        throw new Error("You have to createCanvas() first")
    }

    glob.paper.fillStyle = Color.BlueGreyLighten3
    glob.paper.strokeStyle = Color.BlueGreyDarken4
    glob.paper.lineWidth = glob.pixelRatio

    for (const prop in props) {
        if (prop === "closed") continue
        const propName = svgToCanvas[prop] || prop
        const propValue = propName === svgToCanvas.strokeWidth ? props[prop] * glob.pixelRatio : props[prop]
        glob.paper[propName] = propValue
    }
}
