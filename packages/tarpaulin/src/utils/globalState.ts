import type { Animation } from "./animate"
import type { EventName } from "./onMouseEvent"

export interface CanvasTarp {
    [index: string]: number
}

interface GlobalState {
    animations: Animation[]
    eventListeners: { eventName: EventName, callback: (event: Event) => void }[]
    canvasTarp?: CanvasRenderingContext2D
    tarpHeight: number
    tarpScale: number
    tarpShiftX: number
    tarpShiftY: number
    tarpWidth: number
    pixelRatio: number
    size: number
    svgTarp?: SVGElement
    tarp?: HTMLCanvasElement | SVGElement
    tarpFactorX: number
    tarpFactorY: number
    xDiff: number
    xMax: number
    xMin: number
    yDiff: number
    yMax: number
    yMin: number
}

export const globalState: GlobalState = {
    animations: [],
    eventListeners: [],
    tarpHeight: 0,
    tarpScale: 0,
    tarpShiftX: 0,
    tarpShiftY: 0,
    tarpWidth: 0,
    pixelRatio: 0,
    size: 0,
    tarpFactorX: 0,
    tarpFactorY: 0,
    xDiff: 0,
    xMax: 0,
    xMin: 0,
    yDiff: 0,
    yMax: 0,
    yMin: 0,
}
