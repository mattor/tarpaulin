import fs from "node:fs"
import { resolve } from "node:path"
import { defineConfig } from "vite"

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    const example = process.env.example || "hilbert"
    const examplePath = `./src/${example}.js`

    if (!fs.existsSync(examplePath)) {
        throw new Error(`No example called "${process.env.example}"`)
    }

    console.log(`Building example: ${example}`)

    return {
        resolve: {
            alias: {
                tarpaulin: resolve(__dirname, "../src/index.js"),
                example: resolve(__dirname, examplePath),
            },
        },
    }
})
