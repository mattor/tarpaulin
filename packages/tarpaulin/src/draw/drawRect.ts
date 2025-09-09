import type { IDrawProps } from "../types/IDrawProps"
import { getTarpScale } from "../helpers/getTarpScale"
import { getTarpX } from "../helpers/getTarpX"
import { getTarpY } from "../helpers/getTarpY"
import { addSvgElement } from "../utils/addSvgElement"
import { glob } from "../utils/glob"
import { initCanvasStyle } from "../utils/initCanvasStyle"

export function drawRect([x, y]: number[], width: number, height: number, props = {} as unknown as IDrawProps) {
    if (glob.svgTarp !== undefined) {
        addSvgElement("rect", {
            fill: props.fill,
            height: getTarpScale(height),
            stroke: props.stroke,
            width: getTarpScale(width),
            x: getTarpX(x),
            y: getTarpY(y),
        })

        return
    }

    if (glob.canvasTarp === undefined) {
        return
    }

    initCanvasStyle(props)

    if (props.fill) {
        glob.canvasTarp.fillRect(getTarpX(x), getTarpY(y), getTarpScale(width), getTarpScale(height))
    }

    if (!props.fill || props.stroke) {
        glob.canvasTarp.strokeRect(getTarpX(x), getTarpY(y), getTarpScale(width), getTarpScale(height))
    }
}
