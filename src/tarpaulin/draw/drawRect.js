import { glob, initContext } from "../utils"

export default ([x, y], width, height, props = {}) => {
    initContext(props)

    if (props.fillStyle) {
        glob.context.fillRect(x, y, width, height)
    }

    if (!props.fillStyle || props.strokeStyle) {
        glob.context.strokeRect(x, y, width, height)
    }
}
