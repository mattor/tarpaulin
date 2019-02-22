import { glob, initContext } from "../utils"
import { getCanvasX, getCanvasY, getCanvasScale } from "../helpers"

export default ([x, y], radius, props = {}) => {
    initContext(props)

    glob.context.beginPath()
    glob.context.arc(
        getCanvasX(x),
        getCanvasY(y),
        getCanvasScale(radius),
        0,
        Math.PI * 2,
    )

    if (props.fillStyle) {
        glob.context.fill()
    }

    if (!props.fillStyle || props.strokeStyle) {
        glob.context.stroke()
    }
}
