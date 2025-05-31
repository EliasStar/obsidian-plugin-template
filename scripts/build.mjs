import fs from "fs"
import esbuild from "esbuild"
import process from "process"
import builtins from "builtin-modules"

const watch = (process.argv[2] === "watch")

const context = await esbuild.context({
    entryPoints: [
        "src/main.ts",
        "src/styles.css",
    ],
    outdir: "build",
    bundle: true,
    minify: !watch,
    sourcemap: watch ? "inline" : false,
    treeShaking: true,
    format: "cjs",
    target: "es2018",
    logLevel: "info",
    external: [
        "obsidian",
        "electron",
        "@codemirror/autocomplete",
        "@codemirror/collab",
        "@codemirror/commands",
        "@codemirror/language",
        "@codemirror/lint",
        "@codemirror/search",
        "@codemirror/state",
        "@codemirror/view",
        "@lezer/common",
        "@lezer/highlight",
        "@lezer/lr",
        ...builtins,
    ],
})

fs.rmSync("build", { recursive: true, force: true })
fs.mkdirSync("build")
fs.copyFileSync("manifest.json", "build/manifest.json")

if (watch) {
    await context.watch()
} else {
    await context.rebuild()
    process.exit(0)
}
