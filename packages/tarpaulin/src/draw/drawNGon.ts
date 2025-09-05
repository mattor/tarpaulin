import type { IDrawProps } from "../types/IDrawProps"
import * as Color from "../const/Color"
import { drawPath } from "./drawPath"

/*
%   n    -- number of vertices
%   r    -- radius
%   xc   -- x-coordinate of the center (real scalar)
%   yc   -- y-coordinate of the center (real scalar)
*/

export function drawNGon([x, y]: number[], n: number, r: number, props = {
    closed: false,
    stroke: Color.BlueGreyDarken4,
} as unknown as IDrawProps) {
    const pathList: number[][] = []

    for (let i = 0; i < n; i++) {
        const angle = (2 * Math.PI * i / n) + (Math.PI / 2)
        const x1 = x + r * Math.cos(angle)
        const y1 = y + r * Math.sin(angle)
        pathList.push([x1, y1])
    }

    drawPath(pathList, props)
}
