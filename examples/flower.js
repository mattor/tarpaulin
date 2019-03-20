import Tarpaulin from "../src"

// Set appearance
const size = 600
const xMin = -1.01
const xMax = 1.01
const yMin = -1.01
const yMax = 1.01

// Create Canvas
Tarpaulin.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

Tarpaulin.drawCircle([0, 0], 1, { fillStyle: Tarpaulin.Color.Black, strokeStyle: Tarpaulin.Color.GreyLighten2 })

const drawLeafs = sections => {
    const angleStep = 2 * Math.PI / sections
    const colorStep = 255 / sections * 2

    const start = 16 * angleStep
    const end = 20 * angleStep

    for (let i = 0; i < sections; i++) {
        const points = [
            [Math.cos(start), Math.sin(start)],
            [Math.cos(i * angleStep), Math.sin(i * angleStep)],
            [Math.cos(end), Math.sin(end)],
        ]
        Tarpaulin.drawPath(points, { fillStyle: `hsla(${i * colorStep}, 100%, 50%, 0.1)` })
    }
}

drawLeafs(24)
