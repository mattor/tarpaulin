import type { IDrawProps } from "../types/IDrawProps"
import * as Color from "../const/Color"
import { glob } from "../utils/glob"
import { drawLine } from "./drawLine"

export function drawGrid(props?: IDrawProps) {
    let x = Math.floor(glob.xMin)
    let y = Math.floor(glob.yMin)

    while (x <= glob.xMax) {
        drawLine([x, glob.yMin], [x, glob.yMax], props ?? {
            stroke: x % 10 === 0 ? Color.BlueGreyLighten4 : Color.BlueGreyLighten5,
        })
        x += 1
    }
    while (y <= glob.xMax) {
        drawLine([glob.xMin, y], [glob.xMax, y], props ?? {
            stroke: y % 10 === 0 ? Color.BlueGreyLighten4 : Color.BlueGreyLighten5,
        })
        y += 1
    }
}
