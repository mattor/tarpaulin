import { Color } from "../const";
import IDrawProps from "../types/IDrawProps";
import { glob } from "../utils";

const svgToCanvas = {
    fill: "fillStyle",
    stroke: "strokeStyle",
    strokeWidth: "lineWidth",
};

export default (props = {} as IDrawProps) => {
    if (!glob.canvasPaper) {
        throw new Error("You have to createCanvas() first");
    }

    glob.canvasPaper.fillStyle = Color.BlueGreyLighten3;
    glob.canvasPaper.strokeStyle = Color.BlueGreyDarken4;
    glob.canvasPaper.lineWidth = glob.pixelRatio;

    for (const prop in props) {
        if (prop === "closed") { continue; }
        const propName = svgToCanvas[prop] || prop;
        const propValue = propName === svgToCanvas.strokeWidth ? props[prop] * glob.pixelRatio : props[prop];
        glob.canvasPaper[propName] = propValue;
    }
};
