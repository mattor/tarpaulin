import type { Point2D } from "../types/Point2D"
import { lerp } from "./lerp"

export function lerpPoints2D(p1: Point2D, p2: Point2D, t: number): Point2D {
    return [
        lerp(p1[0], p2[0], t),
        lerp(p1[1], p2[1], t),
    ]
}
