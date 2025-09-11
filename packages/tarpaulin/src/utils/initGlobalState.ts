import { getTarpScale } from "../math/getTarpScale"
import { globalState } from "./globalState"

interface IConfig {
    pixelRatio?: number
    size: number
    xMax: number
    xMin: number
    yMax: number
    yMin: number
}

export function initGlobalState(config: IConfig) {
    globalState.size = config.size
    globalState.xMin = config.xMin
    globalState.xMax = config.xMax
    globalState.yMin = config.yMin
    globalState.yMax = config.yMax

    globalState.pixelRatio = config.pixelRatio || window.devicePixelRatio || 1

    globalState.xDiff = globalState.xMax - globalState.xMin
    globalState.yDiff = globalState.yMax - globalState.yMin

    globalState.tarpWidth = globalState.pixelRatio * globalState.size
    globalState.tarpHeight = globalState.pixelRatio * globalState.size
    if (globalState.xDiff > globalState.yDiff) {
        globalState.tarpHeight = globalState.pixelRatio * globalState.yDiff / globalState.xDiff * globalState.size
    }
    else {
        globalState.tarpWidth = globalState.pixelRatio * globalState.xDiff / globalState.yDiff * globalState.size
    }

    globalState.tarpFactorX = globalState.xDiff / globalState.tarpWidth
    globalState.tarpFactorY = globalState.yDiff / globalState.tarpHeight
    globalState.tarpScale = getTarpScale()
    globalState.tarpShiftX = -globalState.xMin * globalState.tarpWidth / globalState.xDiff
    globalState.tarpShiftY = globalState.yMax * globalState.tarpHeight / globalState.yDiff
}
