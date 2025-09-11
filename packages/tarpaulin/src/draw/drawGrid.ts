import type { IDrawProps } from "../types/IDrawProps"
import * as Color from "../const/Color"
import { globalState } from "../utils/globalState"
import { drawLine } from "./drawLine"

export function drawGrid(props?: IDrawProps) {
    let x = Math.floor(globalState.xMin)
    let y = Math.floor(globalState.yMin)

    while (x <= globalState.xMax) {
        drawLine([x, globalState.yMin], [x, globalState.yMax], props ?? {
            stroke: x % 10 === 0 ? Color.BlueGreyLighten4 : Color.BlueGreyLighten5,
        })
        x += 1
    }
    while (y <= globalState.xMax) {
        drawLine([globalState.xMin, y], [globalState.xMax, y], props ?? {
            stroke: y % 10 === 0 ? Color.BlueGreyLighten4 : Color.BlueGreyLighten5,
        })
        y += 1
    }
}
