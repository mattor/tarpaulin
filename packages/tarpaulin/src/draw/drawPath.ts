import type { IDrawProps } from "../types/IDrawProps"
import * as Color from "../const/Color"
import { getTarpX } from "../helpers/getTarpX"
import { getTarpY } from "../helpers/getTarpY"
import { addSvgElement } from "../utils/addSvgElement"
import { glob } from "../utils/glob"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawPath(pathList: number[][], props = {
    closed: false,
    stroke: Color.BlueGreyDarken4,
} as unknown as IDrawProps) {
    const closed = props.fill || props.closed

    if (glob.svgTarp !== undefined) {
        addSvgElement("path", {
            "d": `M${pathList.map(([x, y]) => `${getTarpX(x)} ${getTarpY(y)}`).join(" L")}${closed ? " Z" : ""}`,
            "fill": props.fill,
            "stroke": props.stroke,
            "stroke-width": props.strokeWidth,
        })

        return
    }

    if (glob.canvasTarp === undefined) {
        return
    }

    initCanvasStyle(props)

    glob.canvasTarp.beginPath()
    pathList.forEach(([x, y]) => {
        if (glob.canvasTarp !== undefined) {
            glob.canvasTarp.lineTo(getTarpX(x), getTarpY(y))
        }
    })
    if (closed) {
        const [x, y] = pathList[0]
        glob.canvasTarp.lineTo(getTarpX(x), getTarpY(y))
    }

    if (props.fill) {
        glob.canvasTarp.fill()
    }

    if (!props.fill || props.stroke) {
        glob.canvasTarp.stroke()
    }
}
