import Tarpaulin, { Color, Const, getMinMax, ComplexNumber } from "tarpaulin"
import peaceHandData from "../data/peace-hand.json"
//import titleData from "../data/title.json"

function discreteFourierTransform(x) {
    const X = []
    const N = x.length

    for (let k = 0; k < N; k++) {
        let sum = new ComplexNumber()

        for (let n = 0; n < N; n++) {
            const phi = (Const.RADIANS_360_DEGREES * k * n) / N
            const c = new ComplexNumber({ re: Math.cos(phi), im: -Math.sin(phi) })
            sum = sum.add(x[n].multiply(c))
        }

        sum.re = sum.re / N
        sum.im = sum.im / N

        const freq = k
        const amp = Math.sqrt(sum.re * sum.re + sum.im * sum.im)
        const phase = Math.atan2(sum.im, sum.re)

        X[k] = { re: sum.re, im: sum.im, freq, amp, phase }
    }

    return X
}

const transformData = data => {
    // Set appearance
    const { xMin, xMax, yMin, yMax } = getMinMax(data)

    /*
    // Transform data around origo
    const transformedPathList = data.map(i => [
        i[0] - xMin - ((xMax - xMin) / 2),
        i[1] - yMin - ((yMax - yMin) / 2),
    ])
    console.log(JSON.stringify(transformedPathList))
    //*/

    const canvasPadding = (xMax - xMin) / 3

    // Create tarp
    Tarpaulin.createCanvas({
        size: 800,
        xMin: xMin - canvasPadding,
        xMax: xMax + canvasPadding,
        yMin: yMin - canvasPadding,
        yMax: yMax + canvasPadding,
    })

    // Generate fourierX
    const x = data.map(i => new ComplexNumber({ re: i[0], im: -i[1] }))
    const fourierX = discreteFourierTransform(x)
    fourierX.sort((a, b) => b.amp - a.amp)

    return fourierX
}

function drawEpicyclesAndGetPoint(x, y, rotation, fourier, time) {
    for (let i = 0; i < fourier.length; i++) {
        const prevx = x
        const prevy = y
        const freq = fourier[i].freq
        const radius = fourier[i].amp
        const phase = fourier[i].phase
        x += radius * Math.cos(freq * time + phase + rotation)
        y += radius * Math.sin(freq * time + phase + rotation)

        Tarpaulin.drawCircle([prevx, prevy], radius, { stroke: `rgba(33, 150, 243, 0.5)` })
        Tarpaulin.drawLine([prevx, prevy], [x, y], { stroke: Color.Blue })
    }

    return [x, y]
}

const fourierX = transformData(peaceHandData)
let pathList = []
let time = 0

// Start drawing

Tarpaulin.animate(() => {
    Tarpaulin.clear({ fill: Color.Black })

    pathList.push(drawEpicyclesAndGetPoint(0, 0, 0, fourierX, time))

    Tarpaulin.drawPath(pathList, { stroke: Color.GreyLighten2 })

    time += Const.RADIANS_360_DEGREES / fourierX.length

    if (time > Const.RADIANS_360_DEGREES) {
        time = 0
        pathList = []
    }
}, 30)
