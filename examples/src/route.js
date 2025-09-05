// eslint-disable-next-line import/no-unresolved
import Tarpaulin, { getMinMax } from "tarpaulin"
import geoJson from "../data/havnepromenaden.json"

const pathList = geoJson.features
    .find(f => f.geometry.type === "LineString")
    .geometry
    .coordinates

// Set appearance
const size = 600

const { xMin, xMax, yMin, yMax } = getMinMax(pathList)

// Create tarp

Tarpaulin.createSvg({ size, xMin, xMax, yMin, yMax })

// Start drawing

Tarpaulin.drawPath(pathList)
