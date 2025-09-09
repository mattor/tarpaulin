import { glob } from "../utils/glob"

export const getTarpScale = (l = 1) => l * glob.tarpWidth / glob.xDiff
