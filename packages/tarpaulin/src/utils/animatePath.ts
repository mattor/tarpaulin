import type { Point2D } from "../types/Point2D"
import { drawPath } from "../draw/drawPath"
import { animate } from "./animate"

export function animatePath(pathList: Point2D[], props = {}, fps = 30) {
    let pos = 0

    let animation: any

    const drawPathSegment = () => {
        drawPath([pathList[pos], pathList[pos + 1]], { ...props, closed: false })

        if (pos >= pathList.length - 2) {
            animation.stop()
        }

        pos += 1
    }

    animation = animate(drawPathSegment, fps)
}
