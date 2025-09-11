# Tarpaulin [![NPM version](https://img.shields.io/npm/v/tarpaulin.svg?style=flat)](https://www.npmjs.com/package/tarpaulin) [![NPM total downloads](https://img.shields.io/npm/dt/tarpaulin.svg?style=flat)](https://npmjs.org/package/tarpaulin)

> A minimal, opinionated toolset for mathematical drawing on canvas or svg

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save tarpaulin
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add tarpaulin
```

Install with [pnpm](https://pnpm.io):

```sh
$ pnpm add tarpaulin
```

## Usage

```js
import * as T from "tarpaulin"

// Set appearance
const size = 600
const xMin = -50
const xMax = 50
const yMin = -50
const yMax = 50

// Create a canvas tarp
T.createCanvas({ size, xMin, xMax, yMin, yMax })

// Or create an SVG tarp
// T.createSvg({ size, xMin, xMax, yMin, yMax })

// START DRAWING

T.drawGrid()
T.drawAxes()

// Draw filled & stroked shapes
T.drawCircle([-25, 25], 15, { fill: T.Color.Red, stroke: T.Color.Black })
T.drawRect([10, 40], 30, 30, { fill: T.Color.Blue, stroke: T.Color.Black })
T.drawPath([[-25, -10], [-42.32, -40], [-7.68, -40]], { fill: T.Color.Yellow, stroke: T.Color.Black })

// Draw filled-only/stroked-only shapes
T.drawCircle([15, -15], 5, { fill: T.Color.Green })
T.drawRect([30, -10], 10, 10)
T.drawPath([[15, -30], [9.226, -40], [20.773, -40]], { stroke: T.Color.Black, closed: true })
T.drawPath([[30, -30], [40, -30], [35, -30], [35, -40]], { stroke: T.Color.Black, strokeWidth: 5 })
```

See more usage examples in [examples](apps/examples/)
