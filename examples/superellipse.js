import Tarpaulin from "../src"

const n = 5, a = 60, b = 60

const size = 400
const xMin = -a
const xMax = a
const yMin = -b
const yMax = b

// Create Canvas

Tarpaulin.create({ size, xMin, xMax, yMin, yMax })

// Start drawing

const points = []

for (let t = 0; t < 2 * Math.PI; t += .1) {
    const x = Math.pow(Math.abs(Math.cos(t)), 2 / n) * a * Math.sign(Math.cos(t))
    const y = Math.pow(Math.abs(Math.sin(t)), 2 / n) * b * Math.sign(Math.sin(t))
    points.push([x, y])
}

Tarpaulin.drawPath(points, { fillStyle: Tarpaulin.Color.Blue })
