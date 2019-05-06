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

    glob.canvasPaper.beginPath();
    pathList.forEach(([x, y]) => {
        glob.canvasPaper.lineTo(getPaperX(x), getPaperY(y));
    });
    if (closed) {
        const [x, y] = pathList[0];
        glob.canvasPaper.lineTo(getPaperX(x), getPaperY(y));
    }

    if (props.fill) {
        glob.canvasPaper.fill();
    }

    if (!props.fill || props.stroke) {
        glob.canvasPaper.stroke();
    }
};
