import { clear, createAndAddSvg, glob, initGlob } from "./"

export default ({
    size = 600,
    xMin = -1,
    xMax = 1,
    yMin = -1,
    yMax = 1,
    pixelRatio = 1,
} = {}) => {
    if (glob.canvasPaper || glob.svgPaper) {
        throw new Error("Only one tarp allowed per page")
    }

    initGlob({ size, xMin, xMax, yMin, yMax, pixelRatio })

    createAndAddSvg()

    clear()

    // Return generated
    return {
        paper: glob.svgPaper,
        paperHeight: glob.paperHeight,
        paperWidth: glob.paperWidth,
    }
}
