import * as T from "tarpaulin"

// Set appearance
const size = 600
const xMin = -25
const xMax = 25
const yMin = -25
const yMax = 25

// Create tarp
T.createSvg({ size, xMin, xMax, yMin, yMax })

// Start drawing

T.drawGrid()
T.drawAxes()

// Debug: Log transformed mouse position to console
T.onMouseEvent("mousemove", ([mouseX, mouseY]) => {
    // eslint-disable-next-line no-console
    console.log({ mouseX, mouseY })
})

export function deactivate() {
    T.destroy()
}
