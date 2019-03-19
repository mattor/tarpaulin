import { Color } from "../const"
import { glob } from "../utils"
import { drawRect } from "../draw"

export default (props = { fillStyle: Color.White }) => {
    drawRect([0, 0], glob.canvas.width, glob.canvas.height, props)
}
