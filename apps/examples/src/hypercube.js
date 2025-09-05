import { animate, clear, Color, createCanvas, drawPath, Point4D } from "tarpaulin"

// Set appearance
const size = 300
const xMin = -1
const xMax = 1
const yMin = -1
const yMax = 1

// Create tarp
createCanvas({ size, xMin, xMax, yMin, yMax })

const vertices = [
    new Point4D(-1, 1, -1, 1),
    new Point4D(1, 1, -1, 1),
    new Point4D(1, 1, 1, 1),
    new Point4D(-1, 1, 1, 1),
    new Point4D(-1, -1, -1, 1),
    new Point4D(1, -1, -1, 1),
    new Point4D(1, -1, 1, 1),
    new Point4D(-1, -1, 1, 1),
    new Point4D(-1, 1, -1, -1),
    new Point4D(1, 1, -1, -1),
    new Point4D(1, 1, 1, -1),
    new Point4D(-1, 1, 1, -1),
    new Point4D(-1, -1, -1, -1),
    new Point4D(1, -1, -1, -1),
    new Point4D(1, -1, 1, -1),
    new Point4D(-1, -1, 1, -1),
]

const faces = [
    [0, 1, 2, 3],
    [4, 7, 6, 5],
    [0, 4, 5, 1],
    [2, 6, 7, 3],
    [8, 9, 10, 11],
    [12, 15, 14, 13],
    [8, 12, 13, 9],
    [10, 14, 15, 11],
    [0, 1, 9, 8],
    [2, 3, 11, 10],
    [4, 7, 15, 12],
    [6, 5, 13, 14],
]

let rx = 0
let ry = 0
let rz = 0
let rw = 0

animate(() => {
    // Rotate
    const projectedVertices = vertices.map((vertex) => {
        const rotatedVertex = vertex
            .rotateX(rx)
            .rotateY(ry)
            .rotateZ(rz)
            .rotateW(rw)

        return rotatedVertex.project(2, 5)
    })

    // Draw faces

    clear({ fill: Color.Black })

    faces.forEach((face) => {
        drawPath([
            [projectedVertices[face[0]].x, projectedVertices[face[0]].y],
            [projectedVertices[face[1]].x, projectedVertices[face[1]].y],
            [projectedVertices[face[2]].x, projectedVertices[face[2]].y],
            [projectedVertices[face[3]].x, projectedVertices[face[3]].y],
            [projectedVertices[face[0]].x, projectedVertices[face[0]].y],
        ], { stroke: Color.Red })
    })

    // Increase rotation angles
    rx += 1
    ry += 1
    rw += 1
})
