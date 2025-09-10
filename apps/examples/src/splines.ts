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
const points = [
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

    T.drawBezier(points, { stroke: "rgba(0, 0, 0, 1)" })

    // 1st generation
    const aPoints: number[][][] = [[], []]
    for (let startPointIndex = 0; startPointIndex < points.length - 2; startPointIndex++) {
        const myPoints = [points[startPointIndex], points[startPointIndex + 1], points[startPointIndex + 2]]
        for (let i = 1; i < options.numLines; i++) {
            const t = i / options.numLines
            const p1 = T.lerpPoints2D(myPoints[0], myPoints[1], t)
            const p2 = T.lerpPoints2D(myPoints[1], myPoints[2], t)
            T.drawLine(p1, p2, { stroke: "rgba(255, 111, 0, 0.5)" })
            const p = T.lerpPoints2D(p1, p2, t)
            aPoints[startPointIndex].push(p)
            T.drawCircle(p, 3, { fill: "rgba(255, 111, 0, 1)" })
        }
    }

    // 2nd generation
    for (let i = 0; i < aPoints[0].length; i++) {
        const p1 = aPoints[0][i]
        const p2 = aPoints[1][i]
        T.drawLine(p1, p2, { stroke: "rgba(35, 174, 35, 0.5)" })
        const t = (i + 1) / (aPoints[0].length + 1)
        const p = T.lerpPoints2D(p1, p2, t)
        T.drawCircle(p, 3, { fill: "rgba(35, 174, 35, 1)" })
    }

    // 0th generation
    for (let i = 0; i < points.length; i++) {
        const p = points[i]
        if (i > 0) {
            T.drawLine(points[i - 1], points[i], { stroke: "rgba(64, 64, 64, 0.5)" })
        }
        T.drawCircle(p, 3, { fill: "rgba(64, 64, 64, 1)" })
        T.drawText([p[0] + 10, p[1] - 20], `${labels[points.indexOf(p)]} (${Math.round(p[0])}, ${Math.round(p[1])})`, { fill: "rgba(64, 64, 64, 1)" })
    }
}

function getActivePointIndex(event: MouseEvent): number | null {
    const x = event.offsetX
    const y = size - event.offsetY

    for (let i = 0; i < points.length; i++) {
        if (Math.abs(points[i][0] - x) < clickRadius && Math.abs(points[i][1] - y) < clickRadius) {
            return i
        }
    }

    return null
}

// Initialize the application
function init(): void {
    // Detect clicking a point on the canvas
    tarpElement.addEventListener("mousedown", (event: MouseEvent) => {
        const activePoint = getActivePointIndex(event)
        if (activePoint !== null) {
            activePointIndex = activePoint
        }
    })

    // Detect hovering/dragging a point on the canvas
    tarpElement.addEventListener("mousemove", (event: MouseEvent) => {
        if (activePointIndex !== null) {
            const x = event.offsetX
            const y = size - event.offsetY
            points[activePointIndex][0] = x
            points[activePointIndex][1] = y
            paint()
        }
        else {
            const activePoint = getActivePointIndex(event)
            if (activePoint !== null) {
                tarpElement.style.cursor = "pointer" // Change cursor to pointer when hovering over a point
            }
            else {
                tarpElement.style.cursor = "default" // Reset cursor when not hovering over a point
            }
        }
    })

    // Detect releasing a point on the canvas
    tarpElement.addEventListener("mouseup", () => {
        activePointIndex = null
    })

    paint()
}

// Start the application when the page loads
document.addEventListener("DOMContentLoaded", init)
