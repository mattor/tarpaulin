import { Const } from "../const"
import { glob, initCanvasStyle, addSvgElement } from "../utils"
import { getPaperX, getPaperY, getPaperScale } from "../helpers"

export default ([x, y], radius, props = {}) => {
    if (glob.tarp.tagName === "svg") {
        addSvgElement("circle", {
            cx: getPaperX(x),
            cy: getPaperY(y),
            r: getPaperScale(radius),
            fill: props.fill,
            stroke: props.stroke,
        })
        return
    }

    initCanvasStyle(props)

    glob.paper.beginPath()
    glob.paper.arc(
        getPaperX(x),
        getPaperY(y),
        getPaperScale(radius),
        0,
        Const.RADIANS_360_DEGREES,
    )

    if (props.fill) {
        glob.paper.fill()
    }

    if (!props.fill || props.stroke) {
        glob.paper.stroke()
    }
}
