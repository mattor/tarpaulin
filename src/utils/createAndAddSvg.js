import { glob } from "./"

export default () => {
    glob.tarp = document.createElementNS(glob.xmlns, "svg")
    glob.tarp.setAttributeNS(null, "viewBox", "0 0 " + glob.paperWidth + " " + glob.paperHeight)
    glob.tarp.setAttributeNS(null, "width", glob.paperWidth)
    glob.tarp.setAttributeNS(null, "height", glob.paperHeight)

    glob.paper = document.createElementNS(glob.xmlns, "g")
    glob.tarp.appendChild(glob.paper)

    document.body.appendChild(glob.tarp)
}
