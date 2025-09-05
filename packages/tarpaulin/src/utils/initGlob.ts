import { getPaperScale } from "../helpers/getPaperScale"
import { glob } from "./glob"

interface IConfig {
    pixelRatio?: number
    size: number
    xMax: number
    xMin: number
    yMax: number
    yMin: number
}

export function initGlob(config: IConfig) {
    glob.size = config.size
    glob.xMin = config.xMin
    glob.xMax = config.xMax
    glob.yMin = config.yMin
    glob.yMax = config.yMax

    glob.pixelRatio = config.pixelRatio || window.devicePixelRatio || 1

    glob.xDiff = glob.xMax - glob.xMin
    glob.yDiff = glob.yMax - glob.yMin

    glob.paperWidth = glob.pixelRatio * glob.size
    glob.paperHeight = glob.pixelRatio * glob.size
    if (glob.xDiff > glob.yDiff) {
        glob.paperHeight = glob.pixelRatio * glob.yDiff / glob.xDiff * glob.size
    }
    else {
        glob.paperWidth = glob.pixelRatio * glob.xDiff / glob.yDiff * glob.size
    }

    glob.tarpFactorX = glob.xDiff / glob.paperWidth
    glob.tarpFactorY = glob.yDiff / glob.paperHeight
    glob.paperScale = getPaperScale()
    glob.paperShiftX = -glob.xMin * glob.paperWidth / glob.xDiff
    glob.paperShiftY = glob.yMax * glob.paperHeight / glob.yDiff
}
