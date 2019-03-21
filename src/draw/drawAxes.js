import { Color } from "../const"
import { glob } from "../utils"
import { drawLine } from "./"

export default (props = { stroke: Color.BlueGreyLighten3 }) => {
    drawLine([glob.xMin, 0], [glob.xMax, 0], props)
    drawLine([0, glob.yMin], [0, glob.yMax], props)
}
