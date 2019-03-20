import { glob, initGlob, createAndAddCanvas, clearCanvas, resetDrawingStyle } from "./"

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

    glob.size = size
    glob.xMin = xMin
    glob.xMax = xMax
    glob.yMin = yMin
    glob.yMax = yMax
    glob.pixelRatio = pixelRatio

    initGlob()

    createAndAddCanvas()

    clearCanvas()

    resetDrawingStyle()

    // Return generated
    return {
        context: glob.context,
        canvasWidth: glob.canvasWidth,
        canvasHeight: glob.canvasHeight,
    }
}
