import { glob } from "../utils"

export const getPaperY = (y: number) => -y * glob.paperScale + glob.paperShiftY
