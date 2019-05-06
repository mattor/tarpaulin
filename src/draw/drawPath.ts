import { Color } from "../const";
import { getPaperX, getPaperY } from "../helpers";
import IDrawProps from "../types/IDrawProps";
import { addSvgElement, glob, initCanvasStyle } from "../utils";

export default (pathList: number[][], props = {
    closed: false,
    stroke: Color.BlueGreyDarken4,
} as any as IDrawProps) => {
    const closed = props.fill || props.closed;

    if (glob.svgPaper !== undefined) {
        addSvgElement("path", {
            "d": `M${pathList.map(([x, y]) => `${getPaperX(x)} ${getPaperY(y)}`).join(" L")}${closed ? " Z" : ""}`,
            "fill": props.fill,
            "stroke": props.stroke,
            "stroke-width": props.strokeWidth,
        });

        return;
    }

    if (glob.canvasPaper === undefined) {
        return;
    }

    initCanvasStyle(props);

    glob.canvasPaper.beginPath();
    pathList.forEach(([x, y]) => {
        if (glob.canvasPaper !== undefined) {
            glob.canvasPaper.lineTo(getPaperX(x), getPaperY(y));
        }
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
