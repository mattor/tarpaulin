import { glob } from "../utils";

export default ([x, y]: number[]) => ([
    x * glob.tarpFactorX + glob.xMin,
    -y * glob.tarpFactorY - glob.yMin,
]);
