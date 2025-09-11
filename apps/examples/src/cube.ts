import * as T from "tarpaulin"

// Set appearance
const size = 300
const xMin = -1
const xMax = 1
const yMin = -1
const yMax = 1

// Create tarp
T.createCanvas({ size, xMin, xMax, yMin, yMax })

const vertices = [
    new T.Point3D(-1, 1, -1),
    new T.Point3D(1, 1, -1),
    new T.Point3D(1, -1, -1),
    new T.Point3D(-1, -1, -1),
    new T.Point3D(-1, 1, 1),
    new T.Point3D(1, 1, 1),
    new T.Point3D(1, -1, 1),
    new T.Point3D(-1, -1, 1),
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
    T.Color.Red,
    T.Color.Green,
    T.Color.Blue,
    T.Color.Yellow,
    T.Color.Cyan,
    T.Color.Purple,
]

let angle = 0

T.animate(() => {
    const projectedVertices = vertices.map((vertex) => {
        const rotatedVertex = vertex
            .rotateX(angle)
            .rotateY(angle)
        return rotatedVertex.project(5, 10)
    })

    const sortedFaces = faces
        .map((face, index) => ({
            index,
            z: (
                projectedVertices[face[0]].z
                + projectedVertices[face[1]].z
                + projectedVertices[face[2]].z
                + projectedVertices[face[3]].z
            ) / face.length,
        }))
        .sort((a, b) => b.z - a.z)

    // Draw

    T.clear({ fill: T.Color.Black })

    sortedFaces.forEach((sortedFace) => {
        const face = faces[sortedFace.index]

        T.drawPath([
            [projectedVertices[face[0]].x, projectedVertices[face[0]].y],
            [projectedVertices[face[1]].x, projectedVertices[face[1]].y],
            [projectedVertices[face[2]].x, projectedVertices[face[2]].y],
            [projectedVertices[face[3]].x, projectedVertices[face[3]].y],
        ], { fill: colors[sortedFace.index] })
    })

    angle += 1
})

export function deactivate() {
    T.destroy()
}
