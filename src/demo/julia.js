const length = 400
const width = 400
const c = [-1, 1 / 4]  // all complex number are in the form of [x, y] which means x + i*y
//const c = [0, 1]  // all complex number are in the form of [x, y] which means x + i*y
const maxIterate = 50
const R = (1 + Math.sqrt(1 + 4 * abs(c))) / 2

const myCanvas = document.createElement("canvas")
myCanvas.width = width
myCanvas.height = length
document.body.appendChild(myCanvas)
const ctx = myCanvas.getContext("2d")

// Start drawing
function conversion(x, y, width, R) {   // transformation from canvas coordinates to XY plane
    const m = R / width
    const x1 = m * (2 * x - width)
    const y2 = m * (width - 2 * y)
    return [x1, y2]
}

function f(z, c) {  // calculate the value of the function with complex arguments.
    return [z[0] * z[0] - z[1] * z[1] + c[0], 2 * z[0] * z[1] + c[1]]
}

function abs(z) {  // absolute value of a complex number
    return Math.sqrt(z[0] * z[0] + z[1] * z[1])
}

function checkIfBelongsToJuliaSet(x, y) {
    let z = conversion(x, y, width, R)  // convert it to XY plane
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

for (let x = 0; x < width; x++) {
    for (let y = 0; y < length; y++) {
        const belongsToSet = checkIfBelongsToJuliaSet(x, y)
        if (belongsToSet === 0) {
            ctx.fillStyle = "#000"
            // Draw a black pixel
            ctx.fillRect(x, y, 1, 1)
        } else {
            ctx.fillStyle = `hsl(0, 100%, ${belongsToSet}%)`
            // Draw a colorful pixel
            ctx.fillRect(x, y, 1, 1)
        }
    }
}
