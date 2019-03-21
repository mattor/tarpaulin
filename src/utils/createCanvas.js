import { glob, initGlob, createAndAddCanvas, clear, resetCanvasStyle } from "./"

export default ({
    size = 600,
    xMin = -1,
    xMax = 1,
    yMin = -1,
    yMax = 1,
    pixelRatio = null,
} = {}) => {
    if (glob.paper) {
        throw new Error("Only one tarp allowed per page")
    }

    initGlob({ size, xMin, xMax, yMin, yMax, pixelRatio })

    createAndAddCanvas()

    clear()

    resetCanvasStyle()

    // Return generated
    return {
        paper: glob.paper,
        paperWidth: glob.paperWidth,
        paperHeight: glob.paperHeight,
    }
}
