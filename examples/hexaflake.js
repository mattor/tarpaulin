import Tarpaulin, { Const, Color } from "../src"

// Set appearance
const size = 600
const xMin = -300
const xMax = 300
const yMin = -300
const yMax = 300

// Create tarp
Tarpaulin.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

const drawFlake = ([x, y], r) => {
    if (r < 5) {
        // Draw
        const pathList = []
        for (let i = 0; i < 6; i++) {
            const angle = Const.RADIANS_30_DEGREES + Const.RADIANS_60_DEGREES * i
            pathList.push([x + Math.cos(angle) * r, y + Math.sin(angle) * r])
        }
        Tarpaulin.drawPath(pathList, { fillStyle: Color.Cyan })
    } else {
        // Recurse
        drawFlake([x, y], r / 3)
        for (let i = 0; i < 6; i++) {
            const angle = Const.RADIANS_30_DEGREES + Const.RADIANS_60_DEGREES * i
            drawFlake([x + Math.cos(angle) * r * 2 / 3, y + Math.sin(angle) * r * 2 / 3], r / 3)
        }
    }
}

drawFlake([0, 0], 300)
