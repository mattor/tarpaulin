import { globalState } from "./globalState"

export function destroy() {
    // Stop all animations
    globalState.animations.forEach((animation) => {
        animation.stop()
    })
    globalState.animations = []

    // Reset global state
    if (globalState.tarp) {
        globalState.tarp.remove()
    }

    globalState.tarp = undefined
    globalState.svgTarp = undefined
    globalState.canvasTarp = undefined
    globalState.tarpHeight = 0
    globalState.tarpWidth = 0
    globalState.tarpScale = 0
    globalState.tarpShiftX = 0
    globalState.tarpShiftY = 0
    globalState.tarpFactorX = 0
    globalState.tarpFactorY = 0
    globalState.xDiff = 0
    globalState.xMax = 0
    globalState.xMin = 0
    globalState.yDiff = 0
    globalState.yMax = 0
    globalState.yMin = 0
}
