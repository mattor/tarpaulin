import { globalState } from "./globalState"

export function createAndAddSvg() {
    globalState.tarp = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    globalState.tarp.setAttributeNS(null, "viewBox", `0 0 ${globalState.tarpWidth} ${globalState.tarpHeight}`)
    globalState.tarp.setAttributeNS(null, "width", `${globalState.tarpWidth}`)
    globalState.tarp.setAttributeNS(null, "height", `${globalState.tarpHeight}`)
    globalState.svgTarp = document.createElementNS("http://www.w3.org/2000/svg", "g")
    globalState.tarp.appendChild(globalState.svgTarp)
    document.body.appendChild(globalState.tarp)
}
