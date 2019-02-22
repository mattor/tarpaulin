import { glob } from "../utils"

export default ([x, y]) => [x * glob.canvasFactorX + glob.xMin, -(y * glob.canvasFactorY) - glob.yMin]
