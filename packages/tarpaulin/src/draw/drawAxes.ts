import type { IDrawProps } from "../types/IDrawProps"
import * as Color from "../const/Color"
import { globalState } from "../utils/globalState"
import { drawLine } from "./drawLine"

export function drawAxes(props = { stroke: Color.BlueGreyLighten3 } as unknown as IDrawProps) {
    drawLine([globalState.xMin, 0], [globalState.xMax, 0], props)
    drawLine([0, globalState.yMin], [0, globalState.yMax], props)
}
