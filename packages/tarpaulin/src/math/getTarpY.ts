import { glob } from "../utils/glob"

export const getTarpY = (y: number) => -y * glob.tarpScale + glob.tarpShiftY
