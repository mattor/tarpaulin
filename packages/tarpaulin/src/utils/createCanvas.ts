import { clear } from "./clear"
import { createAndAddCanvas } from "./createAndAddCanvas"
import { globalState } from "./globalState"
import { initCanvasStyle } from "./initCanvasStyle"
import { initGlobalState } from "./initGlobalState"

export interface CanvasOptions {
    size: number
    xMin: number
    xMax: number
    yMin: number
    yMax: number
    pixelRatio?: number
}

export function createCanvas({
    size = 600,
    xMin = -1,
    xMax = 1,
    yMin = -1,
    yMax = 1,
    pixelRatio,
}: CanvasOptions): {
    tarpElement: HTMLCanvasElement
    tarpHeight: number
    tarpWidth: number
} {
    if (globalState.canvasTarp || globalState.svgTarp) {
        throw new Error("Only one tarp allowed per page")
    }

    initGlobalState({ size, xMin, xMax, yMin, yMax, pixelRatio })

    const { tarpElement, tarpHeight, tarpWidth } = createAndAddCanvas()

    clear()

    initCanvasStyle()

    // Return generated
    return {
        tarpElement,
        tarpHeight,
        tarpWidth,
    }
}
