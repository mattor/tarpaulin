import { glob, initCanvasContext, addSvgElement } from "../utils"
import { getPaperX, getPaperY } from "../helpers"

export default ([x1, y1], [x2, y2], props = {}) => {
    if (glob.tarp.tagName === "svg") {
        addSvgElement("line", {
            x1: getPaperX(x1),
            y1: getPaperY(y1),
            x2: getPaperX(x2),
            y2: getPaperY(y2),
            stroke: props.strokeStyle,
        })
        return
    }

    initCanvasContext(props)

    glob.paper.beginPath()
    glob.paper.moveTo(getPaperX(x1), getPaperY(y1))
    glob.paper.lineTo(getPaperX(x2), getPaperY(y2))
    glob.paper.stroke()
}
