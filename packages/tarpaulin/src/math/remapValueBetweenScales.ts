export function remapValueBetweenScales(value: number, min: number, max: number, newMin: number, newMax: number) {
    return (value - min) / (max - min) * (newMax - newMin) + newMin
}
