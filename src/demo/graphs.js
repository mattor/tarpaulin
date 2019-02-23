import Tarpaulin from "../"

// Set appearance
const size = 600
const xMin = -4
const xMax = 4
const yMin = -2.5
const yMax = 2.5

const logFn = x => 1 / (1 + Math.pow(Math.E, -x))
const expFn = x => Math.pow(2, x)

function drawGraph(fn, color) {
    const points = []
    const step = 0.01
    let x = xMin

    while (x <= xMax) {
        const y = fn(x)
        points.push([x, y])
        x += step
    }

    Tarpaulin.drawPath(points, { strokeStyle: color })
}

// Create Canvas

Tarpaulin.create({ size, xMin, xMax, yMin, yMax })

// Start drawing

Tarpaulin.drawGrid()
Tarpaulin.drawAxes()

drawGraph(Math.log, "#F00")
drawGraph(Math.atan, "#0F0")
drawGraph(Math.sin, "#00F")
drawGraph(Math.cos, "#F0F")
drawGraph(Math.atanh, "#08F")
drawGraph(logFn, "#0FF")
drawGraph(expFn, "#880")

Tarpaulin.drawCircle([0, 0], 400)
