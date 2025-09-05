// eslint-disable-next-line import/no-unresolved
import Tarpaulin, { Color, Const } from "tarpaulin"

const n = 5; const a = 60; const b = 60

const size = 400
const xMin = -a
const xMax = a
const yMin = -b
const yMax = b

// Create tarp

Tarpaulin.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

const pathList = []

for (let t = 0; t < Const.RADIANS_360_DEGREES; t += 0.1) {
    const x = Math.abs(Math.cos(t)) ** (2 / n) * a * Math.sign(Math.cos(t))
    const y = Math.abs(Math.sin(t)) ** (2 / n) * b * Math.sign(Math.sin(t))
    pathList.push([x, y])
}

Tarpaulin.drawPath(pathList, { fill: Color.Blue })
