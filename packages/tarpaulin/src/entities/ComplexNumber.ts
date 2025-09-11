import { convertRadToDeg } from "../math/convertRadToDeg"

export class ComplexNumber {
    public re: number
    public im: number

    /**
     * z = re + im * i
     * z = radius * e^(i * phase)
     */
    constructor({ re = 0, im = 0 } = {}) {
        this.re = re
        this.im = im
    }

    public add(addend: ComplexNumber | number) {
        // Make sure we're dealing with complex number
        const complexAddend = this.toComplexNumber(addend)

        return new ComplexNumber({
            im: this.im + complexAddend.im,
            re: this.re + complexAddend.re,
        })
    }

    public subtract(subtrahend: ComplexNumber | number) {
        // Make sure we're dealing with complex number
        const complexSubtrahend = this.toComplexNumber(subtrahend)

        return new ComplexNumber({
            im: this.im - complexSubtrahend.im,
            re: this.re - complexSubtrahend.re,
        })
    }

    public multiply(multiplicand: ComplexNumber | number) {
        // Make sure we're dealing with complex number
        const complexMultiplicand = this.toComplexNumber(multiplicand)

        return new ComplexNumber({
            im: this.re * complexMultiplicand.im + this.im * complexMultiplicand.re,
            re: this.re * complexMultiplicand.re - this.im * complexMultiplicand.im,
        })
    }

    public divide(divider: ComplexNumber | number) {
        // Make sure we're dealing with complex number
        const complexDivider = this.toComplexNumber(divider)

        // Get divider conjugate
        const dividerConjugate = this.conjugate(complexDivider)

        // Multiply dividend by divider's conjugate
        const finalDivident = this.multiply(dividerConjugate)

        // Calculating final divider using formula (a + bi)(a − bi) = a^2 + b^2
        const finalDivider = (complexDivider.re ** 2) + (complexDivider.im ** 2)

        return new ComplexNumber({
            im: finalDivident.im / finalDivider,
            re: finalDivident.re / finalDivider,
        })
    }

    public conjugate(n: ComplexNumber | number) {
        // Make sure we're dealing with complex number
        const complexNumber = this.toComplexNumber(n)

        return new ComplexNumber({
            im: -1 * complexNumber.im,
            re: complexNumber.re,
        })
    }

    public abs() {
        return Math.sqrt((this.re ** 2) + (this.im ** 2))
    }

    public getPhase(inRadians = true) {
        let phase = Math.atan(Math.abs(this.im) / Math.abs(this.re))

        if (this.re < 0 && this.im > 0) {
            phase = Math.PI - phase
        }
        else if (this.re < 0 && this.im < 0) {
            phase = -(Math.PI - phase)
        }
        else if (this.re > 0 && this.im < 0) {
            phase = -phase
        }
        else if (this.re === 0 && this.im > 0) {
            phase = Math.PI / 2
        }
        else if (this.re === 0 && this.im < 0) {
            phase = -Math.PI / 2
        }
        else if (this.re < 0 && this.im === 0) {
            phase = Math.PI
        }
        else if (this.re > 0 && this.im === 0) {
            phase = 0
        }
        else if (this.re === 0 && this.im === 0) {
            // More correctly would be to set 'indeterminate'.
            // But just for simplicity reasons let's set zero.
            phase = 0
        }

        if (!inRadians) {
            phase = convertRadToDeg(phase)
        }

        return phase
    }

    public getPolarForm(inRadians = true) {
        return {
            phase: this.getPhase(inRadians),
            radius: this.abs(),
        }
    }

    /**
     * Convert real numbers to complex number.
     * In case if complex number is provided then lefts it as is.
     */
    private toComplexNumber(n: ComplexNumber | number) {
        if (n instanceof ComplexNumber) {
            return n
        }

        return new ComplexNumber({ re: n })
    }
}
