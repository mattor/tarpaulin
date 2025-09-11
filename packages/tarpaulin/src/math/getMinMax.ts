import type { Point2D } from "../types/Point2D"

export interface MinMaxResult {
    xMax: number
    xMin: number
    yMax: number
    yMin: number
}

export function getMinMax(pathList: Point2D[]) {
    return pathList.reduce((p: MinMaxResult, [x, y]) => {
        p.xMin = x < p.xMin ? x : p.xMin
        p.xMax = x > p.xMax ? x : p.xMax
        p.yMin = y < p.yMin ? y : p.yMin
        p.yMax = y > p.yMax ? y : p.yMax

        return p
    }, {
        xMax: -Infinity,
        xMin: Infinity,
        yMax: -Infinity,
        yMin: Infinity,
    })
}
