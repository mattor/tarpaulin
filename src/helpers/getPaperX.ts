import { glob } from "../utils"

export default (x: number) => x * glob.paperScale + glob.paperShiftX
