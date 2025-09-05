import { animate, clear, Color, createCanvas, drawPath, Point3D } from "tarpaulin"

// Set appearance
const size = 300
const xMin = -1
const xMax = 1
const yMin = -1
const yMax = 1

// Create tarp
createCanvas({ size, xMin, xMax, yMin, yMax })

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

const hypercubeVertices = []
for (let i = 0; i < 16; i++) {
    const x = (i & 1) ? 1 : -1
    const y = (i & 2) ? 1 : -1
    const z = (i & 4) ? 1 : -1
    const w = (i & 8) ? 1 : -1
    hypercubeVertices.push(new Point3D(x, y, z, w))
}

console.log(hypercubeVertices)

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

animate(() => {
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

    clear({ fill: Color.Black })

    sortedFaces.forEach((sortedFace) => {
        const face = faces[sortedFace.index]

        drawPath([
            [projectedVerticies[face[0]].x, projectedVerticies[face[0]].y],
            [projectedVerticies[face[1]].x, projectedVerticies[face[1]].y],
            [projectedVerticies[face[2]].x, projectedVerticies[face[2]].y],
            [projectedVerticies[face[3]].x, projectedVerticies[face[3]].y],
        ], { fill: colors[sortedFace.index] })
    })

    angle += 1
})
