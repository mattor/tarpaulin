export function getNextPoint([x, y]: [number, number], angle: number, distance = 1): [number, number] {
    return [
        x + distance * Math.cos(angle),
        y + distance * Math.sin(angle),
    ]
}
