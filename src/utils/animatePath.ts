import { drawPath } from "../draw"

import { animate } from "./"

export default (pathList: number[][], props = {}, fps = 30) => {
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
