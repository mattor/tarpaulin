import type { IDrawProps } from "../types/IDrawProps"
import { getPaperX } from "../helpers/getPaperX"
import { getPaperY } from "../helpers/getPaperY"
import { addSvgElement } from "../utils/addSvgElement"
import { glob } from "../utils/glob"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawLine([x1, y1]: number[], [x2, y2]: number[], props = {} as unknown as IDrawProps) {
    if (glob.svgPaper !== undefined) {
        addSvgElement("line", {
            stroke: props.stroke,
            x1: getPaperX(x1),
            x2: getPaperX(x2),
            y1: getPaperY(y1),
            y2: getPaperY(y2),
        })

        return
    }

    if (glob.canvasPaper === undefined) {
        return
    }

    initCanvasStyle(props)

    glob.canvasPaper.beginPath()
    glob.canvasPaper.moveTo(getPaperX(x1), getPaperY(y1))
    glob.canvasPaper.lineTo(getPaperX(x2), getPaperY(y2))
    glob.canvasPaper.stroke()
}
