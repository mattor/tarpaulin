import { getTarpScale } from "../helpers/getTarpScale"
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

    glob.tarpWidth = glob.pixelRatio * glob.size
    glob.tarpHeight = glob.pixelRatio * glob.size
    if (glob.xDiff > glob.yDiff) {
        glob.tarpHeight = glob.pixelRatio * glob.yDiff / glob.xDiff * glob.size
    }
    else {
        glob.tarpWidth = glob.pixelRatio * glob.xDiff / glob.yDiff * glob.size
    }

    glob.tarpFactorX = glob.xDiff / glob.tarpWidth
    glob.tarpFactorY = glob.yDiff / glob.tarpHeight
    glob.tarpScale = getTarpScale()
    glob.tarpShiftX = -glob.xMin * glob.tarpWidth / glob.xDiff
    glob.tarpShiftY = glob.yMax * glob.tarpHeight / glob.yDiff
}
