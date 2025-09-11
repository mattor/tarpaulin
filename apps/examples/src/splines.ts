import GUI from "lil-gui"
import * as T from "tarpaulin"

// Set appearance
const size = 800
const xMin = 0
const xMax = size
const yMin = 0
const yMax = size

// Create tarp
const { tarpElement } = T.createCanvas({ size, xMin, xMax, yMin, yMax })

// Constants
const clickRadius: number = 10
const labels = ["A", "B", "C", "D"]
const points: T.Point2D[] = [
    [size * 0.10, size * 0.90],
    [size * 0.10, size * 0.10],
    [size * 0.90, size * 0.10],
    [size * 0.90, size * 0.90],
]

// State
let activePointIndex: number | null = null
const options = {
    numLines: 32,
}

const gui = new GUI()
gui.add(options, "numLines", 2, 128, 1)
    .onChange(paint)

function paint(): void {
    // Clear canvas
    T.clear()

    T.drawBezier(points, { stroke: T.Color.Black })

    // 1st generation
    const aPoints: T.Point2D[][] = [[], []]
    for (let startPointIndex = 0; startPointIndex < points.length - 2; startPointIndex++) {
        const myPoints = [points[startPointIndex], points[startPointIndex + 1], points[startPointIndex + 2]]
        for (let i = 1; i < options.numLines; i++) {
            const t = i / options.numLines
            const p1 = T.lerpPoints2D(myPoints[0], myPoints[1], t)
            const p2 = T.lerpPoints2D(myPoints[1], myPoints[2], t)
            T.drawLine(p1, p2, { stroke: `${T.Color.OrangeAccent4}80` })
            const p = T.lerpPoints2D(p1, p2, t)
            aPoints[startPointIndex].push(p)
            T.drawCircle(p, 3, { fill: T.Color.OrangeAccent4 })
        }
    }

    // 2nd generation
    for (let i = 0; i < aPoints[0].length; i++) {
        const p1 = aPoints[0][i]
        const p2 = aPoints[1][i]
        T.drawLine(p1, p2, { stroke: `${T.Color.GreenAccent4}80` })
        const t = (i + 1) / (aPoints[0].length + 1)
        const p = T.lerpPoints2D(p1, p2, t)
        T.drawCircle(p, 3, { fill: T.Color.GreenAccent4 })
    }

    // 0th generation
    for (let i = 0; i < points.length; i++) {
        const p = points[i]
        if (i > 0) {
            T.drawLine(points[i - 1], points[i], { stroke: `${T.Color.GreyDarken4}80` })
        }
        T.drawCircle(p, 3, { fill: T.Color.GreyDarken4 })
        T.drawText([p[0] + 10, p[1] - 20], `${labels[points.indexOf(p)]} (${Math.round(p[0])}, ${Math.round(p[1])})`, { fill: T.Color.GreyDarken4 })
    }
}

paint()

function getActivePointIndex([mouseX, mouseY]: T.Point2D): number | null {
    for (let i = 0; i < points.length; i++) {
        if (Math.abs(points[i][0] - mouseX) < clickRadius && Math.abs(points[i][1] - mouseY) < clickRadius) {
            return i
        }
    }
    return null
}

// Detect clicking a point on the canvas
T.onMouseEvent("mousedown", (coords) => {
    const activePoint = getActivePointIndex(coords)
    if (activePoint !== null) {
        activePointIndex = activePoint
    }
})

// Detect hovering/dragging a point on the canvas
T.onMouseEvent("mousemove", (coords) => {
    if (activePointIndex !== null) {
        points[activePointIndex] = coords
        paint()
    }
    else {
        const activePoint = getActivePointIndex(coords)
        if (activePoint !== null) {
            tarpElement.style.cursor = "pointer" // Change cursor to pointer when hovering over a point
        }
        else {
            tarpElement.style.cursor = "default" // Reset cursor when not hovering over a point
        }
    }
})

// Detect releasing a point on the canvas
T.onMouseEvent("mouseup", () => {
    activePointIndex = null
})

export function deactivate() {
    T.destroy()
    gui.destroy()
}
