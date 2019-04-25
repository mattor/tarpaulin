import IDrawProps from "../types/IDrawProps";
import { Color } from "../const";
import { getPaperX, getPaperY } from "../helpers";
import { addSvgElement, glob, initCanvasStyle } from "../utils";

export default (pathList: number[][], props = <IDrawProps>{ stroke: Color.BlueGreyDarken4, closed: false }) => {
    const closed = props.fill || props.closed;

    if (glob.tarp.tagName === "svg") {
        addSvgElement("path", {
            "fill": props.fill,
            "stroke": props.stroke,
            "stroke-width": props.strokeWidth,
            "d": `M${pathList.map(([x, y]) => `${getPaperX(x)} ${getPaperY(y)}`).join(" L")}${closed ? " Z" : ""}`,
        });
        return;
    }

    initCanvasStyle(props);

    glob.paper.beginPath();
    pathList.forEach(([x, y]) => {
        glob.paper.lineTo(getPaperX(x), getPaperY(y));
    });
    if (closed) {
        const [x, y] = pathList[0];
        glob.paper.lineTo(getPaperX(x), getPaperY(y));
    }

    if (props.fill) {
        glob.paper.fill();
    }

    if (!props.fill || props.stroke) {
        glob.paper.stroke();
    }
};
