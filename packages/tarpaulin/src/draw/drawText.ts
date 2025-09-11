import type { DrawProps } from "../types/DrawProps"
import type { Point2D } from "../types/Point2D"
import { getTarpX } from "../math/getTarpX"
import { getTarpY } from "../math/getTarpY"
import { addSvgElement } from "../utils/addSvgElement"
import { globalState } from "../utils/globalState"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawText([x, y]: Point2D, text: string, props = {} as unknown as DrawProps) {
    if (globalState.svgTarp !== undefined) {
        addSvgElement("text", {
            "fill": props.fill,
            "children": text,
            "x": getTarpX(x),
            "y": getTarpY(y),
            "font-size": "12px",
            "font-family": "Arial",
        })

        return
    }

    if (globalState.canvasTarp === undefined) {
        return
    }

    initCanvasStyle(props)

    globalState.canvasTarp.fillText(text, getTarpX(x), getTarpY(y))
}
