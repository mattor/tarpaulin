import { Color } from "../const"
import { drawRect } from "../draw"
import { glob } from "../utils"

export default (props = { fill: Color.White }) => {
    drawRect([glob.xMin, glob.yMax], glob.xDiff, glob.yDiff, props)
}
