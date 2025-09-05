import { clear, createAndAddCanvas, glob, initCanvasStyle, initGlob } from "./"

export interface ICreateCanvasOptions {
    size: number
    xMin: number
    xMax: number
    yMin: number
    yMax: number
    pixelRatio?: number
}

export default ({
    size = 600,
    xMin = -1,
    xMax = 1,
    yMin = -1,
    yMax = 1,
    pixelRatio,
}: ICreateCanvasOptions) => {
    if (glob.canvasPaper || glob.svgPaper) {
        throw new Error("Only one tarp allowed per page")
    }

    initGlob({ size, xMin, xMax, yMin, yMax, pixelRatio })

    createAndAddCanvas()

    clear()

    initCanvasStyle()

    // Return generated
    return {
        paper: glob.canvasPaper,
        paperHeight: glob.paperHeight,
        paperWidth: glob.paperWidth,
    }
}
