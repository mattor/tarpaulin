import { glob } from "../utils/glob"

export const getPaperX = (x: number) => x * glob.paperScale + glob.paperShiftX
