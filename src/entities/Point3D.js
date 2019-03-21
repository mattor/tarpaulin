import { convertDegToRad } from "../helpers"

export class Point3D {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }

    rotateX(angleDeg) {
        const rad = convertDegToRad(angleDeg)
        const cosa = Math.cos(rad)
        const sina = Math.sin(rad)
        const y = this.y * cosa - this.z * sina
        const z = this.y * sina + this.z * cosa
        return new Point3D(this.x, y, z)
    }

    rotateY(angleDeg) {
        const rad = convertDegToRad(angleDeg)
        const cosa = Math.cos(rad)
        const sina = Math.sin(rad)
        const z = this.z * cosa - this.x * sina
        const x = this.z * sina + this.x * cosa
        return new Point3D(x, this.y, z)
    }

    rotateZ(angleDeg) {
        const rad = convertDegToRad(angleDeg)
        const cosa = Math.cos(rad)
        const sina = Math.sin(rad)
        const x = this.x * cosa - this.y * sina
        const y = this.x * sina + this.y * cosa
        return new Point3D(x, y, this.z)
    }

    project(fov, viewDistance) {
        const factor = fov / (viewDistance + this.z)
        const x = this.x * factor
        const y = this.y * factor
        return new Point3D(x, y, this.z)
    }
}

export default Point3D
