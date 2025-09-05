import type { IDrawProps } from "../types/IDrawProps"
import * as Color from "../const/Color"
import { glob } from "../utils/glob"

export function initCanvasStyle(props = {} as unknown as IDrawProps) {
    if (!glob.canvasPaper) {
        throw new Error("You have to createCanvas() first")
    }

    glob.canvasPaper.fillStyle = Color.BlueGreyLighten3
    glob.canvasPaper.strokeStyle = Color.BlueGreyDarken4
    glob.canvasPaper.lineWidth = glob.pixelRatio

    if (props.fill) {
        glob.canvasPaper.fillStyle = props.fill
    }

    if (props.stroke) {
        glob.canvasPaper.strokeStyle = props.stroke
    }

    if (props.strokeWidth) {
        glob.canvasPaper.lineWidth = glob.pixelRatio * props.strokeWidth
    }
}
