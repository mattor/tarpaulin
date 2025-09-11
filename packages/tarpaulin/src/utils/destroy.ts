import { globalState } from "./globalState"

export function destroy() {
    // Stop all animations
    globalState.animations.forEach((animation) => {
        animation.stop()
    })
    globalState.animations = []

    // Remove all event listeners
    globalState.eventListeners.forEach((listener) => {
        globalState.tarp?.removeEventListener(listener.eventName, listener.callback)
    })
    globalState.eventListeners = []

    // Remove the tarp
    if (globalState.tarp) {
        globalState.tarp.remove()
    }

    // Reset global state
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
