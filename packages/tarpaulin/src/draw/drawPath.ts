import type { IDrawProps } from "../types/IDrawProps"
import * as Color from "../const/Color"
import { getTarpX } from "../math/getTarpX"
import { getTarpY } from "../math/getTarpY"
import { addSvgElement } from "../utils/addSvgElement"
import { globalState } from "../utils/globalState"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawPath(pathList: [number, number][], props = {
    closed: false,
    stroke: Color.BlueGreyDarken4,
} as unknown as IDrawProps) {
    const closed = props.fill || props.closed

    if (globalState.svgTarp !== undefined) {
        addSvgElement("path", {
            "d": `M${pathList.map(([x, y]) => `${getTarpX(x)} ${getTarpY(y)}`).join(" L")}${closed ? " Z" : ""}`,
            "fill": props.fill,
            "stroke": props.stroke,
            "stroke-width": props.strokeWidth,
        })

        return
    }

    if (globalState.canvasTarp === undefined) {
        return
    }

    initCanvasStyle(props)

    globalState.canvasTarp.beginPath()
    pathList.forEach(([x, y]) => {
        if (globalState.canvasTarp !== undefined) {
            globalState.canvasTarp.lineTo(getTarpX(x), getTarpY(y))
        }
    })
    if (closed) {
        const [x, y] = pathList[0]
        globalState.canvasTarp.lineTo(getTarpX(x), getTarpY(y))
    }

    if (props.fill) {
        globalState.canvasTarp.fill()
    }

    if (!props.fill || props.stroke) {
        globalState.canvasTarp.stroke()
    }
}
