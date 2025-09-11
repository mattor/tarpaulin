import { globalState } from "../utils/globalState"

export function getMouseX(offsetX: number) {
    return globalState.xMin + (offsetX / globalState.size) * globalState.xDiff
}
