import { glob } from "../utils"

export default x => (x * glob.canvasScale) + glob.canvasShiftX
