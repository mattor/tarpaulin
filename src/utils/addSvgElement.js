import { glob } from "../utils"

export default (tag, props = {}) => {
    const el = document.createElementNS("http://www.w3.org/2000/svg", tag)
    for (const prop in props) {
        el.setAttributeNS(null, prop, props[prop])
    }
    glob.paper.appendChild(el)
}
