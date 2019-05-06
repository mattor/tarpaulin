import { Color } from "../const";
import IDrawProps from "../types/IDrawProps";
import { glob } from "../utils";
import { drawLine } from "./";

export default (props = { stroke: Color.BlueGreyLighten3 } as IDrawProps) => {
    drawLine([glob.xMin, 0], [glob.xMax, 0], props);
    drawLine([0, glob.yMin], [0, glob.yMax], props);
};
