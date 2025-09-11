import * as T from "tarpaulin"

// Set appearance
const size = 600
const xMin = -2
const xMax = 2
const yMin = -4 / 3
const yMax = 4 / 3

const maxIterations = 50

function f(z: T.ComplexNumber, c: T.ComplexNumber) { // calculate the value of the function with complex arguments.
    return new T.ComplexNumber({ re: z.re * z.re - z.im * z.im + c.re, im: 2 * z.re * z.im + c.im })
}

function isInJuliaSet(z: T.ComplexNumber, c: T.ComplexNumber, R: number) {
    for (let i = 0; i < maxIterations; i++) {
        z = f(z, c)
        if (z.abs() > R) {
            // Return a number as a percentage
            return i / maxIterations * 100
        }
    }
    // Return zero if in set
    return 0
}

// Create tarp

const { tarpWidth, tarpHeight } = T.createCanvas({ size, xMin, xMax, yMin, yMax })

function draw(c: T.ComplexNumber) {
    const R = (1 + Math.sqrt(1 + 4 * c.abs())) / 2

    for (let x = 0; x < tarpWidth; x++) {
        for (let y = 0; y < tarpHeight; y++) {
            const [re, im] = T.getXYCoords([x, y])
            const belongsToSet = isInJuliaSet(new T.ComplexNumber({ re, im }), c, R)
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

draw(new T.ComplexNumber({ re: -1, im: 1 / 4 })) // all complex number are in the form of [a, b] which means a + i*b

T.onMouseEvent("mousemove", ([re, im]) => {
    draw(new T.ComplexNumber({ re, im }))
})

export function deactivate() {
    T.destroy()
}
