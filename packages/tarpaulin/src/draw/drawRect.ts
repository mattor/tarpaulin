import type { IDrawProps } from "../types/IDrawProps"
import { getPaperScale } from "../helpers/getPaperScale"
import { getPaperX } from "../helpers/getPaperX"
import { getPaperY } from "../helpers/getPaperY"
import { addSvgElement } from "../utils/addSvgElement"
import { glob } from "../utils/glob"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawRect([x, y]: number[], width: number, height: number, props = {} as unknown as IDrawProps) {
    if (glob.svgPaper !== undefined) {
        addSvgElement("rect", {
            fill: props.fill,
            height: getPaperScale(height),
            stroke: props.stroke,
            width: getPaperScale(width),
            x: getPaperX(x),
            y: getPaperY(y),
        })

        return
    }

    if (glob.canvasPaper === undefined) {
        return
    }

    initCanvasStyle(props)

    if (props.fill) {
        glob.canvasPaper.fillRect(getPaperX(x), getPaperY(y), getPaperScale(width), getPaperScale(height))
    }

    if (!props.fill || props.stroke) {
        glob.canvasPaper.strokeRect(getPaperX(x), getPaperY(y), getPaperScale(width), getPaperScale(height))
    }
}
