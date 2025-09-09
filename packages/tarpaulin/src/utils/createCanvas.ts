import { clear } from "./clear"
import { createAndAddCanvas } from "./createAndAddCanvas"
import { glob } from "./glob"
import { initCanvasStyle } from "./initCanvasStyle"
import { initGlob } from "./initGlob"

export interface ICreateCanvasOptions {
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
}: ICreateCanvasOptions) {
    if (glob.canvasTarp || glob.svgTarp) {
        throw new Error("Only one tarp allowed per page")
    }

    initGlob({ size, xMin, xMax, yMin, yMax, pixelRatio })

    createAndAddCanvas()

    clear()

    initCanvasStyle()

    // Return generated
    return {
        tarp: glob.canvasTarp,
        tarpHeight: glob.tarpHeight,
        tarpWidth: glob.tarpWidth,
    }
}
