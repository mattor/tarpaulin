import global from "../global"
import { initContext } from "../utils"
import { getCanvasX, getCanvasY } from "../helpers"

export default ([x1, y1], [x2, y2], props = {}) => {
    initContext(props)

    global.context.beginPath()
    global.context.moveTo(getCanvasX(x1), getCanvasY(y1))
    global.context.lineTo(getCanvasX(x2), getCanvasY(y2))
    global.context.stroke()
}
