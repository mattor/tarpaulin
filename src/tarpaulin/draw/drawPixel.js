import global from "../global"
import { initContext } from "../utils"

export default ([x, y], props = {}) => {
    initContext(props)

    global.context.fillRect(x, y, 1, 1)
}
