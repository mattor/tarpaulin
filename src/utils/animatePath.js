import { animate } from "./"
import { drawPath } from "../draw"

export default (pathList, props = {}, fps = 30) => {
    let pos = 0

    const drawPathSegment = () => {
        drawPath([pathList[pos], pathList[pos + 1]], { ...props, closed: false })

        if (pos >= pathList.length - 2) {
            animation.stop()
        }

        pos++
    }

    const animation = animate(drawPathSegment, fps)
}