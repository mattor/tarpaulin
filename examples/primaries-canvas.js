import Tarpaulin from "../src"

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
Tarpaulin.drawCircle([-25, 25], 15, { fillStyle: Tarpaulin.Color.Red, strokeStyle: Tarpaulin.Color.Black })
Tarpaulin.drawRect([10, 40], 30, 30, { fillStyle: Tarpaulin.Color.Blue, strokeStyle: Tarpaulin.Color.Black })
Tarpaulin.drawPath([[-25, -10], [-42.32, -40], [-7.68, -40]], { fillStyle: Tarpaulin.Color.Yellow, strokeStyle: Tarpaulin.Color.Black })
