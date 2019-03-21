export default ([x, y], angle, distance = 1) => ([
    x + distance * Math.cos(angle),
    y + distance * Math.sin(angle),
])
