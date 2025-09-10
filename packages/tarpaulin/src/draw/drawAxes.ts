import type { IDrawProps } from "../types/IDrawProps"
import * as Color from "../const/Color"
import { glob } from "../utils/glob"
import { drawLine } from "./drawLine"

export function drawAxes(props = { stroke: Color.BlueGreyLighten3 } as unknown as IDrawProps) {
    drawLine([glob.xMin, 0], [glob.xMax, 0], props)
    drawLine([0, glob.yMin], [0, glob.yMax], props)
}
