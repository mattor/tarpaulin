import { glob, initGlob, createAndAddCanvas, clear, resetCanvasStyle } from "./"

export default ({
    size = 600,
    xMin = -1,
    xMax = 1,
    yMin = -1,
    yMax = 1,
    pixelRatio = null,
} = {}) => {
    if (glob.context) {
        throw new Error("Only one canvas allowed per page")
    }

    initGlob({ size, xMin, xMax, yMin, yMax, pixelRatio })

    createAndAddCanvas()

    clear()

    resetCanvasStyle()

    // Return generated
    return {
        context: glob.context,
        canvasWidth: glob.canvasWidth,
        canvasHeight: glob.canvasHeight,
    }
}
