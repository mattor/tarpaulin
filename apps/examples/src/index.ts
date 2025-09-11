/* eslint-disable no-console */

interface Example {
    name: string
    deactivate: () => void
}

const activeExamples = new Set<Example>()

async function loadExample(exampleName: string): Promise<void> {
    try {
        // Deactivate all active examples
        Array.from(activeExamples).forEach((activeExample) => {
            activeExample.deactivate()
            activeExamples.delete(activeExample)
            console.log(`Example deactivated: ${activeExample.name}`)
        })

        // Dynamic import for workspace packages
        const exampleModule = await import(`./${exampleName}.ts`)
        const example: Example = {
            name: exampleName,
            ...(exampleModule.default || exampleModule),
        }

        activeExamples.add(example)

        document.title = `${exampleName} - Tarpaulin`

        console.log(`Example loaded: ${exampleName}`)
    }
    catch (error) {
        console.error(`Failed to load example ${exampleName}:`, error)
    }
}

function getExampleNameFromHash() {
    const { hash } = window.location
    const exampleName = hash.split("#").pop()
    if (!exampleName || exampleName === "index")
        return
    return exampleName
}

loadExample(getExampleNameFromHash() || "cube")

// Listen to path change and activate the appropriate example
window.addEventListener("hashchange", async () => {
    const exampleName = getExampleNameFromHash()
    if (!exampleName)
        return
    loadExample(exampleName)
})
