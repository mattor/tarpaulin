import { glob } from "../utils/glob"

export function getMouseY(offsetY: number) {
    return glob.yMax - (offsetY / glob.size) * glob.yDiff
}
