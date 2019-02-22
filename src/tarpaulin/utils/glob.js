import { getCanvasScale } from "../helpers"

const glob = {}

export const init = () => {
    glob.pixelRatio = glob.pixelRatio || window.devicePixelRatio || 1

    glob.xDiff = glob.xMax - glob.xMin
    glob.yDiff = glob.yMax - glob.yMin

    glob.canvasWidth = glob.pixelRatio * glob.size
    glob.canvasHeight = glob.pixelRatio * glob.size
    if (glob.xDiff > glob.yDiff) {
        glob.canvasHeight = glob.pixelRatio * Math.floor(glob.yDiff / glob.xDiff * glob.size)
    } else {
        glob.canvasWidth = glob.pixelRatio * Math.floor(glob.xDiff / glob.yDiff * glob.size)
    }

    glob.canvasFactorX = glob.xDiff / glob.canvasWidth
    glob.canvasFactorY = glob.yDiff / glob.canvasHeight
    glob.canvasScale = getCanvasScale()
    glob.canvasShiftX = -glob.xMin * glob.canvasWidth / glob.xDiff
    glob.canvasShiftY = glob.yMax * glob.canvasHeight / glob.yDiff
}

export default glob
