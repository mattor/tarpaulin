import { getPaperScale } from "../helpers"

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

    glob.paperWidth = glob.pixelRatio * glob.size
    glob.paperHeight = glob.pixelRatio * glob.size
    if (glob.xDiff > glob.yDiff) {
        glob.paperHeight = glob.pixelRatio * glob.yDiff / glob.xDiff * glob.size
    } else {
        glob.paperWidth = glob.pixelRatio * glob.xDiff / glob.yDiff * glob.size
    }

    glob.tarpFactorX = glob.xDiff / glob.paperWidth
    glob.tarpFactorY = glob.yDiff / glob.paperHeight
    glob.paperScale = getPaperScale()
    glob.paperShiftX = -glob.xMin * glob.paperWidth / glob.xDiff
    glob.paperShiftY = glob.yMax * glob.paperHeight / glob.yDiff

    // SVG Specific

    glob.xmlns = "http://www.w3.org/2000/svg"
}

export default glob
