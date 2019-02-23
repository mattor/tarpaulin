import { glob } from "../utils"
import { drawLine } from "./"

export default (props = { strokeStyle: "#EEE" }) => {
    let x = Math.floor(glob.xMin)
    let y = Math.floor(glob.yMin)

    while (x <= glob.xMax) {
        drawLine([x, glob.yMin], [x, glob.yMax], props)
        x++
    }
    while (y <= glob.xMax) {
        drawLine([glob.xMin, y], [glob.xMax, y], props)
        y++
    }
}
