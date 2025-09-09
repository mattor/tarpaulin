import { glob } from "../utils/glob"

export const getTarpX = (x: number) => x * glob.tarpScale + glob.tarpShiftX
