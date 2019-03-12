import Tarpaulin from "../"

// Set appearance
const size = 600
const xMin = -2
const xMax = 2
const yMin = -4 / 3
const yMax = 4 / 3
const pixelRatio = 2

const c = [-1, 1 / 4]  // all complex number are in the form of [x, y] which means x + i*y
const maxIterate = 50
const R = (1 + Math.sqrt(1 + 4 * abs(c))) / 2

function f(z, c) {  // calculate the value of the function with complex arguments.
    return [z[0] * z[0] - z[1] * z[1] + c[0], 2 * z[0] * z[1] + c[1]]
}

function abs(z) {  // absolute value of a complex number
    return Math.sqrt(z[0] * z[0] + z[1] * z[1])
}

function checkIfBelongsToJuliaSet([x, y]) {
    let z = [x, y]
    for (let i = 0; i < maxIterate; i++) {
        z = f(z, c)
        if (abs(z) > R) {
            // Return a number as a percentage
            return i / maxIterate * 100
        }
    }
    // Return zero if in set
    return 0
}

// Create Canvas

const { canvasWidth, canvasHeight } = Tarpaulin.create({ size, xMin, xMax, yMin, yMax, pixelRatio })

// Start drawing

for (let x = 0; x < canvasWidth; x++) {
    for (let y = 0; y < canvasHeight; y++) {
        const belongsToSet = checkIfBelongsToJuliaSet(Tarpaulin.getXYCoords([x, y]))
        if (belongsToSet === 0) {
            Tarpaulin.drawPixel([x, y], { fillStyle: Tarpaulin.Color.Black })
        } else {
            Tarpaulin.drawPixel([x, y], { fillStyle: `hsl(0, 100%, ${belongsToSet}%)` })
        }
    }
}
