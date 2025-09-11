import { lerp } from "./lerp"

export function lerpPoints2D(p1: [number, number], p2: [number, number], t: number): [number, number] {
    return [
        lerp(p1[0], p2[0], t),
        lerp(p1[1], p2[1], t),
    ]
}
