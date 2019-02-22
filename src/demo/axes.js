import Tarpaulin from "../"

// Set appearance
const size = 600
const xMin = -400
const xMax = 400
const yMin = -400
const yMax = 400

// Create Canvas
Tarpaulin.create({ size, xMin, xMax, yMin, yMax })

// Start drawing

Tarpaulin.drawAxes()
