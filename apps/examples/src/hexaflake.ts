import * as T from "tarpaulin"

// Set appearance
const size = 600
const xMin = -300
const xMax = 300
const yMin = -300
const yMax = 300

// Create tarp
T.createCanvas({ size, xMin, xMax, yMin, yMax })

// Start drawing

function drawFlake([x, y]: [number, number], r: number) {
    if (r < 5) {
        // Draw
        const pathList: [number, number][] = []
        for (let i = 0; i < 6; i++) {
            const angle = T.Const.RADIANS_30_DEGREES + T.Const.RADIANS_60_DEGREES * i
            pathList.push(T.getNextPoint([x, y], angle, r))
        }
        T.drawPath(pathList, { fill: T.Color.Cyan })
    }
    else {
        // Recurse
        drawFlake([x, y], r / 3)
        for (let i = 0; i < 6; i++) {
            const angle = T.Const.RADIANS_30_DEGREES + T.Const.RADIANS_60_DEGREES * i
            drawFlake(T.getNextPoint([x, y], angle, r * 2 / 3), r / 3)
        }
    }
}

drawFlake([0, 0], 300)

export function deactivate() {
    T.destroy()
}
