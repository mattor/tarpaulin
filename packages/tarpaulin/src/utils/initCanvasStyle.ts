import type { IDrawProps } from "../types/IDrawProps"
import * as Color from "../const/Color"
import { glob } from "../utils/glob"

export function initCanvasStyle(props = {} as unknown as IDrawProps) {
    if (!glob.canvasTarp) {
        throw new Error("You have to createCanvas() first")
    }

    glob.canvasTarp.fillStyle = Color.BlueGreyLighten3
    glob.canvasTarp.strokeStyle = Color.BlueGreyDarken4
    glob.canvasTarp.lineWidth = glob.pixelRatio
    glob.canvasTarp.font = `${glob.pixelRatio * 12}px Arial`

    if (props.fill) {
        glob.canvasTarp.fillStyle = props.fill
    }

    if (props.stroke) {
        glob.canvasTarp.strokeStyle = props.stroke
    }

    if (props.strokeWidth) {
        glob.canvasTarp.lineWidth = glob.pixelRatio * props.strokeWidth
    }
}
