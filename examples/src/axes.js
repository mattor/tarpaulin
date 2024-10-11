// eslint-disable-next-line import/no-unresolved
import Tarpaulin from "tarpaulin"

// Set appearance
const size = 600
const xMin = -50
const xMax = 50
const yMin = -50
const yMax = 50

// Create tarp
Tarpaulin.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

Tarpaulin.drawGrid()
Tarpaulin.drawAxes()
