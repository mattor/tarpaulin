import { globalState } from "./globalState"

export function createAndAddCanvas() {
    const [width, height] = [
        Math.ceil(globalState.tarpWidth / globalState.pixelRatio),
        Math.ceil(globalState.tarpHeight / globalState.pixelRatio),
    ]
    globalState.tarp = document.createElement("canvas")
    globalState.tarp.width = width * globalState.pixelRatio
    globalState.tarp.height = height * globalState.pixelRatio
    globalState.tarp.style.width = `${width}px`
    globalState.tarp.style.height = `${height}px`
    document.body.appendChild(globalState.tarp)
    globalState.canvasTarp = globalState.tarp.getContext("2d") || undefined

    return {
        tarpElement: globalState.tarp,
        tarpHeight: globalState.tarpHeight,
        tarpWidth: globalState.tarpWidth,
    }
}
