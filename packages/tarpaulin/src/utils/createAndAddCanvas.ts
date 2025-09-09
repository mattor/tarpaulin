import { glob } from "./glob"

export function createAndAddCanvas() {
    const [width, height] = [
        Math.ceil(glob.tarpWidth / glob.pixelRatio),
        Math.ceil(glob.tarpHeight / glob.pixelRatio),
    ]
    glob.tarp = document.createElement("canvas")
    glob.tarp.width = width * glob.pixelRatio
    glob.tarp.height = height * glob.pixelRatio
    glob.tarp.style.width = `${width}px`
    glob.tarp.style.height = `${height}px`
    document.body.appendChild(glob.tarp)
    glob.canvasTarp = glob.tarp.getContext("2d") || undefined

    return {
        tarpElement: glob.tarp,
        tarpHeight: glob.tarpHeight,
        tarpWidth: glob.tarpWidth,
    }
}
