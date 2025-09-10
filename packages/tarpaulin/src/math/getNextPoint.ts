export function getNextPoint([x, y]: number[], angle: number, distance = 1) {
    return [
        x + distance * Math.cos(angle),
        y + distance * Math.sin(angle),
    ]
}
