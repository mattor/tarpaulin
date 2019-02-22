import Tarpaulin from "../"

// Set appearance
const size = 600
const xMin = -1.01
const xMax = 1.01
const yMin = -1.01
const yMax = 1.01

// Create Canvas
Tarpaulin.create({ size, xMin, xMax, yMin, yMax })

// Start drawing

//Tarpaulin.drawAxes({ strokeStyle: "#ccc" })

Tarpaulin.drawCircle([0, 0], 1, { fillStyle: "#eee", strokeStyle: "#000" })

const drawLeafs = sections => {
    const step = 2 * Math.PI / sections

    const start = 15 * step
    const end = 21 * step

    for (let i = 0; i < sections; i++) {
        const points = [
            [Math.cos(start), Math.sin(start)],
            [Math.cos(i * step), Math.sin(i * step)],
            [Math.cos(end), Math.sin(end)],
        ]
        Tarpaulin.drawPath(points, { fillStyle: "rgba(0, 0, 255, 0.1)" })
    }
}

drawLeafs(24)
