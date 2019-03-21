import { glob } from "../utils"

export default x => (x * glob.paperScale) + glob.paperShiftX
