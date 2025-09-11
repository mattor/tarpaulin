export interface IMinMaxResult {
    xMax: number
    xMin: number
    yMax: number
    yMin: number
}

export function getMinMax(pathList: [number, number][]) {
    return pathList.reduce((p: IMinMaxResult, [x, y]) => {
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
