import type { Point2D } from "../types/Point2D"

export function getNextPoint([x, y]: Point2D, angle: number, distance = 1): Point2D {
    return [
        x + distance * Math.cos(angle),
        y + distance * Math.sin(angle),
    ]
}
