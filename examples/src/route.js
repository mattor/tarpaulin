import Tarpaulin, { getMinMax } from "tarpaulin"
import routePoints from "../data/route-66.json"

const pathList = []

routePoints.forEach(p => {
    pathList.push([p.lon, p.lat])
})

// Set appearance
const size = 600

const { xMin, xMax, yMin, yMax } = getMinMax(pathList)

// Create tarp

Tarpaulin.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

Tarpaulin.drawPath(pathList)
