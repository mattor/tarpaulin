import * as Tarpaulin from "tarpaulin"

function hilbert(width, spacing, pathList = []) {
    return (x, y, lg, i1, i2, f) => {
        if (lg === 1) {
            const px = (width - x) * spacing
            const py = (width - y) * spacing
            pathList.push([px, py])
            return
        }
        lg >>= 1
        f(x + i1 * lg, y + i1 * lg, lg, i1, 1 - i2, f)
        f(x + i2 * lg, y + (1 - i2) * lg, lg, i1, i2, f)
        f(x + (1 - i1) * lg, y + (1 - i1) * lg, lg, i1, i2, f)
        f(x + (1 - i2) * lg, y + i2 * lg, lg, 1 - i1, i2, f)
        return pathList
    }
}

function drawHilbert(order) {
    // Curve Constants
    const width = 2 ** order
    const space = 10

    // Prep and run function
    const f = hilbert(width, space)
    const pathList = f(0, 0, width, 0, 0, f)

    // Set appearance
    const size = 600
    const xMin = 0
    const xMax = width * space + space
    const yMin = 0
    const yMax = width * space + space

    // Create tarp
    Tarpaulin.createCanvas({ size, xMin, xMax, yMin, yMax })

    // Draw
    Tarpaulin.drawPath(pathList)
}

drawHilbert(6)
