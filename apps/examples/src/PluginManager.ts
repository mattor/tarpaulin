interface Plugin {
    name: string
    version: string
    activate: () => void
    deactivate: () => void
}

class PluginManager {
    private plugins = new Map<string, Plugin>()
    private activePlugins = new Set<string>()

    async loadPlugin(packageName: string): Promise<void> {
        try {
            // Dynamic import for workspace packages
            const pluginModule = await import(packageName)
            const plugin: Plugin = pluginModule.default || pluginModule

            this.plugins.set(packageName, plugin)
            console.log(`Plugin loaded: ${packageName}`)
        }
        catch (error) {
            console.error(`Failed to load plugin ${packageName}:`, error)
        }
    }

    activatePlugin(packageName: string): void {
        const plugin = this.plugins.get(packageName)
        console.log("activatePlugin", packageName, plugin, this.activePlugins)
        if (plugin && !this.activePlugins.has(packageName)) {
            // plugin.activate()
            this.activePlugins.add(packageName)
            console.log(`Plugin activated: ${packageName}`)
        }
    }

    deactivatePlugin(packageName: string): void {
        const plugin = this.plugins.get(packageName)
        console.log("deactivatePlugin", packageName, plugin, this.activePlugins)
        if (plugin && this.activePlugins.has(packageName)) {
            plugin.deactivate()
            this.activePlugins.delete(packageName)
            console.log(`Plugin deactivated: ${packageName}`)
        }
    }

    getActivePlugins(): string[] {
        return Array.from(this.activePlugins)
    }
}

export { type Plugin, PluginManager }
