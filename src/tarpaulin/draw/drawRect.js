import global from "../global"
import { initContext } from "../utils"

export default ([x, y], width, height, props) => {
    initContext(props)

    global.context.fillRect(x, y, width, height)
}