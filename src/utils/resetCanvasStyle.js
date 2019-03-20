import { Color } from "../const"
import { glob } from "../utils"

export default () => {
    glob.context.lineWidth = glob.pixelRatio
    glob.context.strokeStyle = Color.BlueGreyDarken4
    glob.context.fillStyle = Color.BlueGreyLighten3
}
