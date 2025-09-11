import * as T from "tarpaulin"

// Set appearance
const size = 600
const xMin = -2
const xMax = 2
const yMin = -4 / 3
const yMax = 4 / 3

const maxIterations = 50

function f(z: T.Point2D, c: T.Point2D): T.Point2D { // calculate the value of the function with complex arguments.
    return [z[0] * z[0] - z[1] * z[1] + c[0], 2 * z[0] * z[1] + c[1]]
}

function abs(z: T.Point2D) { // absolute value of a complex number
    return Math.sqrt(z[0] * z[0] + z[1] * z[1])
}

function isInJuliaSet(z: T.Point2D, c: T.Point2D, R: number) {
    for (let i = 0; i < maxIterations; i++) {
        z = f(z, c)
        if (abs(z) > R) {
            // Return a number as a percentage
            return i / maxIterations * 100
        }
    }
    // Return zero if in set
    return 0
}

// Create tarp

const { tarpWidth, tarpHeight } = T.createCanvas({ size, xMin, xMax, yMin, yMax })

function draw(c: T.Point2D) {
    const R = (1 + Math.sqrt(1 + 4 * abs(c))) / 2

    for (let x = 0; x < tarpWidth; x++) {
        for (let y = 0; y < tarpHeight; y++) {
            const belongsToSet = isInJuliaSet(T.getXYCoords([x, y]), c, R)
            if (belongsToSet === 0) {
                T.drawPixel([x, y], { fill: T.Color.Black })
            }
            else {
                T.drawPixel([x, y], { fill: `hsl(0, 100%, ${belongsToSet}%)` })
            }
        }
    }
}

// Start drawing

draw([-1, 1 / 4]) // all complex number are in the form of [a, b] which means a + i*b

T.onMouseEvent("mousemove", ([a, b]) => {
    draw([a, b])
})

export function deactivate() {
    T.destroy()
}
