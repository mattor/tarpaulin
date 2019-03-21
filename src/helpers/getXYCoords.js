import { glob } from "../utils"

export default ([x, y]) => ([
    x * glob.tarpFactorX + glob.xMin,
    -y * glob.tarpFactorY - glob.yMin,
])
