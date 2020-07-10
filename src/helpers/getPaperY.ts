import { glob } from "../utils"

export default (y: number) => -y * glob.paperScale + glob.paperShiftY
