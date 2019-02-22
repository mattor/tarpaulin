import { glob } from "./"

export default () => {
    glob.canvas = document.createElement("canvas")
    glob.canvas.width = glob.canvasWidth
    glob.canvas.height = glob.canvasHeight
    glob.canvas.style = `width: ${glob.canvasWidth / glob.pixelRatio}px; height: ${glob.canvasHeight / glob.pixelRatio}px;`
    document.body.appendChild(glob.canvas)
    glob.context = glob.canvas.getContext("2d")
}
