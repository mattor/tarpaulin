import { glob } from "../utils/glob"

export const getPaperY = (y: number) => -y * glob.paperScale + glob.paperShiftY
