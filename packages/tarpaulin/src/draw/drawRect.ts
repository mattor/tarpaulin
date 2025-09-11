import type { DrawProps } from "../types/DrawProps"
import type { Point2D } from "../types/Point2D"
import { getTarpScale } from "../math/getTarpScale"
import { getTarpX } from "../math/getTarpX"
import { getTarpY } from "../math/getTarpY"
import { addSvgElement } from "../utils/addSvgElement"
import { globalState } from "../utils/globalState"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawRect([x, y]: Point2D, width: number, height: number, props = {} as unknown as DrawProps) {
    if (globalState.svgTarp !== undefined) {
        addSvgElement("rect", {
            fill: props.fill,
            height: getTarpScale(height),
            stroke: props.stroke,
            width: getTarpScale(width),
            x: getTarpX(x),
            y: getTarpY(y),
        })

        return
    }

    if (globalState.canvasTarp === undefined) {
        return
    }

    initCanvasStyle(props)

    if (props.fill) {
        globalState.canvasTarp.fillRect(getTarpX(x), getTarpY(y), getTarpScale(width), getTarpScale(height))
    }

    if (!props.fill || props.stroke) {
        globalState.canvasTarp.strokeRect(getTarpX(x), getTarpY(y), getTarpScale(width), getTarpScale(height))
    }
}
