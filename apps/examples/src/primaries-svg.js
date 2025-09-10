import * as T from "tarpaulin"

// Set appearance
const size = 600
const xMin = -50
const xMax = 50
const yMin = -50
const yMax = 50

// Create tarp
T.createSvg({ size, xMin, xMax, yMin, yMax })

// Start drawing
T.drawGrid()
T.drawAxes()

// Draw filled & stroked shapes
T.drawCircle([-25, 25], 15, { fill: T.Color.Red, stroke: T.Color.Black })
T.drawRect([10, 40], 30, 30, { fill: T.Color.Blue, stroke: T.Color.Black })
T.drawPath([[-25, -10], [-42.32, -40], [-7.68, -40]], { fill: T.Color.Yellow, stroke: T.Color.Black })

// Draw filled-only/stroked-only shapes
T.drawCircle([15, -15], 5, { fill: T.Color.Green })
T.drawRect([30, -10], 10, 10)
T.drawNGon([15, -35], 5, 6.2, { stroke: T.Color.Black, closed: true })
T.drawPath([[30, -30], [40, -30], [35, -30], [35, -40]], { stroke: T.Color.Black, strokeWidth: 5 })
