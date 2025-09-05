import { glob } from "./"

export function createAndAddSvg() {
    glob.tarp = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    glob.tarp.setAttributeNS(null, "viewBox", `0 0 ${glob.paperWidth} ${glob.paperHeight}`)
    glob.tarp.setAttributeNS(null, "width", `${glob.paperWidth}`)
    glob.tarp.setAttributeNS(null, "height", `${glob.paperHeight}`)
    glob.svgPaper = document.createElementNS("http://www.w3.org/2000/svg", "g")
    glob.tarp.appendChild(glob.svgPaper)
    document.body.appendChild(glob.tarp)
}
