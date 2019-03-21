import { glob } from "../utils"

export default (tag, props) => {
    const el = document.createElementNS(glob.xmlns, tag)
    for (const prop in props) {
        el.setAttributeNS(null, prop, props[prop])
    }
    glob.paper.appendChild(el)
}
