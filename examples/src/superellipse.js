// eslint-disable-next-line import/no-unresolved
import Tarpaulin, { Const, Color } from "tarpaulin"

const n = 5, a = 60, b = 60

const size = 400
const xMin = -a
const xMax = a
const yMin = -b
const yMax = b

// Create tarp

Tarpaulin.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

const pathList = []

for (let t = 0; t < Const.RADIANS_360_DEGREES; t += .1) {
    const x = Math.pow(Math.abs(Math.cos(t)), 2 / n) * a * Math.sign(Math.cos(t))
    const y = Math.pow(Math.abs(Math.sin(t)), 2 / n) * b * Math.sign(Math.sin(t))
    pathList.push([x, y])
}

Tarpaulin.drawPath(pathList, { fill: Color.Blue })
