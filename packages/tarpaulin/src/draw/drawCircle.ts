import type { DrawProps } from "../types/DrawProps"
import type { Point2D } from "../types/Point2D"
import * as Const from "../const/Const"
import { getTarpScale } from "../math/getTarpScale"
import { getTarpX } from "../math/getTarpX"
import { getTarpY } from "../math/getTarpY"
import { addSvgElement } from "../utils/addSvgElement"
import { globalState } from "../utils/globalState"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawCircle([x, y]: Point2D, radius: number, props = {} as unknown as DrawProps) {
    if (globalState.svgTarp !== undefined) {
        addSvgElement("circle", {
            cx: getTarpX(x),
            cy: getTarpY(y),
            fill: props.fill,
            r: getTarpScale(radius),
            stroke: props.stroke,
        })

        return
    }

    if (globalState.canvasTarp === undefined) {
        return
    }

    initCanvasStyle(props)

    globalState.canvasTarp.beginPath()
    globalState.canvasTarp.arc(
        getTarpX(x),
        getTarpY(y),
        getTarpScale(radius),
        0,
        Const.RADIANS_360_DEGREES,
    )

    if (props.fill) {
        globalState.canvasTarp.fill()
    }

    if (!props.fill || props.stroke) {
        globalState.canvasTarp.stroke()
    }
}
