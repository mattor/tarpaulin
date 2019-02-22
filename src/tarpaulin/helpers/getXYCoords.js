import global from "../global"

export default ([x, y]) => [x * global.xFactor + global.xMin, -(y * global.yFactor) - global.yMin]
