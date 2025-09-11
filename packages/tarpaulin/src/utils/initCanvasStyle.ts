import type { DrawProps } from "../types/DrawProps"
import * as Color from "../const/Color"
import { globalState } from "../utils/globalState"

export function initCanvasStyle(props = {} as unknown as DrawProps) {
    if (!globalState.canvasTarp) {
        throw new Error("You have to createCanvas() first")
    }

    globalState.canvasTarp.fillStyle = Color.BlueGreyLighten3
    globalState.canvasTarp.strokeStyle = Color.BlueGreyDarken4
    globalState.canvasTarp.lineWidth = globalState.pixelRatio
    globalState.canvasTarp.font = `${globalState.pixelRatio * 12}px Arial`

    if (props.fill) {
        globalState.canvasTarp.fillStyle = props.fill
    }

    if (props.stroke) {
        globalState.canvasTarp.strokeStyle = props.stroke
    }

    if (props.strokeWidth) {
        globalState.canvasTarp.lineWidth = globalState.pixelRatio * props.strokeWidth
    }
}
