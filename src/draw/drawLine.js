import { glob, initContext } from "../utils"
import { getCanvasX, getCanvasY } from "../helpers"

export default ([x1, y1], [x2, y2], props = {}) => {
    initContext(props)

    glob.context.beginPath()
    glob.context.moveTo(getCanvasX(x1), getCanvasY(y1))
    glob.context.lineTo(getCanvasX(x2), getCanvasY(y2))
    glob.context.stroke()
}
