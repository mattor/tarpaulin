import Tarpaulin from "../src"

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

Tarpaulin.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

Tarpaulin.drawGrid()
Tarpaulin.drawAxes()

drawGraph(Math.log, Tarpaulin.Color.Red)
drawGraph(Math.atan, Tarpaulin.Color.Green)
drawGraph(Math.sin, Tarpaulin.Color.Blue)
drawGraph(Math.cos, Tarpaulin.Color.Purple)
drawGraph(Math.atanh, Tarpaulin.Color.Orange)
drawGraph(logFn, Tarpaulin.Color.Cyan)
drawGraph(expFn, Tarpaulin.Color.Yellow)

Tarpaulin.drawCircle([0, 0], 400)
