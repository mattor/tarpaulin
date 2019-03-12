export default (drawFn, fps = 30) => {
    let last = Date.now()
    let rafid = false
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

    return {
        stop: () => {
            cancelAnimationFrame(rafid)
            rafid = false
        },
        resume: () => {
            if (rafid === false) {
                tick()
            }
        },
    }
}
