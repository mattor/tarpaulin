import { glob } from "../utils"

export default (tag, props) => {
    const path = document.createElementNS(glob.xmlns, tag)
    for (const prop in props) {
        path.setAttributeNS(null, prop, props[prop])
    }
    glob.context.appendChild(path)
}
