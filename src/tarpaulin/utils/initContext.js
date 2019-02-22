import global from "../global"

export default props => {
    if (!global.context) {
        throw new Error("You have to create() the canvas first")
    }
    for (const prop in props) {
        global.context[prop] = props[prop]
    }
}
