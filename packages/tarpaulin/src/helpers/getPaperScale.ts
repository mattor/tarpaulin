import { glob } from "../utils/glob"

export const getPaperScale = (l = 1) => l * glob.paperWidth / glob.xDiff
