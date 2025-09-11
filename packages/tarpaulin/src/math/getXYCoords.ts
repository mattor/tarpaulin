import { globalState } from "../utils/globalState"

export function getXYCoords([x, y]: [number, number]): [number, number] {
    return [
        x * globalState.tarpFactorX + globalState.xMin,
        -y * globalState.tarpFactorY - globalState.yMin,
    ]
}
