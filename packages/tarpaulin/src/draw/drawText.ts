import type { IDrawProps } from "../types/IDrawProps"
import { getTarpScale } from "../math/getTarpScale"
import { getTarpX } from "../math/getTarpX"
import { getTarpY } from "../math/getTarpY"
import { addSvgElement } from "../utils/addSvgElement"
import { globalState } from "../utils/globalState"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawText([x, y]: number[], text: string, props = {} as unknown as IDrawProps) {
    if (globalState.svgTarp !== undefined) {
        addSvgElement("text", {
            fill: props.fill,
            children: text,
            x: getTarpX(x),
            y: getTarpY(y),
        })

        return
    }

    if (globalState.canvasTarp === undefined) {
        return
    }

    initCanvasStyle(props)

    globalState.canvasTarp.fillText(text, getTarpX(x), getTarpY(y))
}
