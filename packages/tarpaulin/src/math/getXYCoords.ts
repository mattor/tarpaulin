import { glob } from "../utils/glob"

export function getXYCoords([x, y]: number[]) {
    return [
        x * glob.tarpFactorX + glob.xMin,
        -y * glob.tarpFactorY - glob.yMin,
    ]
}
