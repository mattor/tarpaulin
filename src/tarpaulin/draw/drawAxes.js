import { glob } from "../utils"
import { drawLine } from "./"

export default (props = { strokeStyle: "#AAA" }) => {
    drawLine([glob.xMin, 0], [glob.xMax, 0], props)
    drawLine([0, glob.yMin], [0, glob.yMax], props)
}
