import * as T from "tarpaulin"

// Set appearance
const size = 600
const xMin = -1.01
const xMax = 1.01
const yMin = -1.01
const yMax = 1.01

// Create tarp
T.createSvg({ size, xMin, xMax, yMin, yMax })

// Start drawing

T.drawCircle([0, 0], 1, { fill: T.Color.Black, stroke: T.Color.GreyLighten2 })

function drawLeafs(sections: number) {
    const angleStep = T.Const.RADIANS_360_DEGREES / sections
    const colorStep = 255 / sections * 2

    const start = 16 * angleStep
    const end = 20 * angleStep

    for (let i = 0; i < sections; i++) {
        const pathList = [
            T.getNextPoint([0, 0], start),
            T.getNextPoint([0, 0], i * angleStep),
            T.getNextPoint([0, 0], end),
        ]
        T.drawPath(pathList, { fill: `hsla(${i * colorStep}, 100%, 50%, 0.1)` })
    }
}

drawLeafs(24)

export function deactivate() {
    T.destroy()
}
