import type { DrawProps } from "../types/DrawProps"
import type { Point2D } from "../types/Point2D"
import { getTarpX } from "../math/getTarpX"
import { getTarpY } from "../math/getTarpY"
import { addSvgElement } from "../utils/addSvgElement"
import { globalState } from "../utils/globalState"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawLine([x1, y1]: Point2D, [x2, y2]: Point2D, props = {} as unknown as DrawProps) {
    if (globalState.svgTarp !== undefined) {
        addSvgElement("line", {
            stroke: props.stroke,
            x1: getTarpX(x1),
            x2: getTarpX(x2),
            y1: getTarpY(y1),
            y2: getTarpY(y2),
        })

        return
    }

    if (globalState.canvasTarp === undefined) {
        return
    }

    initCanvasStyle(props)

    globalState.canvasTarp.beginPath()
    globalState.canvasTarp.moveTo(getTarpX(x1), getTarpY(y1))
    globalState.canvasTarp.lineTo(getTarpX(x2), getTarpY(y2))
    globalState.canvasTarp.stroke()
}
