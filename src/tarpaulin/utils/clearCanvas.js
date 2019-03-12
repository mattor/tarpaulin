import { Color } from "../const"
import { glob } from "../utils"
import { drawRect } from "../draw"

export default () => {
    drawRect([0, 0], glob.canvas.width, glob.canvas.height, { fillStyle: Color.White })
}
