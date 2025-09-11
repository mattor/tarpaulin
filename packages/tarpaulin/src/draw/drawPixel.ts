import type { IDrawProps } from "../types/IDrawProps"
import { globalState } from "../utils/globalState"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawPixel([x, y]: [number, number], props = {} as unknown as IDrawProps) {
    if (globalState.svgTarp !== undefined) {
        throw new Error("drawPixel() is not supported on SVGs")
    }

    if (globalState.canvasTarp === undefined) {
        return
    }

    initCanvasStyle(props)

    globalState.canvasTarp.fillRect(x, y, 1, 1)
}
