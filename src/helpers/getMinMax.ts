interface IMinMaxResult {
    xMin?: number;
    xMax?: number;
    yMin?: number;
    yMax?: number;
}

export default (pathList: number[][]) => pathList.reduce((p: IMinMaxResult, [x, y]) => {
    p.xMin = (p.xMin === undefined || x < p.xMin) ? x : p.xMin;
    p.xMax = (p.xMax === undefined || x > p.xMax) ? x : p.xMax;
    p.yMin = (p.yMin === undefined || y < p.yMin) ? y : p.yMin;
    p.yMax = (p.yMax === undefined || y > p.yMax) ? y : p.yMax;
    return p;
}, {});
