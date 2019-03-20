import { glob, initGlob, createAndAddSvg, clear, resetCanvasStyle } from "./"

export default ({
    size = 600,
    xMin = -1,
    xMax = 1,
    yMin = -1,
    yMax = 1,
    pixelRatio = 1,
} = {}) => {
    if (glob.context) {
        throw new Error("Only one canvas allowed per page")
    }

    initGlob({ size, xMin, xMax, yMin, yMax, pixelRatio })

    createAndAddSvg()

    clear()

    resetCanvasStyle()

    // Return generated
    return {
        context: glob.context,
        canvasWidth: glob.canvasWidth,
        canvasHeight: glob.canvasHeight,
    }
}
