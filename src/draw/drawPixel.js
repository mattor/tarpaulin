import { glob, initCanvasContext } from "../utils"

export default ([x, y], props = {}) => {
    if (glob.canvas.tagName === "svg") {
        throw new Error("drawPixel() is not supported on SVGs")
    }

    initCanvasContext(props)

    glob.context.fillRect(x, y, 1, 1)
}
