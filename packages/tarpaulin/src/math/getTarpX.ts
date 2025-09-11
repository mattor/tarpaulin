import { globalState } from "../utils/globalState"

export const getTarpX = (x: number) => x * globalState.tarpScale + globalState.tarpShiftX
