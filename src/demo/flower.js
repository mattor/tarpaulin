import Tarpaulin from "../"

const xMin = -1
const xMax = 1
const yMin = -1
const yMax = 1

Tarpaulin.create({
    size: 800,
    xMin,
    xMax,
    yMin,
    yMax,
})

Tarpaulin.drawAxes({ strokeStyle: "#ccc" })

Tarpaulin.drawCircle([0, 0], 1)
