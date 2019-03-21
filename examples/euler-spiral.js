import Tarpaulin from "../src"

// Set appearance
const size = 600
const xMin = -2
const xMax = 100
const yMin = -2
const yMax = 100

const scale = 100

// Create tarp
Tarpaulin.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

function drawEulerSpiral(T, N) {
    let dx, dy, t = 0, prev = { x: 0, y: 0 }, current
    const dt = T / N
    const pathList = []

    while (N--) {
        dx = Math.cos(t * t) * dt
        dy = Math.sin(t * t) * dt
        t += dt

        current = {
            x: prev.x + dx,
            y: prev.y + dy,
        }

        pathList.push([current.x * scale, current.y * scale])

        prev = current
    }

    Tarpaulin.drawPath(pathList)
}

Tarpaulin.drawGrid()
Tarpaulin.drawAxes()

drawEulerSpiral(10, 10000)
