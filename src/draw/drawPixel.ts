import IDrawProps from "../types/IDrawProps";
import { glob, initCanvasStyle } from "../utils";

export default ([x, y]: number[], props = <IDrawProps>{}) => {
    if (glob.tarp.tagName === "svg") {
        throw new Error("drawPixel() is not supported on SVGs");
    }

    initCanvasStyle(props);

    glob.paper.fillRect(x, y, 1, 1);
};
