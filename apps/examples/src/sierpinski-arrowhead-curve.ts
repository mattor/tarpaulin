import * as T from "tarpaulin"

function arrowheadCurve(level: number, pathList: number[][], fromPoint: number[], sideLength: number, angle: number, angleDelta: number, orientation: number) {
    let currentVector

    // Level 0 - bottom of recursion: Draw next part of path
    if (level === 0) {
        const point = T.getNextPoint(fromPoint, orientation * angle, sideLength)
        pathList.push(point)
        currentVector = { point, angle }
        return currentVector
    }

    currentVector = arrowheadCurve(level - 1, pathList, fromPoint, sideLength / 2, angle, -angleDelta, orientation)

    fromPoint = currentVector.point
    angle = currentVector.angle

    // turn
    angle += angleDelta * T.Const.RADIANS_60_DEGREES
    currentVector = arrowheadCurve(level - 1, pathList, fromPoint, sideLength / 2, angle, angleDelta, orientation)

    fromPoint = currentVector.point
    angle = currentVector.angle

    // turn
    angle += angleDelta * T.Const.RADIANS_60_DEGREES
    currentVector = arrowheadCurve(level - 1, pathList, fromPoint, sideLength / 2, angle, -angleDelta, orientation)

    return currentVector
}

function drawSierpinskiArrowheadCurve([x, y], sideLength, { level = 3, orientation = -1 } = {}) {
    if (orientation !== -1 || orientation === 1) { // TODO: What is this?
        orientation = 1
    }

    // Set starting point
    const height = sideLength * Math.sin(T.Const.RADIANS_60_DEGREES)
    const startPoint = [
        x - 1 / 2 * sideLength,
        y + orientation * 1 / 2 * height,
    ]

    const pathList = [startPoint]

    // Orientation
    if (level % 2 === 0) {
        arrowheadCurve(level, pathList, startPoint, sideLength, 0, 1, orientation)
    }
    else {
        arrowheadCurve(level, pathList, startPoint, sideLength, -T.Const.RADIANS_60_DEGREES, 1, orientation)
    }

    // Draw
    T.animatePath(pathList, { stroke: T.Color.RedAccent4, strokeWidth: 3 }, 60)
}

// Set appearance
const size = 600
const xMin = 0
const xMax = size
const yMin = 0
const yMax = size

// Create tarp
T.createCanvas({ size, xMin, xMax, yMin, yMax })

drawSierpinskiArrowheadCurve([size / 2, size / 2], size, { level: 7, orientation: -1 })

export function deactivate() {
    T.destroy()
}
