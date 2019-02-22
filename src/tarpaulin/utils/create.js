import global from "../global"
import { drawRect } from "../draw"
import { getCanvasScale } from "../helpers"

export default ({
    size = 1200,
    xMin = -1,
    xMax = 1,
    yMin = -1,
    yMax = 1,
} = {}) => {
    if (global.context) {
        throw new Error("Only one canvas per page")
    }

    global.xDiff = xMax - xMin
    global.yDiff = yMax - yMin
    let width = size, height = size
    if (global.xDiff > global.yDiff) {
        height = Math.floor(global.yDiff / global.xDiff * size)
    } else {
        width = Math.floor(global.xDiff / global.yDiff * size)
    }

    [global.width, global.height, global.xMin, global.xMax, global.yMin, global.yMax] = [width, height, xMin, xMax, yMin, yMax]

    global.xFactor = global.xDiff / global.width
    global.yFactor = global.yDiff / global.height
    global.scale = getCanvasScale()
    global.xShift = -xMin * global.width / global.xDiff
    global.yShift = yMax * global.height / global.yDiff

    global.canvas = document.createElement("canvas")
    global.canvas.width = global.width
    global.canvas.height = global.height
    global.canvas.style = `width: ${global.width / 2}px; height: ${global.height / 2}px;`
    document.body.appendChild(global.canvas)

    global.context = global.canvas.getContext("2d")

    // Clear canvas
    drawRect([0, 0], global.canvas.width, global.canvas.height, { fillStyle: "#FFF" })

    // Return generated
    return {
        context: global.context,
        pixelWidth: global.width,
        pixelHeight: global.height,
    }
}
