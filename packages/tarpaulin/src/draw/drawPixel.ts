import type { IDrawProps } from "../types/IDrawProps"
import { glob } from "../utils/glob"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawPixel([x, y]: number[], props = {} as unknown as IDrawProps) {
    if (glob.svgTarp !== undefined) {
        throw new Error("drawPixel() is not supported on SVGs")
    }

    if (glob.canvasTarp === undefined) {
        return
    }

    initCanvasStyle(props)

    glob.canvasTarp.fillRect(x, y, 1, 1)
}
