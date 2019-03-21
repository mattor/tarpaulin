import { glob, initGlob, createAndAddSvg, clear } from "./"

export default ({
    size = 600,
    xMin = -1,
    xMax = 1,
    yMin = -1,
    yMax = 1,
    pixelRatio = 1,
} = {}) => {
    if (glob.paper) {
        throw new Error("Only one tarp allowed per page")
    }

    initGlob({ size, xMin, xMax, yMin, yMax, pixelRatio })

    createAndAddSvg()

    clear()

    // Return generated
    return {
        paper: glob.paper,
        paperWidth: glob.paperWidth,
        paperHeight: glob.paperHeight,
    }
}
