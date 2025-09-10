import { glob } from "./glob"

export function destroy() {
    if (glob.tarp) {
        glob.tarp.remove()
    }
    glob.tarp = undefined
    glob.svgTarp = undefined
    glob.canvasTarp = undefined
    glob.tarpHeight = 0
    glob.tarpWidth = 0
    glob.tarpScale = 0
    glob.tarpShiftX = 0
    glob.tarpShiftY = 0
    glob.tarpFactorX = 0
    glob.tarpFactorY = 0
    glob.xDiff = 0
    glob.xMax = 0
    glob.xMin = 0
    glob.yDiff = 0
    glob.yMax = 0
    glob.yMin = 0
}
