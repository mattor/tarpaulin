import * as Color from "../const/Color"
import { drawRect } from "../draw/drawRect"
import { glob } from "../utils/glob"

export function clear(props = { fill: Color.White }) {
    drawRect([glob.xMin, glob.yMax], glob.xDiff, glob.yDiff, props)
}
