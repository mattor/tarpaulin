import IDrawProps from "../types/IDrawProps";
import { glob, initCanvasStyle } from "../utils";

export default ([x, y]: number[], props = {} as IDrawProps) => {
    if (glob.svgPaper !== undefined) {
        throw new Error("drawPixel() is not supported on SVGs");
    }

    if (glob.canvasPaper === undefined) {
        return;
    }

    initCanvasStyle(props);

    glob.canvasPaper.fillRect(x, y, 1, 1);
};
