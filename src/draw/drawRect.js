import { glob, initCanvasContext, addSvgElement } from "../utils"
import { getPaperX, getPaperY, getPaperScale } from "../helpers"

export default ([x, y], width, height, props = {}) => {
    if (glob.tarp.tagName === "svg") {
        addSvgElement("rect", {
            x: getPaperX(x),
            y: getPaperY(y),
            width: getPaperScale(width),
            height: getPaperScale(height),
            fill: props.fillStyle,
            stroke: props.strokeStyle,
        })
        return
    }

    initCanvasContext(props)

    if (props.fillStyle) {
        glob.paper.fillRect(getPaperX(x), getPaperY(y), getPaperScale(width), getPaperScale(height))
    }

    if (!props.fillStyle || props.strokeStyle) {
        glob.paper.strokeRect(getPaperX(x), getPaperY(y), getPaperScale(width), getPaperScale(height))
    }
}
