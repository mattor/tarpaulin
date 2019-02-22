import { glob, initContext } from "../utils"

export default ([x, y], props = {}) => {
    initContext(props)

    glob.context.fillRect(x, y, 1, 1)
}
