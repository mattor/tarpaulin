let _width, _height, _xMin, _xMax, _yMin, _yMax
let _canvas, _context
// Cache helper constants
let _xDiff, _yDiff, _xFactor, _yFactor, _scale, _xShift, _yShift

export const create = ({
    size = 1200,
    xMin = -1,
    xMax = 1,
    yMin = -1,
    yMax = 1,
} = {}) => {
    if (_context) {
        throw new Error("Only one canvas per page")
    }

    _xDiff = xMax - xMin
    _yDiff = yMax - yMin
    let width = size, height = size
    if (_xDiff > _yDiff) {
        height = Math.floor(_yDiff / _xDiff * size)
    } else {
        width = Math.floor(_xDiff / _yDiff * size)
    }

    [_width, _height, _xMin, _xMax, _yMin, _yMax] = [width, height, xMin, xMax, yMin, yMax]

    _xFactor = _xDiff / _width
    _yFactor = _yDiff / _height
    _scale = translateScale()
    _xShift = _width / 2
    _yShift = _height / 2

    _canvas = document.createElement("canvas")
    _canvas.width = _width
    _canvas.height = _height
    _canvas.style = `width: ${_width / 2}px; height: ${_height / 2}px;`
    document.body.appendChild(_canvas)

    _context = _canvas.getContext("2d")

    // Clear canvas
    drawRect([0, 0], _canvas.width, _canvas.height, { fillStyle: "#FFF" })

    // Return generated
    return {
        context: _context,
        pixelWidth: _width,
        pixelHeight: _height,
    }
}

export const drawRect = ([x, y], width, height, props) => {
    initContext(props)

    _context.fillRect(x, y, width, height)
}

export const drawCircle = ([x, y], radius, props) => {
    initContext(props)

    _context.beginPath()
    _context.arc(
        translateX(x),
        translateY(y),
        translateScale(radius),
        0,
        Math.PI * 2,
    )
    _context.stroke()
}

export const drawLine = ([x1, y1], [x2, y2], props = {}) => {
    initContext(props)

    _context.beginPath()
    _context.moveTo(translateX(x1), translateY(y1))
    _context.lineTo(translateX(x2), translateY(y2))
    _context.stroke()
}

export const drawPath = (points, props) => {
    initContext(props)

    _context.beginPath()
    points.forEach(([x, y]) => {
        _context.lineTo(translateX(x), translateY(y))
    })
    _context.stroke()
}

export const drawPixel = ([x, y], props = {}) => {
    initContext(props)
    _context.fillRect(x, y, 1, 1)
}

export const drawAxes = props => {
    drawLine([_xMin, 0], [_xMax, 0], props)
    drawLine([0, _yMin], [0, _yMax], props)
}

const initContext = props => {
    if (!_context) {
        throw new Error("You have to create() the canvas first")
    }
    for (const prop in props) {
        _context[prop] = props[prop]
    }
}

export const getCoords = ([x, y]) => [x * _xFactor + _xMin, -(y * _yFactor) - _yMin]
const translateScale = (l = 1) => l * _width / _xDiff
const translateX = x => (x * _scale) + _xShift
const translateY = y => (-y * _scale) + _yShift
