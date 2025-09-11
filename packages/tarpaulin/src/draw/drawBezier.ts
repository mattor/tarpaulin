import type { IDrawProps } from "../types/IDrawProps"
import { getTarpX } from "../math/getTarpX"
import { getTarpY } from "../math/getTarpY"
import { addSvgElement } from "../utils/addSvgElement"
import { globalState } from "../utils/globalState"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawBezier(ps: number[][], props = {} as unknown as IDrawProps) {
    if (ps.length !== 4) {
        console.error("drawBezier requires exactly 4 points")
        return
    }

    if (globalState.svgTarp !== undefined) {
        addSvgElement("path", {
            d: `M${ps.map(([x, y]) => `${getTarpX(x)} ${getTarpY(y)}`).join(" L")}`,
            fill: props.fill,
            stroke: props.stroke,
        })
    }

    if (globalState.canvasTarp === undefined) {
        return
    }

    initCanvasStyle(props)

    const [p1, p2, p3, p4] = ps
    globalState.canvasTarp.beginPath()
    globalState.canvasTarp.moveTo(getTarpX(p1[0]), getTarpY(p1[1]))
    globalState.canvasTarp.bezierCurveTo(
        getTarpX(p2[0]),
        getTarpY(p2[1]),
        getTarpX(p3[0]),
        getTarpY(p3[1]),
        getTarpX(p4[0]),
        getTarpY(p4[1]),
    )
    globalState.canvasTarp.stroke()
}
