import { Color } from "../const"
import { glob, initCanvasContext, addSvgElement } from "../utils"
import { getCanvasX, getCanvasY } from "../helpers"

export default (points, props = { strokeStyle: Color.BlueGreyDarken4 }) => {
    if (glob.canvas.tagName === "svg") {
        addSvgElement("path", {
            fill: props.fillStyle,
            stroke: props.strokeStyle,
            d: `M${points.map(([x, y]) => `${getCanvasX(x)} ${getCanvasY(y)}`).join(" L")} Z`,
        })
        return
    }

    initCanvasContext(props)

    glob.context.beginPath()
    points.forEach(([x, y]) => {
        glob.context.lineTo(getCanvasX(x), getCanvasY(y))
    })

    if (props.fillStyle) {
        glob.context.fill()
    }

    if (!props.fillStyle || props.strokeStyle) {
        glob.context.stroke()
    }
}
