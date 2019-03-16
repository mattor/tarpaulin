import { glob } from "../utils"

export default y => (-y * glob.canvasScale) + glob.canvasShiftY
