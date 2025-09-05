export interface ICanvasPaper {
    [index: string]: number
}

interface IGlob {
    canvasPaper?: CanvasRenderingContext2D
    paperHeight: number
    paperScale: number
    paperShiftX: number
    paperShiftY: number
    paperWidth: number
    pixelRatio: number
    size: number
    svgPaper?: SVGElement
    tarp?: any
    tarpFactorX: number
    tarpFactorY: number
    xDiff: number
    xMax: number
    xMin: number
    yDiff: number
    yMax: number
    yMin: number
}

export const glob: IGlob = {
    paperHeight: 0,
    paperScale: 0,
    paperShiftX: 0,
    paperShiftY: 0,
    paperWidth: 0,
    pixelRatio: 0,
    size: 0,
    tarpFactorX: 0,
    tarpFactorY: 0,
    xDiff: 0,
    xMax: 0,
    xMin: 0,
    yDiff: 0,
    yMax: 0,
    yMin: 0,
}
