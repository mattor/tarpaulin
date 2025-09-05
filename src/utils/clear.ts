import { Color } from "../const"
import { drawRect } from "../draw"
import { glob } from "../utils"

export function clear(props = { fill: Color.White }) {
    drawRect([glob.xMin, glob.yMax], glob.xDiff, glob.yDiff, props)
}
