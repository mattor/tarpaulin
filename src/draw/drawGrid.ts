import { Color } from "../const";
import IDrawProps from "../types/IDrawProps";
import { glob } from "../utils";
import { drawLine } from "./";

export default (props = {} as IDrawProps) => {
    let x = Math.floor(glob.xMin);
    let y = Math.floor(glob.yMin);

    while (x <= glob.xMax) {
        drawLine([x, glob.yMin], [x, glob.yMax], props || {
            stroke: x % 10 === 0 ? Color.BlueGreyLighten4 : Color.BlueGreyLighten5,
        });
        x++;
    }
    while (y <= glob.xMax) {
        drawLine([glob.xMin, y], [glob.xMax, y], props || {
            stroke: y % 10 === 0 ? Color.BlueGreyLighten4 : Color.BlueGreyLighten5,
        });
        y++;
    }
};
