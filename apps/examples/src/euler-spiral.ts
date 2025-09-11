import * as T from "tarpaulin"

// Set appearance
const size = 600
const xMin = -2
const xMax = 100
const yMin = -2
const yMax = 100

const scale = 100

// Create tarp
T.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

function drawEulerSpiral(t: number, N: number) {
    let dx: number
    let dy: number
    let time = 0
    let prev = { x: 0, y: 0 }
    let current: typeof prev
    const dt = t / N
    const pathList: number[][] = []

    while (N--) {
        dx = Math.cos(time * time) * dt
        dy = Math.sin(time * time) * dt
        time += dt

        current = {
            x: prev.x + dx,
            y: prev.y + dy,
        }

        pathList.push([current.x * scale, current.y * scale])

        prev = current
    }

    T.drawPath(pathList)
}

T.drawGrid()
T.drawAxes()

drawEulerSpiral(10, 10000)

export function deactivate() {
    T.destroy()
}
