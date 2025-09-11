import * as T from "tarpaulin"

// Set appearance
const size = 600
const xMin = 0
const xMax = size
const yMin = 0
const yMax = size

// Create tarp
T.createSvg({ size, xMin, xMax, yMin, yMax })

function getTrianglePoints(pos: T.Point2D, sideLength: number): T.Point2D[] {
    return [
        pos, // Lower left
        [pos[0] + sideLength, pos[1]], // Lower right
        [pos[0] + sideLength / 2, pos[1] + Math.sin(T.Const.RADIANS_60_DEGREES) * sideLength], // Top
    ]
}

function drawTriangle(pos: T.Point2D, sideLength: number, depth: number) {
    const innerSideLength = sideLength / 2
    const innerPositions = getTrianglePoints(pos, innerSideLength)

    if (depth === 0) {
        innerPositions.forEach((trianglePosition) => {
            T.drawPath(getTrianglePoints(trianglePosition, innerSideLength), { fill: T.Color.Yellow, stroke: T.Color.DeepOrangeLighten1 })
        })
    }
    else {
        innerPositions.forEach((trianglePosition) => {
            drawTriangle(trianglePosition, innerSideLength, depth - 1)
        })
    }
}

const margin = 10

drawTriangle([margin, margin], size - 2 * margin, 5)

export function deactivate() {
    T.destroy()
}
