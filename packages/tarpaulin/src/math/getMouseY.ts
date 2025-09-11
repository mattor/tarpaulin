import { globalState } from "../utils/globalState"

export function getMouseY(offsetY: number) {
    return globalState.yMax - (offsetY / globalState.size) * globalState.yDiff
}
