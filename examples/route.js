import Tarpaulin from "../src"
import routePoints from "./data/route-66.json"

const points = []

routePoints.forEach(p => {
    points.push([p.lon, p.lat])
})

// Set appearance
const size = 600

const { xMin, xMax, yMin, yMax } = Tarpaulin.getMinMax(points)

// Create Canvas

Tarpaulin.create({ size, xMin, xMax, yMin, yMax })

// Start drawing

Tarpaulin.drawPath(points)
