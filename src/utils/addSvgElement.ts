import { Color } from "../const";
import { glob } from "../utils";

export interface ISvgProps {
    [key: string]: any;
}

export default (tag: string, props = {} as any as ISvgProps) => {
    const el = document.createElementNS("http://www.w3.org/2000/svg", tag);

    for (const prop in props) {
        if (props.hasOwnProperty(prop)) {
            let value: any = props[prop];
            if (prop === "fill" && !value) { value = "none"; }
            if (prop === "stroke" && !value) { continue; }
            el.setAttributeNS(null, prop, value);
        }
    }

    if (!props.fill) {
        el.setAttributeNS(null, "stroke", props.stroke || Color.Black);
    }

    if (glob.svgPaper) {
        glob.svgPaper.appendChild(el);
    }
};
