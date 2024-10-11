// eslint-disable-next-line import/no-unresolved
import Tarpaulin, { Color, Const, getMinMax, ComplexNumber } from "tarpaulin"
import peaceHandData from "../data/peace-hand.json"
//import titleData from "../data/title.json"

const CLOSE_TO_ZERO_THRESHOLD = 1e-10;

function discreteFourierTransform(inputAmplitudes, zeroThreshold = CLOSE_TO_ZERO_THRESHOLD) {
    const N = inputAmplitudes.length;
    const signals = [];

    // Go through every discrete frequency.
    for (let frequency = 0; frequency < N; frequency += 1) {
        // Compound signal at current frequency that will ultimately
        // take part in forming input amplitudes.
        let frequencySignal = new ComplexNumber();

        // Go through every discrete point in time.
        for (let timer = 0; timer < N; timer += 1) {
            const currentAmplitude = inputAmplitudes[timer];

            //console.log(currentAmplitude)

            // Calculate rotation angle.
            const rotationAngle = -1 * (2 * Math.PI) * frequency * (timer / N);

            // Remember that e^ix = cos(x) + i * sin(x);
            const dataPointContribution = new ComplexNumber({
                re: Math.cos(rotationAngle),
                im: Math.sin(rotationAngle),
            }).multiply(currentAmplitude);

            // Add this data point's contribution.
            frequencySignal = frequencySignal.add(dataPointContribution);
        }

        // Close to zero? You're zero.
        if (Math.abs(frequencySignal.re) < zeroThreshold) {
            console.log("zero1")
            frequencySignal.re = 0;
        }

        if (Math.abs(frequencySignal.im) < zeroThreshold) {
            console.log("zero2")
            frequencySignal.im = 0;
        }

        // Average contribution at this frequency.
        // The 1/N factor is usually moved to the reverse transform (going from frequencies
        // back to time). This is allowed, though it would be nice to have 1/N in the forward
        // transform since it gives the actual sizes for the time spikes.
        frequencySignal = frequencySignal.divide(N);

        // Add current frequency signal to the list of compound signals.
        signals[frequency] = frequencySignal;
    }

    return signals;
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
    const signals = discreteFourierTransform(x)
    const fourierX = signals.map((signal, freq) => ({
        ...signal,
        freq,
        amp: Math.sqrt(signal.re * signal.re + signal.im * signal.im),
        phase: Math.atan2(signal.im, signal.re),

    }))

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

        Tarpaulin.drawCircle([prevx, prevy], radius, { stroke: "rgba(33, 150, 243, 0.5)" })
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

    time += Const.RADIANS_360_DEGREES / fourierX.length / 1

    if (time > Const.RADIANS_360_DEGREES) {
        time = 0
        pathList = []
    }
}, 30)
