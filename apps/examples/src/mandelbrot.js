import * as T from "tarpaulin"

// Set appearance
const size = 600
const xMin = -2
const xMax = 1
const yMin = -1.25
const yMax = 1.25
const pixelRatio = window.devicePixelRatio

const R = 5
const maxIterations = (yMax - yMin) * 50

function f(acc, z) {
    return [acc[0] * acc[0] - acc[1] * acc[1] + z[0], 2 * acc[0] * acc[1] + z[1]]
}

function abs(z) { // absolute value of a complex number
    return Math.sqrt(z[0] * z[0] + z[1] * z[1])
}

function isInMandelbrotSet(z) {
    let acc = [...z]
    for (let i = 0; i < maxIterations; i++) {
        acc = f(acc, z)
        // Return a number as a percentage
        if (abs(acc) > R) {
            return i / maxIterations * 100
        }
    }
    // Return zero if in set
    return 0
}

// Create tarp

const { tarpWidth, tarpHeight } = T.createCanvas({ size, xMin, xMax, yMin, yMax, pixelRatio })

// Start drawing

for (let x = 0; x < tarpWidth; x++) {
    for (let y = 0; y < tarpHeight; y++) {
        const belongsToSet = isInMandelbrotSet(T.getXYCoords([x, y]))
        if (belongsToSet === 0) {
            T.drawPixel([x, y], { fill: T.Color.Black })
        }
        else {
            T.drawPixel([x, y], { fill: `hsl(0, 100%, ${belongsToSet}%)` })
        }
    }
}
