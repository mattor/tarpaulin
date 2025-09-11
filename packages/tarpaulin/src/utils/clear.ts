import * as Color from "../const/Color"
import { drawRect } from "../draw/drawRect"
import { globalState } from "../utils/globalState"

export function clear(props = { fill: Color.White }) {
    drawRect([globalState.xMin, globalState.yMax], globalState.xDiff, globalState.yDiff, props)
}
