import { convertDegToRad } from "../helpers"

export class Point3D {
    public x = 0
    public y = 0
    public z = 0

    public constructor(x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z
    }

    public project(fov: number, viewDistance: number) {
        const factor = fov / (viewDistance + this.z)
        const x = this.x * factor
        const y = this.y * factor

        return new Point3D(x, y, this.z)
    }

    public rotateX(angleDeg: number) {
        const rad = convertDegToRad(angleDeg)
        const cosa = Math.cos(rad)
        const sina = Math.sin(rad)
        const y = this.y * cosa - this.z * sina
        const z = this.y * sina + this.z * cosa

        return new Point3D(this.x, y, z)
    }

    public rotateY(angleDeg: number) {
        const rad = convertDegToRad(angleDeg)
        const cosa = Math.cos(rad)
        const sina = Math.sin(rad)
        const z = this.z * cosa - this.x * sina
        const x = this.z * sina + this.x * cosa

        return new Point3D(x, this.y, z)
    }

    public rotateZ(angleDeg: number) {
        const rad = convertDegToRad(angleDeg)
        const cosa = Math.cos(rad)
        const sina = Math.sin(rad)
        const x = this.x * cosa - this.y * sina
        const y = this.x * sina + this.y * cosa

        return new Point3D(x, y, this.z)
    }
}
