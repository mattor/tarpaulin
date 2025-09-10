import fs from "node:fs"
import { resolve } from "node:path"
import process from "node:process"
import { defineConfig } from "vite"

export default defineConfig(() => {
    const example = process.env.example || "mandelbrot"
    const examplePath = `./src/${example}.js`

    if (!fs.existsSync(examplePath)) {
        throw new Error(`No example called "${process.env.example}"`)
    }

    console.log(`Starting example: ${example}`)

    return {
        resolve: {
            alias: {
                example: resolve(__dirname, examplePath),
            },
        },
    }
})
