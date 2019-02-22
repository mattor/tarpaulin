import Tarpaulin from "../"

// Set appearance
const size = 1200
const xMin = -3
const xMax = 3
const yMin = -1.5
const yMax = 1.5

const logFn = x => 1 / (1 + Math.pow(Math.E, -x))

function drawGraph(fn, color) {
    const points = []
    const step = 0.1
    let x = xMax

    while (x >= xMin - step) {
        const y = fn(x)
        points.push([x, y])
        x -= step
    }

    Tarpaulin.drawPath(points, { strokeStyle: color })
}

// Create Canvas

Tarpaulin.create({ size, xMin, xMax, yMin, yMax })

// Start drawing

Tarpaulin.drawAxes({ strokeStyle: "#ccc" })

drawGraph(Math.log, "#F00")
drawGraph(Math.atan, "#0F0")
drawGraph(Math.sin, "#00F")
drawGraph(Math.cos, "#F0F")
drawGraph(Math.atanh, "#08F")
drawGraph(logFn, "#0FF")

Tarpaulin.drawCircle([0, 0], 400)
