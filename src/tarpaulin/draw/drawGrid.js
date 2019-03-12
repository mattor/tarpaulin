import { Color } from "../const"
import { glob } from "../utils"
import { drawLine } from "./"

export default props => {
    let x = Math.floor(glob.xMin)
    let y = Math.floor(glob.yMin)

    while (x <= glob.xMax) {
        drawLine([x, glob.yMin], [x, glob.yMax], props || {
            strokeStyle: x % 10 === 0 ? Color.BlueGreyLighten4 : Color.BlueGreyLighten5,
        })
        x++
    }
    while (y <= glob.xMax) {
        drawLine([glob.xMin, y], [glob.xMax, y], props || {
            strokeStyle: y % 10 === 0 ? Color.BlueGreyLighten4 : Color.BlueGreyLighten5,
        })
        y++
    }
}
