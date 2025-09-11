import * as Color from "../const/Color"
import { globalState } from "../utils/globalState"

export interface SvgProps {
    [key: string]: any
}

export function addSvgElement(tag: string, props = {} as unknown as SvgProps) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", tag)

    for (const prop in props) {
        if (Object.prototype.hasOwnProperty.call(props, prop)) {
            let value: any = props[prop]
            if (prop === "fill" && !value) {
                value = "none"
            }
            if (prop === "stroke" && !value) {
                continue
            }
            el.setAttributeNS(null, prop, value)
        }
    }

    if (!props.fill) {
        el.setAttributeNS(null, "stroke", props.stroke || Color.Black)
    }

    if (props.children && typeof props.children === "string") {
        el.appendChild(new Text(props.children))
    }

    if (globalState.svgTarp) {
        globalState.svgTarp.appendChild(el)
    }
}
