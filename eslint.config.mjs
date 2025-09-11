import antfu from "@antfu/eslint-config"

export default antfu(
    {
        formatters: true,
        stylistic: {
            indent: 4,
            quotes: "double",
        },
        rules: {
            "yaml/indent": ["error", 2],
        },
    },
)
