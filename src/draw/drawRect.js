import { glob, initCanvasStyle, addSvgElement } from "../utils"
import { getPaperX, getPaperY, getPaperScale } from "../helpers"

export default ([x, y], width, height, props = {}) => {
    if (glob.tarp.tagName === "svg") {
        addSvgElement("rect", {
            x: getPaperX(x),
            y: getPaperY(y),
            width: getPaperScale(width),
            height: getPaperScale(height),
            fill: props.fill,
            stroke: props.stroke,
        })
        return
    }

    initCanvasStyle(props)

    if (props.fill) {
        glob.paper.fillRect(getPaperX(x), getPaperY(y), getPaperScale(width), getPaperScale(height))
    }

    if (!props.fill || props.stroke) {
        glob.paper.strokeRect(getPaperX(x), getPaperY(y), getPaperScale(width), getPaperScale(height))
    }
}
