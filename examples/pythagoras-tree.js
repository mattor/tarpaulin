import Tarpaulin, { Color } from "../src"

// Set appearance
const size = 640
const xMin = 0
const xMax = 120
const yMin = 0
const yMax = 84

// Create tarp
Tarpaulin.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

let depthLimit = 0

const drawBranch = (x1, y1, x2, y2, depth) => {
    if (depth >= depthLimit) {
        return
    }

    const dx = x2 - x1
    const dy = y2 - y1

    const x3 = x2 - dy
    const y3 = y2 + dx
    const x4 = x1 - dy
    const y4 = y1 + dx
    const x5 = x4 + 0.5 * (dx - dy)
    const y5 = y4 + 0.5 * (dx + dy)

    Tarpaulin.drawPath([
        [x1, y1],
        [x2, y2],
        [x3, y3],
        [x5, y5],
        [x4, y4],
    ], { fill: `${Color.Green}CC` })

    drawBranch(x4, y4, x5, y5, depth + 1)
    drawBranch(x5, y5, x3, y3, depth + 1)
}

const firstDelta = 10

Tarpaulin.animate(() => {
    Tarpaulin.clear()
    drawBranch(xMax / 2 - firstDelta, 2, xMax / 2 + firstDelta, 2, 0)
    depthLimit = (depthLimit + 1) % 12
}, 1)
