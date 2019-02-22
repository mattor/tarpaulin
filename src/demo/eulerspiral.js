import Tarpaulin from "../"

// Set appearance
const size = 600
const xMin = 0
const xMax = 100
const yMin = 0
const yMax = 100

const scale = 100

// Create Canvas
Tarpaulin.create({ size, xMin, xMax, yMin, yMax })

// Start drawing

function drawEulerSpiral(T, N) {
    let dx, dy, t = 0, prev = { x: 0, y: 0 }, current
    const dt = T / N
    const points = []

    while (N--) {
        dx = Math.cos(t * t) * dt
        dy = Math.sin(t * t) * dt
        t += dt

        current = {
            x: prev.x + dx,
            y: prev.y + dy,
        }

        points.push([current.x * scale, current.y * scale])

        prev = current
    }

    Tarpaulin.drawPath(points)
}

drawEulerSpiral(10, 10000)
