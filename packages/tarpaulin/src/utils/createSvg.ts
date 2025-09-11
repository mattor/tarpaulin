import { clear } from "./clear"
import { createAndAddSvg } from "./createAndAddSvg"
import { globalState } from "./globalState"
import { initGlobalState } from "./initGlobalState"

export function createSvg({
    size = 600,
    xMin = -1,
    xMax = 1,
    yMin = -1,
    yMax = 1,
    pixelRatio = 1,
} = {}) {
    if (globalState.canvasTarp || globalState.svgTarp) {
        throw new Error("Only one tarp allowed per page")
    }

    initGlobalState({ size, xMin, xMax, yMin, yMax, pixelRatio })

    createAndAddSvg()

    clear()

    // Return generated
    return {
        tarp: globalState.svgTarp,
        tarpHeight: globalState.tarpHeight,
        tarpWidth: globalState.tarpWidth,
    }
}
