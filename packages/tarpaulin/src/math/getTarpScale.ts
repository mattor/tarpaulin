import { globalState } from "../utils/globalState"

export const getTarpScale = (l = 1) => l * globalState.tarpWidth / globalState.xDiff
