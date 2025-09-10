import { glob } from "../utils/glob"

export function getMouseX(offsetX: number) {
    return glob.xMin + (offsetX / glob.size) * glob.xDiff
}
