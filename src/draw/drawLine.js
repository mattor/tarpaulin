import { glob, initCanvasContext, addSvgElement } from "../utils"
import { getCanvasX, getCanvasY } from "../helpers"

export default ([x1, y1], [x2, y2], props = {}) => {
    if (glob.canvas.tagName === "svg") {
        addSvgElement("line", {
            x1: getCanvasX(x1),
            y1: getCanvasY(y1),
            x2: getCanvasX(x2),
            y2: getCanvasY(y2),
            stroke: props.strokeStyle,
        })
        return
    }

    initCanvasContext(props)

    glob.context.beginPath()
    glob.context.moveTo(getCanvasX(x1), getCanvasY(y1))
    glob.context.lineTo(getCanvasX(x2), getCanvasY(y2))
    glob.context.stroke()
}
