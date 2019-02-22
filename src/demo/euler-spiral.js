import Tarpaulin from "../"

const xMin = 0
const xMax = 500
const yMin = 0
const yMax = 500
const scale = 100

Tarpaulin.create({
    size: 1200,
    xMin,
    xMax,
    yMin,
    yMax,
})

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

    console.log(points)

    Tarpaulin.drawPath(points)
}

Tarpaulin.drawAxes()
drawEulerSpiral(10, 10000)
