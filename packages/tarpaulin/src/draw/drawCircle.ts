import type { IDrawProps } from "../types/IDrawProps"
import * as Const from "../const/Const"
import { getTarpScale } from "../math/getTarpScale"
import { getTarpX } from "../math/getTarpX"
import { getTarpY } from "../math/getTarpY"
import { addSvgElement } from "../utils/addSvgElement"
import { glob } from "../utils/glob"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawCircle([x, y]: number[], radius: number, props = {} as unknown as IDrawProps) {
    if (glob.svgTarp !== undefined) {
        addSvgElement("circle", {
            cx: getTarpX(x),
            cy: getTarpY(y),
            fill: props.fill,
            r: getTarpScale(radius),
            stroke: props.stroke,
        })

        return
    }

    if (glob.canvasTarp === undefined) {
        return
    }

    initCanvasStyle(props)

    glob.canvasTarp.beginPath()
    glob.canvasTarp.arc(
        getTarpX(x),
        getTarpY(y),
        getTarpScale(radius),
        0,
        Const.RADIANS_360_DEGREES,
    )

    if (props.fill) {
        glob.canvasTarp.fill()
    }

    if (!props.fill || props.stroke) {
        glob.canvasTarp.stroke()
    }
}
