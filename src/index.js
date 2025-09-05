import {
    Color,
    Const,
} from "./const"
import {
    drawAxes,
    drawCircle,
    drawGrid,
    drawLine,
    drawNGon,
    drawPath,
    drawPixel,
    drawRect,
} from "./draw"
import {
    ComplexNumber,
    Point3D,
} from "./entities"
import {
    getMinMax,
    getNextPoint,
    getXYCoords,
} from "./helpers"
import {
    animate,
    animatePath,
    clear,
    createCanvas,
    createSvg,
} from "./utils"

const Tarpaulin = {
    // const
    Color,
    Const,
    // entities
    ComplexNumber,
    Point3D,
    // utils
    animate,
    animatePath,
    clear,
    createCanvas,
    createSvg,
    // draw
    drawAxes,
    drawCircle,
    drawGrid,
    drawLine,
    drawNGon,
    drawPath,
    drawPixel,
    drawRect,
    // helpers
    getMinMax,
    getNextPoint,
    getXYCoords,
}

export default Tarpaulin

export {
    // utils
    animate,
    animatePath,
    clear,
    // const
    Color,
    // entities
    ComplexNumber,
    Const,
    createCanvas,
    createSvg,
    // draw
    drawAxes,
    drawCircle,
    drawGrid,
    drawLine,
    drawNGon,
    drawPath,
    drawPixel,
    drawRect,
    // helpers
    getMinMax,
    getNextPoint,
    getXYCoords,
    Point3D,
}
