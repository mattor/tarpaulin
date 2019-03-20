import { glob, resetDrawingStyle } from "../utils"

export default props => {
    if (!glob.context) {
        throw new Error("You have to createCanvas() first")
    }

    resetDrawingStyle()

    for (const prop in props) {
        glob.context[prop] = props[prop]
    }
}
