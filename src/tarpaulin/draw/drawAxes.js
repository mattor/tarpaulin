import global from "../global"
import { drawLine } from "./"

export default props => {
    drawLine([global.xMin, 0], [global.xMax, 0], props)
    drawLine([0, global.yMin], [0, global.yMax], props)
}
