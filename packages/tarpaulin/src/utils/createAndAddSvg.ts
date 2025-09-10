import { glob } from "./glob"

export function createAndAddSvg() {
    glob.tarp = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    glob.tarp.setAttributeNS(null, "viewBox", `0 0 ${glob.tarpWidth} ${glob.tarpHeight}`)
    glob.tarp.setAttributeNS(null, "width", `${glob.tarpWidth}`)
    glob.tarp.setAttributeNS(null, "height", `${glob.tarpHeight}`)
    glob.svgTarp = document.createElementNS("http://www.w3.org/2000/svg", "g")
    glob.tarp.appendChild(glob.svgTarp)
    document.body.appendChild(glob.tarp)
}
