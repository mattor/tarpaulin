import { Color } from "../const"
import { glob } from "../utils"

export default () => {
    glob.paper.lineWidth = glob.pixelRatio
    glob.paper.strokeStyle = Color.BlueGreyDarken4
    glob.paper.fillStyle = Color.BlueGreyLighten3
}
