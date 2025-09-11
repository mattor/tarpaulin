import * as T from "tarpaulin"

// Set appearance
const size = 600
const xMin = -4
const xMax = 4
const yMin = -2.5
const yMax = 2.5

const logFn = (x: number) => 1 / (1 + Math.E ** -x)
const expFn = (x: number) => 2 ** x

function drawGraph(fn: (x: number) => number, color: string) {
    const pathList: [number, number][] = []
    const step = 0.01
    let x = xMin

    while (x <= xMax) {
        const y = fn(x)
        pathList.push([x, y])
        x += step
    }

    T.drawPath(pathList, { stroke: color })
}

// Create tarp

T.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

T.drawGrid()
T.drawAxes()

drawGraph(Math.log, T.Color.Red)
drawGraph(Math.atan, T.Color.Green)
drawGraph(Math.sin, T.Color.Blue)
drawGraph(Math.cos, T.Color.Purple)
drawGraph(Math.atanh, T.Color.Orange)
drawGraph(logFn, T.Color.Cyan)
drawGraph(expFn, T.Color.Yellow)

T.drawCircle([0, 0], 400)

export function deactivate() {
    T.destroy()
}
