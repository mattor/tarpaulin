import { glob, resetCanvasStyle } from "../utils"

export default props => {
    if (!glob.paper) {
        throw new Error("You have to createCanvas() first")
    }

    resetCanvasStyle()

    for (const prop in props) {
        glob.paper[prop] = props[prop]
    }
}
