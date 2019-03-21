import { Color } from "../const"
import { glob } from "../utils"

export default (tag, props = {}) => {
    const el = document.createElementNS("http://www.w3.org/2000/svg", tag)
    for (const prop in props) {
        let value = props[prop]
        if (prop === "fill" && !value) value = "none"
        if (prop === "stroke" && !value) continue
        el.setAttributeNS(null, prop, value)
    }

    if (!props.fill) {
        el.setAttributeNS(null, "stroke", props.stroke || Color.Black)
    }

    glob.paper.appendChild(el)
}
