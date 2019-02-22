import Tarpaulin from "../"

// Set appearance
const size = 1200
const xMin = -2
const xMax = 1
const yMin = -1.25
const yMax = 1.25

function checkIfBelongsToMandelbrotSet([x, y]) {
    let realComponentOfResult = x
    let imaginaryComponentOfResult = y
    // Set max number of iterations
    const maxIterations = (yMax - yMin) * 50
    for (let i = 0; i < maxIterations; i++) {
        const tempRealComponent = realComponentOfResult * realComponentOfResult - imaginaryComponentOfResult * imaginaryComponentOfResult + x
        const tempImaginaryComponent = 2.0 * realComponentOfResult * imaginaryComponentOfResult + y
        realComponentOfResult = tempRealComponent
        imaginaryComponentOfResult = tempImaginaryComponent
        // Return a number as a percentage
        if (realComponentOfResult * imaginaryComponentOfResult > 5) {
            return (i / maxIterations * 100)
        }
    }
    // Return zero if in set
    return 0
}

// Create Canvas
const { pixelWidth, pixelHeight } = Tarpaulin.create({ size, xMin, xMax, yMin, yMax })

// Start drawing
for (let x = 0; x < pixelWidth; x++) {
    for (let y = 0; y < pixelHeight; y++) {
        const belongsToSet = checkIfBelongsToMandelbrotSet(Tarpaulin.getXYCoords([x, y]))
        if (belongsToSet === 0) {
            Tarpaulin.drawPixel([x, y], { fillStyle: "#000" })
        } else {
            Tarpaulin.drawPixel([x, y], { fillStyle: `hsl(0, 100%, ${belongsToSet}%)` })
        }
    }
}
