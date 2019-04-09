# Tarpaulin [![NPM version](https://img.shields.io/npm/v/tarpaulin.svg?style=flat)](https://www.npmjs.com/package/tarpaulin) [![NPM total downloads](https://img.shields.io/npm/dt/tarpaulin.svg?style=flat)](https://npmjs.org/package/tarpaulin)

> A minimal toolset aimed at mathematical drawing on canvas or svg

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save tarpaulin
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add tarpaulin
```

## Usage

```js
import Tarpaulin, { Color } from "tarpaulin"

// Set appearance
const size = 600
const xMin = -50
const xMax = 50
const yMin = -50
const yMax = 50

// Create a canvas tarp
Tarpaulin.createCanvas({ size, xMin, xMax, yMin, yMax })

// Or create an SVG tarp
//Tarpaulin.createSvg({ size, xMin, xMax, yMin, yMax })

// START DRAWING

Tarpaulin.drawGrid()
Tarpaulin.drawAxes()

// Draw filled & stroked shapes
Tarpaulin.drawCircle([-25, 25], 15, { fill: Color.Red, stroke: Color.Black })
Tarpaulin.drawRect([10, 40], 30, 30, { fill: Color.Blue, stroke: Color.Black })
Tarpaulin.drawPath([[-25, -10], [-42.32, -40], [-7.68, -40]], { fill: Color.Yellow, stroke: Color.Black })

// Draw filled-only/stroked-only shapes
Tarpaulin.drawCircle([15, -15], 5, { fill: Color.Green })
Tarpaulin.drawRect([30, -10], 10, 10)
Tarpaulin.drawPath([[15, -30], [9.226, -40], [20.773, -40]], { stroke: Color.Black, closed: true })
Tarpaulin.drawPath([[30, -30], [40, -30], [35, -30], [35, -40]], { stroke: Color.Black, strokeWidth: 5 })
```

See more usage examples in [examples](examples/)
