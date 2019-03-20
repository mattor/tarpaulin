import { glob } from "./"

export default () => {
    glob.canvas = document.createElementNS(glob.xmlns, "svg")
    glob.canvas.setAttributeNS(null, "viewBox", "0 0 " + glob.canvasWidth + " " + glob.canvasHeight)
    glob.canvas.setAttributeNS(null, "width", glob.canvasWidth)
    glob.canvas.setAttributeNS(null, "height", glob.canvasHeight)

    glob.context = document.createElementNS(glob.xmlns, "g")
    glob.canvas.appendChild(glob.context)

    document.body.appendChild(glob.canvas)
}
