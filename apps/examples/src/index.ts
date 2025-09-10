import { PluginManager } from "./PluginManager"

const pluginManager = new PluginManager()

function getPluginPathFromHash() {
    const { hash } = window.location
    const plugin = hash.split("#").pop()
    if (!plugin)
        return
    return `./${plugin}.ts`
}

let currentPluginPath: string | undefined = getPluginPathFromHash() || "./cube.ts"

async function loadAndActivatePlugin(path: string) {
    await pluginManager.loadPlugin(path)
    pluginManager.activatePlugin(path)
}

loadAndActivatePlugin(currentPluginPath)

// pluginManager.deactivatePlugin("axesPlugin")

// Listen to path change and activate the appropriate plugin
window.addEventListener("hashchange", async () => {
    if (currentPluginPath) {
        pluginManager.deactivatePlugin(currentPluginPath)
    }
    currentPluginPath = getPluginPathFromHash()
    if (!currentPluginPath)
        return
    loadAndActivatePlugin(currentPluginPath)
})
