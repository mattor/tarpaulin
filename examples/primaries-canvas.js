import Tarpaulin, { Color } from "../src"

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

// Draw filled & stroked shapes
Tarpaulin.drawCircle([-25, 25], 15, { fill: Color.Red, stroke: Color.Black })
Tarpaulin.drawRect([10, 40], 30, 30, { fill: Color.Blue, stroke: Color.Black })
Tarpaulin.drawPath([[-25, -10], [-42.32, -40], [-7.68, -40]], { fill: Color.Yellow, stroke: Color.Black })

// Draw filled-only/stroked-only shapes
Tarpaulin.drawCircle([15, -15], 5, { fill: Color.Green })
Tarpaulin.drawRect([30, -10], 10, 10)
Tarpaulin.drawPath([[15, -30], [9.226, -40], [20.773, -40]], { stroke: Color.Black, closed: true })
Tarpaulin.drawPath([[30, -30], [40, -30], [35, -30], [35, -40]], { stroke: Color.Black, strokeWidth: 5 })
