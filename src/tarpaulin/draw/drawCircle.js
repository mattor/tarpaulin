import global from "../global"
import { initContext } from "../utils"
import { getCanvasX, getCanvasY, getCanvasScale } from "../helpers"

export default ([x, y], radius, props) => {
    initContext(props)

    global.context.beginPath()
    global.context.arc(
        getCanvasX(x),
        getCanvasY(y),
        getCanvasScale(radius),
        0,
        Math.PI * 2,
    )
    global.context.stroke()
}