import * as T from "tarpaulin"
import geoJson from "../data/harbor-promenade.json"

const pathList: [number, number][] = geoJson.features
    .find(f => f.geometry.type === "LineString")
    ?.geometry
    .coordinates as [number, number][] ?? []

// Set appearance
const size = 600

const { xMin, xMax, yMin, yMax } = T.getMinMax(pathList)

// Create tarp

T.createSvg({ size, xMin, xMax, yMin, yMax })

// Start drawing

T.drawPath(pathList)

export function deactivate() {
    T.destroy()
}
