import { globalState } from "./globalState"

export interface Animation {
    resume: () => void
    stop: () => void
}

export function animate(drawFn: () => void, fps = 60) {
    let last = Date.now()
    let rafid = -1
    const interval = 1000 / fps

    const tick = () => {
        rafid = requestAnimationFrame(tick)
        const now = Date.now()
        const elapsed = now - last
        if (elapsed > interval) {
            last = now
            drawFn()
        }
    }

    tick()

    const response: Animation = {
        resume: () => {
            if (rafid === -1) {
                tick()
            }
        },
        stop: () => {
            cancelAnimationFrame(rafid)
            rafid = -1
        },
    }

    globalState.animations.push(response)

    return response
}
