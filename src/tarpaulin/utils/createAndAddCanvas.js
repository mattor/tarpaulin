import { glob } from "./"

export default () => {
    const [width, height] = [
        Math.ceil(glob.canvasWidth / glob.pixelRatio),
        Math.ceil(glob.canvasHeight / glob.pixelRatio),
    ]
    glob.canvas = document.createElement("canvas")
    glob.canvas.width = width * glob.pixelRatio
    glob.canvas.height = height * glob.pixelRatio
    glob.canvas.style = `width: ${width}px; height: ${height}px;`
    document.body.appendChild(glob.canvas)
    glob.context = glob.canvas.getContext("2d")
}
