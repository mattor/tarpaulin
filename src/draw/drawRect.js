import { glob, initCanvasContext, addSvgElement } from "../utils"
import { getCanvasX, getCanvasY, getCanvasScale } from "../helpers"

export default ([x, y], width, height, props = {}) => {
    if (glob.canvas.tagName === "svg") {
        addSvgElement("rect", {
            x: getCanvasX(x),
            y: getCanvasY(y),
            width: getCanvasScale(width),
            height: getCanvasScale(height),
            fill: props.fillStyle,
            stroke: props.strokeStyle,
        })
        return
    }

    initCanvasContext(props)

    if (props.fillStyle) {
        glob.context.fillRect(getCanvasX(x), getCanvasY(y), getCanvasScale(width), getCanvasScale(height))
    }

    if (!props.fillStyle || props.strokeStyle) {
        glob.context.strokeRect(getCanvasX(x), getCanvasY(y), getCanvasScale(width), getCanvasScale(height))
    }
}
