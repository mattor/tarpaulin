import Tarpaulin from "../"

// Set appearance
const size = 600
const xMin = -300
const xMax = 300
const yMin = -300
const yMax = 300

// Create Canvas
Tarpaulin.create({ size, xMin, xMax, yMin, yMax })

// Start drawing

const drawFlake = ([x, y], r) => {
    if (r < 5) {
        // Draw
        const points = []
        for (let i = 0; i < 6; i++) {
            const angle = Math.PI / 6 + Math.PI * i / 3
            points.push([x + Math.cos(angle) * r, y + Math.sin(angle) * r])
        }
        Tarpaulin.drawPath(points, { fillStyle: "#8bbbce" })
    } else {
        // Recurse
        drawFlake([x, y], r / 3)
        for (let i = 0; i < 6; i++) {
            const angle = Math.PI / 6 + Math.PI * i / 3
            drawFlake([x + Math.cos(angle) * r * 2 / 3, y + Math.sin(angle) * r * 2 / 3], r / 3)
        }
    }
}

drawFlake([0, 0], 300)
