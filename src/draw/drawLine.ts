import IDrawProps from "../types/IDrawProps";
import { getPaperX, getPaperY } from "../helpers";
import { addSvgElement, glob, initCanvasStyle } from "../utils";

export default ([x1, y1]: number[], [x2, y2]: number[], props = <IDrawProps>{}) => {
    if (glob.tarp.tagName === "svg") {
        addSvgElement("line", {
            x1: getPaperX(x1),
            y1: getPaperY(y1),
            x2: getPaperX(x2),
            y2: getPaperY(y2),
            stroke: props.stroke,
        });
        return;
    }

    initCanvasStyle(props);

    glob.paper.beginPath();
    glob.paper.moveTo(getPaperX(x1), getPaperY(y1));
    glob.paper.lineTo(getPaperX(x2), getPaperY(y2));
    glob.paper.stroke();
};
