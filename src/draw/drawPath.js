import { Color } from "../const"
import { glob, initCanvasContext, addSvgElement } from "../utils"
import { getPaperX, getPaperY } from "../helpers"

export default (pathList, props = { strokeStyle: Color.BlueGreyDarken4 }) => {
    if (glob.tarp.tagName === "svg") {
        addSvgElement("path", {
            fill: props.fillStyle,
            stroke: props.strokeStyle,
            d: `M${pathList.map(([x, y]) => `${getPaperX(x)} ${getPaperY(y)}`).join(" L")} Z`,
        })
        return
    }

    initCanvasContext(props)

    glob.paper.beginPath()
    pathList.forEach(([x, y]) => {
        glob.paper.lineTo(getPaperX(x), getPaperY(y))
    })

    if (props.fillStyle) {
        glob.paper.fill()
    }

    if (!props.fillStyle || props.strokeStyle) {
        glob.paper.stroke()
    }
}
