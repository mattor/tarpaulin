import * as T from "tarpaulin"

// Set appearance
const size = 600
const xMin = -50
const xMax = 50
const yMin = -50
const yMax = 50

// Create tarp
T.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

T.drawGrid()
T.drawAxes()
