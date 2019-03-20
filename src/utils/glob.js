import { getCanvasScale } from "../helpers"

const glob = {}

export const init = ({ size, xMin, xMax, yMin, yMax, pixelRatio }) => {
    glob.size = size
    glob.xMin = xMin
    glob.xMax = xMax
    glob.yMin = yMin
    glob.yMax = yMax

    glob.pixelRatio = pixelRatio || window.devicePixelRatio || 1

    glob.xDiff = glob.xMax - glob.xMin
    glob.yDiff = glob.yMax - glob.yMin

    glob.canvasWidth = glob.pixelRatio * glob.size
    glob.canvasHeight = glob.pixelRatio * glob.size
    if (glob.xDiff > glob.yDiff) {
        glob.canvasHeight = glob.pixelRatio * glob.yDiff / glob.xDiff * glob.size
    } else {
        glob.canvasWidth = glob.pixelRatio * glob.xDiff / glob.yDiff * glob.size
    }

    glob.canvasFactorX = glob.xDiff / glob.canvasWidth
    glob.canvasFactorY = glob.yDiff / glob.canvasHeight
    glob.canvasScale = getCanvasScale()
    glob.canvasShiftX = -glob.xMin * glob.canvasWidth / glob.xDiff
    glob.canvasShiftY = glob.yMax * glob.canvasHeight / glob.yDiff

    // SVG Specific

    glob.xmlns = "http://www.w3.org/2000/svg"
}

export default glob
