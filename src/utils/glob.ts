import { getPaperScale } from "../helpers";

interface IGlob {
    size: number;
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    pixelRatio: number;
    xDiff: number;
    yDiff: number;
    paperWidth: number;
    paperHeight: number;
    tarpFactorX: number;
    tarpFactorY: number;
    tarp: HTMLCanvasElement | SVGElement;
    paper: CanvasRenderingContext2D;
    paperScale: number;
    paperShiftX: number;
    paperShiftY: number;
}

interface IConfig {
    size: number;
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    pixelRatio?: number;
}

const glob: IGlob = {
    size: 0,
    xMin: 0,
    xMax: 0,
    yMin: 0,
    yMax: 0,
    pixelRatio: 0,
    xDiff: 0,
    yDiff: 0,
    paperWidth: 0,
    paperHeight: 0,
    tarpFactorX: 0,
    tarpFactorY: 0,
    paperScale: 0,
    paperShiftX: 0,
    paperShiftY: 0,
};

export const init = (config: IConfig) => {
    glob.size = config.size;
    glob.xMin = config.xMin;
    glob.xMax = config.xMax;
    glob.yMin = config.yMin;
    glob.yMax = config.yMax;

    glob.pixelRatio = config.pixelRatio || window.devicePixelRatio || 1;

    glob.xDiff = glob.xMax - glob.xMin;
    glob.yDiff = glob.yMax - glob.yMin;

    glob.paperWidth = glob.pixelRatio * glob.size;
    glob.paperHeight = glob.pixelRatio * glob.size;
    if (glob.xDiff > glob.yDiff) {
        glob.paperHeight = glob.pixelRatio * glob.yDiff / glob.xDiff * glob.size;
    } else {
        glob.paperWidth = glob.pixelRatio * glob.xDiff / glob.yDiff * glob.size;
    }

    glob.tarpFactorX = glob.xDiff / glob.paperWidth;
    glob.tarpFactorY = glob.yDiff / glob.paperHeight;
    glob.paperScale = getPaperScale();
    glob.paperShiftX = -glob.xMin * glob.paperWidth / glob.xDiff;
    glob.paperShiftY = glob.yMax * glob.paperHeight / glob.yDiff;
};

export default glob;
