import * as T from "tarpaulin"

// Set appearance
const size = 1200
const xMin = 0
const xMax = size
const yMin = -size
const yMax = 0

// Create tarp
T.createSvg({ size, xMin, xMax, yMin, yMax })

// Start drawing
const allColors = [...Object.entries(T.Color)]
const gridSize = Math.sqrt(allColors.length)
const squareSize = size / gridSize

allColors.forEach(([key, value], index) => {
    const squarePosition: T.Point2D = [
        index % gridSize * squareSize,
        -Math.floor(index / gridSize) * squareSize,
    ]
    T.drawRect(squarePosition, squareSize, squareSize, { fill: value })
    T.drawText([
        squarePosition[0],
        squarePosition[1] - squareSize,
    ], key, { fill: T.Color.Black })
    T.drawText([
        squarePosition[0],
        squarePosition[1] - squareSize + 12,
    ], value, { fill: T.Color.Black })
})

export function deactivate() {
    T.destroy()
}
