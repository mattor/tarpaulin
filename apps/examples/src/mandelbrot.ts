import * as T from "tarpaulin"

// Set appearance
const size = 600
const xMin = -2
const xMax = 1
const yMin = -1.25
const yMax = 1.25

const R = 5
const maxIterations = (yMax - yMin) * 50

function f(acc: T.ComplexNumber, z: T.ComplexNumber) {
    return new T.ComplexNumber({ re: acc.re * acc.re - acc.im * acc.im + z.re, im: 2 * acc.re * acc.im + z.im })
}

function isInMandelbrotSet(z: T.ComplexNumber) {
    let acc = new T.ComplexNumber(z)
    for (let i = 0; i < maxIterations; i++) {
        acc = f(acc, z)
        // Return a number as a percentage
        if (acc.abs() > R) {
            return i / maxIterations * 100
        }
    }
    // Return zero if in set
    return 0
}

// Create tarp

const { tarpWidth, tarpHeight } = T.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

for (let x = 0; x < tarpWidth; x++) {
    for (let y = 0; y < tarpHeight; y++) {
        const [re, im] = T.getXYCoords([x, y])
        const belongsToSet = isInMandelbrotSet(new T.ComplexNumber({ re, im }))
        if (belongsToSet === 0) {
            T.drawPixel([x, y], { fill: T.Color.Black })
        }
        else {
            T.drawPixel([x, y], { fill: `hsl(0, 100%, ${belongsToSet}%)` })
        }
    }
}

export function deactivate() {
    T.destroy()
}
