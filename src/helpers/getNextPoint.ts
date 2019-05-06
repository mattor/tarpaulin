export default ([x, y]: number[], angle: number, distance = 1) => ([
    x + distance * Math.cos(angle),
    y + distance * Math.sin(angle),
]);
