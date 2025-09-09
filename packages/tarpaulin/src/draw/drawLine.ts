import type { IDrawProps } from "../types/IDrawProps"
import { getTarpX } from "../helpers/getTarpX"
import { getTarpY } from "../helpers/getTarpY"
import { addSvgElement } from "../utils/addSvgElement"
import { glob } from "../utils/glob"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawLine([x1, y1]: number[], [x2, y2]: number[], props = {} as unknown as IDrawProps) {
    if (glob.svgTarp !== undefined) {
        addSvgElement("line", {
            stroke: props.stroke,
            x1: getTarpX(x1),
            x2: getTarpX(x2),
            y1: getTarpY(y1),
            y2: getTarpY(y2),
        })

        return
    }

    if (glob.canvasTarp === undefined) {
        return
    }

    initCanvasStyle(props)

    glob.canvasTarp.beginPath()
    glob.canvasTarp.moveTo(getTarpX(x1), getTarpY(y1))
    glob.canvasTarp.lineTo(getTarpX(x2), getTarpY(y2))
    glob.canvasTarp.stroke()
}
