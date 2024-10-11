import { Color } from "../const"
import IDrawProps from "../types/IDrawProps"
import { glob } from "../utils"

import { drawLine } from "./"

export const drawAxes = (props = { stroke: Color.BlueGreyLighten3 } as unknown as IDrawProps) => {
    drawLine([glob.xMin, 0], [glob.xMax, 0], props)
    drawLine([0, glob.yMin], [0, glob.yMax], props)
}
