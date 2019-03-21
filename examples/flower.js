import Tarpaulin, { Const, Color } from "../src"

// Set appearance
const size = 600
const xMin = -1.01
const xMax = 1.01
const yMin = -1.01
const yMax = 1.01

// Create tarp
Tarpaulin.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

Tarpaulin.drawCircle([0, 0], 1, { fillStyle: Color.Black, strokeStyle: Color.GreyLighten2 })

const drawLeafs = sections => {
    const angleStep = Const.RADIANS_360_DEGREES / sections
    const colorStep = 255 / sections * 2

    const start = 16 * angleStep
    const end = 20 * angleStep

    for (let i = 0; i < sections; i++) {
        const pathList = [
            [Math.cos(start), Math.sin(start)],
            [Math.cos(i * angleStep), Math.sin(i * angleStep)],
            [Math.cos(end), Math.sin(end)],
        ]
        Tarpaulin.drawPath(pathList, { fillStyle: `hsla(${i * colorStep}, 100%, 50%, 0.1)` })
    }
}

drawLeafs(24)
