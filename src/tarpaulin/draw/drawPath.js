import global from "../global"
import { initContext } from "../utils"
import { getCanvasX, getCanvasY } from "../helpers"

export default (points, props = {}) => {
    initContext(props)

    global.context.beginPath()
    points.forEach(([x, y]) => {
        global.context.lineTo(getCanvasX(x), getCanvasY(y))
    })

    if (props.fillStyle) {
        global.context.fill()
    }

    if (!props.fillStyle || props.strokeStyle) {
        global.context.stroke()
    }
}
