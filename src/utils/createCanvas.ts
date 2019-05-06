import { clear, createAndAddCanvas, glob, initCanvasStyle, initGlob } from "./";

export default ({
    size = 600,
    xMin = -1,
    xMax = 1,
    yMin = -1,
    yMax = 1,
    pixelRatio = undefined,
} = {}) => {
    if (glob.canvasPaper || glob.svgPaper) {
        throw new Error("Only one tarp allowed per page");
    }

    initGlob({ size, xMin, xMax, yMin, yMax, pixelRatio });

    createAndAddCanvas();

    clear();

    initCanvasStyle();

    // Return generated
    return {
        paper: glob.canvasPaper,
        paperWidth: glob.paperWidth,
        paperHeight: glob.paperHeight,
    };
};
