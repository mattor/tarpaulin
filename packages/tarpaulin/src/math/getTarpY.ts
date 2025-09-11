import { globalState } from "../utils/globalState"

export const getTarpY = (y: number) => -y * globalState.tarpScale + globalState.tarpShiftY
