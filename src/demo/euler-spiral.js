// Set appearance settings
const size = 1000

// Create Canvas
const myCanvas = document.createElement("canvas")
myCanvas.width = size * 2
myCanvas.height = size * 2
myCanvas.style = `width: ${size}px; height: ${size}px;`
document.body.appendChild(myCanvas)
const ctx = myCanvas.getContext("2d")

function drawEulerSpiral(T, N, scale) {
    let dx, dy, t = 0, prev = { x: 0, y: 0 }, current
    const dt = T / N
    ctx.beginPath()
    while (N--) {
        dx = Math.cos(t * t) * dt
        dy = Math.sin(t * t) * dt
        t += dt
        current = {
            x: prev.x + dx,
            y: prev.y + dy,
        }
        ctx.lineTo(current.x * scale, current.y * scale)
        prev = current
    }
    ctx.stroke()
}

drawEulerSpiral(10, 10000, size)
