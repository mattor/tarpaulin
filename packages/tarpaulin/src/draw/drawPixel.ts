import type { DrawProps } from "../types/DrawProps"
import type { Point2D } from "../types/Point2D"
import { globalState } from "../utils/globalState"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawPixel([x, y]: Point2D, props = {} as unknown as DrawProps) {
    if (globalState.svgTarp !== undefined) {
        throw new Error("drawPixel() is not supported on SVGs")
    }

    if (globalState.canvasTarp === undefined) {
        return
    }

    initCanvasStyle(props)

    globalState.canvasTarp.fillRect(x, y, 1, 1)
}
