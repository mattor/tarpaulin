import type { Point2D } from "../types/Point2D"
import { globalState } from "../utils/globalState"

export function getXYCoords([x, y]: Point2D): Point2D {
    return [
        x * globalState.tarpFactorX + globalState.xMin,
        -y * globalState.tarpFactorY - globalState.yMin,
    ]
}
