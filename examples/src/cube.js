// eslint-disable-next-line import/no-unresolved
import Tarpaulin, { Color, Point3D } from "tarpaulin"

// Set appearance
const size = 300
const xMin = -1
const xMax = 1
const yMin = -1
const yMax = 1

// Create tarp
Tarpaulin.createCanvas({ size, xMin, xMax, yMin, yMax })

const vertices = [
    new Point3D(-1, 1, -1),
    new Point3D(1, 1, -1),
    new Point3D(1, -1, -1),
    new Point3D(-1, -1, -1),
    new Point3D(-1, 1, 1),
    new Point3D(1, 1, 1),
    new Point3D(1, -1, 1),
    new Point3D(-1, -1, 1),
]

// The vertices for each of the 6 faces, indices to defined vertices
const faces = [
    [0, 1, 2, 3],
    [1, 5, 6, 2],
    [5, 4, 7, 6],
    [4, 0, 3, 7],
    [0, 4, 5, 1],
    [3, 2, 6, 7],
]

const colors = [
    Color.Red,
    Color.Green,
    Color.Blue,
    Color.Yellow,
    Color.Cyan,
    Color.Purple,
]

let angle = 0

Tarpaulin.animate(() => {
    const projectedVerticies = vertices.map((vertex) => {
        const rotatedVertex = vertex
            .rotateX(angle)
            .rotateY(angle)
        return rotatedVertex.project(5, 10)
    })

    const sortedFaces = faces
        .map((face, index) => ({
            index,
            z: (
                projectedVerticies[face[0]].z
                + projectedVerticies[face[1]].z
                + projectedVerticies[face[2]].z
                + projectedVerticies[face[3]].z
            ) / face.length,
        }))
        .sort((a, b) => b.z - a.z)

    // Draw

    Tarpaulin.clear({ fill: Color.Black })

    sortedFaces.forEach((sortedFace) => {
        const face = faces[sortedFace.index]

        Tarpaulin.drawPath([
            [projectedVerticies[face[0]].x, projectedVerticies[face[0]].y],
            [projectedVerticies[face[1]].x, projectedVerticies[face[1]].y],
            [projectedVerticies[face[2]].x, projectedVerticies[face[2]].y],
            [projectedVerticies[face[3]].x, projectedVerticies[face[3]].y],
        ], { fill: colors[sortedFace.index] })
    })

    angle += 1
})
