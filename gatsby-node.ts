import * as path from "path"

export const onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@/widgets": path.resolve(__dirname, "src/widgets"),
                "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
                "@": path.resolve(__dirname, "src"),
            },
        },
    })
}