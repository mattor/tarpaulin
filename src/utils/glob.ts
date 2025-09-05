import { getPaperScale } from "../helpers"

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

interface IConfig {
    pixelRatio?: number
    size: number
    xMax: number
    xMin: number
    yMax: number
    yMin: number
}

const glob: IGlob = {
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

export function init(config: IConfig) {
    glob.size = config.size
    glob.xMin = config.xMin
    glob.xMax = config.xMax
    glob.yMin = config.yMin
    glob.yMax = config.yMax

    glob.pixelRatio = config.pixelRatio || window.devicePixelRatio || 1

    glob.xDiff = glob.xMax - glob.xMin
    glob.yDiff = glob.yMax - glob.yMin

    glob.paperWidth = glob.pixelRatio * glob.size
    glob.paperHeight = glob.pixelRatio * glob.size
    if (glob.xDiff > glob.yDiff) {
        glob.paperHeight = glob.pixelRatio * glob.yDiff / glob.xDiff * glob.size
    }
    else {
        glob.paperWidth = glob.pixelRatio * glob.xDiff / glob.yDiff * glob.size
    }

    glob.tarpFactorX = glob.xDiff / glob.paperWidth
    glob.tarpFactorY = glob.yDiff / glob.paperHeight
    glob.paperScale = getPaperScale()
    glob.paperShiftX = -glob.xMin * glob.paperWidth / glob.xDiff
    glob.paperShiftY = glob.yMax * glob.paperHeight / glob.yDiff
}

export default glob
