import type { Point2D } from "../types/Point2D"
import { getMouseX } from "../math/getMouseX"
import { getMouseY } from "../math/getMouseY"
import { globalState } from "./globalState"

export type MouseEventType = "mousemove" | "mousedown" | "mouseup" | "mouseenter" | "mouseleave" | "click"

export function onMouseEvent(eventType: MouseEventType, enhancedCallback: (coordinates: Point2D, event: MouseEvent) => void) {
    const callback = (e: Event) => {
        const mouseEvent = e as MouseEvent
        const mouseX = getMouseX(mouseEvent.offsetX)
        const mouseY = getMouseY(mouseEvent.offsetY)
        enhancedCallback([mouseX, mouseY], mouseEvent)
    }

    globalState.eventListeners.push({ eventType, callback })

    globalState.tarp?.addEventListener(eventType, callback)
}
