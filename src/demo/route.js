import Tarpaulin from "../"
import routePoints from "./route-66.json"

const points = []

routePoints.forEach(p => {
    const [x, y] = [p.lon, p.lat]
    points.push([x, y])
})

// Set appearance
const size = 600

const { xMin, xMax, yMin, yMax } = Tarpaulin.getMinMax(points)

// Create Canvas

Tarpaulin.create({ size, xMin, xMax, yMin, yMax })

// Start drawing

Tarpaulin.drawPath(points)
