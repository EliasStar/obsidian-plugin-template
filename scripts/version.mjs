import { readFileSync, writeFileSync } from "fs"

let manifest = JSON.parse(readFileSync("manifest.json", "utf8"))
let versions = JSON.parse(readFileSync("versions.json", "utf8"))

const targetVersion = process.env.npm_package_version
manifest.version = targetVersion
versions[targetVersion] = manifest.minAppVersion

writeFileSync("manifest.json", JSON.stringify(manifest, null, 4) + "\n")
writeFileSync("versions.json", JSON.stringify(versions, null, 4) + "\n")
