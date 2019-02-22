import global from "../global"
import { initContext } from "../utils"

export default ([x, y], width, height, props = {}) => {
    initContext(props)

    if (props.fillStyle) {
        global.context.fillRect(x, y, width, height)
    }

    if (!props.fillStyle || props.strokeStyle) {
        global.context.strokeRect(x, y, width, height)
    }
}
