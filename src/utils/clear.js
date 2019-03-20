import { Color } from "../const"
import { glob } from "../utils"
import { drawRect } from "../draw"

export default (props = { fillStyle: Color.White }) => {
    drawRect([glob.xMin, glob.yMax], glob.xDiff, glob.yDiff, props)
}
