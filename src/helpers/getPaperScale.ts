import { glob } from "../utils"

export const getPaperScale = (l = 1) => l * glob.paperWidth / glob.xDiff
