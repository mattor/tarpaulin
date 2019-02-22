import { glob } from "../utils"

export default () => {
    glob.context.lineWidth = glob.pixelRatio
    glob.context.strokeStyle = "#000"
    glob.context.fillStyle = "#aaa"
}
