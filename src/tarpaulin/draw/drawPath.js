import { glob, initContext } from "../utils"
import { getCanvasX, getCanvasY } from "../helpers"

export default (points, props = {}) => {
    initContext(props)

    glob.context.beginPath()
    points.forEach(([x, y]) => {
        glob.context.lineTo(getCanvasX(x), getCanvasY(y))
    })

    if (props.fillStyle) {
        glob.context.fill()
    }

    if (!props.fillStyle || props.strokeStyle) {
        glob.context.stroke()
    }
}
