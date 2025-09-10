import { clear } from "./clear"
import { createAndAddSvg } from "./createAndAddSvg"
import { glob } from "./glob"
import { initGlob } from "./initGlob"

export function createSvg({
    size = 600,
    xMin = -1,
    xMax = 1,
    yMin = -1,
    yMax = 1,
    pixelRatio = 1,
} = {}) {
    if (glob.canvasTarp || glob.svgTarp) {
        throw new Error("Only one tarp allowed per page")
    }

    initGlob({ size, xMin, xMax, yMin, yMax, pixelRatio })

    createAndAddSvg()

    clear()

    // Return generated
    return {
        tarp: glob.svgTarp,
        tarpHeight: glob.tarpHeight,
        tarpWidth: glob.tarpWidth,
    }
}
