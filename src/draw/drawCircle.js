import { Const } from "../const"
import { glob, initCanvasContext, addSvgElement } from "../utils"
import { getPaperX, getPaperY, getPaperScale } from "../helpers"

export default ([x, y], radius, props = {}) => {
    if (glob.tarp.tagName === "svg") {
        addSvgElement("circle", {
            cx: getPaperX(x),
            cy: getPaperY(y),
            r: getPaperScale(radius),
            fill: props.fillStyle,
            stroke: props.strokeStyle,
        })
        return
    }

    initCanvasContext(props)

    glob.paper.beginPath()
    glob.paper.arc(
        getPaperX(x),
        getPaperY(y),
        getPaperScale(radius),
        0,
        Const.RADIANS_360_DEGREES,
    )

    if (props.fillStyle) {
        glob.paper.fill()
    }

    if (!props.fillStyle || props.strokeStyle) {
        glob.paper.stroke()
    }
}
