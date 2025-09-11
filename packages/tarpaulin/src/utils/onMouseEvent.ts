import type { Point2D } from "../types/Point2D"
import { getMouseX } from "../math/getMouseX"
import { getMouseY } from "../math/getMouseY"
import { globalState } from "./globalState"

export type EventName = "mousemove" | "mousedown" | "mouseup"

export function onMouseEvent(eventName: EventName, callback: (coordinates: Point2D, event: MouseEvent) => void) {
    const enhancedCallback = (e: Event) => {
        const mouseEvent = e as MouseEvent
        const mouseX = getMouseX(mouseEvent.offsetX)
        const mouseY = getMouseY(mouseEvent.offsetY)
        callback([mouseX, mouseY], mouseEvent)
    }

    globalState.eventListeners.push({ eventName, callback: enhancedCallback })

    globalState.tarp?.addEventListener(eventName, enhancedCallback)
}
