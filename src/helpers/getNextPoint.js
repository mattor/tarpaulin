export default ([x, y], distance, angle) => ([
    x + distance * Math.cos(angle),
    y + distance * Math.sin(angle),
])
