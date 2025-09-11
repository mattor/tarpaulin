import type { DrawProps } from "../types/DrawProps"
import type { Point2D } from "../types/Point2D"
import * as Color from "../const/Color"
import { drawPath } from "./drawPath"

/*
%   n    -- number of vertices
%   r    -- radius
%   xc   -- x-coordinate of the center (real scalar)
%   yc   -- y-coordinate of the center (real scalar)
*/

export function drawNGon([x, y]: Point2D, n: number, r: number, props = {
    closed: false,
    stroke: Color.BlueGreyDarken4,
} as unknown as DrawProps) {
    const pathList: Point2D[] = []

    for (let i = 0; i < n; i++) {
        const angle = (2 * Math.PI * i / n) + (Math.PI / 2)
        const x1 = x + r * Math.cos(angle)
        const y1 = y + r * Math.sin(angle)
        pathList.push([x1, y1])
    }

    drawPath(pathList, props)
}
