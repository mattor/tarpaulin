import IDrawProps from "../types/IDrawProps";
import { Const } from "../const";
import { getPaperScale, getPaperX, getPaperY } from "../helpers";
import { addSvgElement, glob, initCanvasStyle } from "../utils";

export default ([x, y]: number[], radius: number, props = <IDrawProps>{}) => {
    if (glob.tarp.tagName === "svg") {
        addSvgElement("circle", {
            cx: getPaperX(x),
            cy: getPaperY(y),
            r: getPaperScale(radius),
            fill: props.fill,
            stroke: props.stroke,
        });
        return;
    }

    initCanvasStyle(props);

    glob.paper.beginPath();
    glob.paper.arc(
        getPaperX(x),
        getPaperY(y),
        getPaperScale(radius),
        0,
        Const.RADIANS_360_DEGREES,
    );

    if (props.fill) {
        glob.paper.fill();
    }

    if (!props.fill || props.stroke) {
        glob.paper.stroke();
    }
};
