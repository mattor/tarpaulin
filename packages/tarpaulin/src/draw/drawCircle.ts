import type { IDrawProps } from "../types/IDrawProps"
import * as Const from "../const/Const"
import { getPaperScale } from "../helpers/getPaperScale"
import { getPaperX } from "../helpers/getPaperX"
import { getPaperY } from "../helpers/getPaperY"
import { addSvgElement } from "../utils/addSvgElement"
import { glob } from "../utils/glob"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawCircle([x, y]: number[], radius: number, props = {} as unknown as IDrawProps) {
    if (glob.svgPaper !== undefined) {
        addSvgElement("circle", {
            cx: getPaperX(x),
            cy: getPaperY(y),
            fill: props.fill,
            r: getPaperScale(radius),
            stroke: props.stroke,
        })

        return
    }

    if (glob.canvasPaper === undefined) {
        return
    }

    initCanvasStyle(props)

    glob.canvasPaper.beginPath()
    glob.canvasPaper.arc(
        getPaperX(x),
        getPaperY(y),
        getPaperScale(radius),
        0,
        Const.RADIANS_360_DEGREES,
    )

    if (props.fill) {
        glob.canvasPaper.fill()
    }

    if (!props.fill || props.stroke) {
        glob.canvasPaper.stroke()
    }
}
