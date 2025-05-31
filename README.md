# Obsidian Plugin Template

This is a plugin template for Obsidian (https://obsidian.md).

It uses TypeScript to provide type checking and documentation.
The repo depends on the latest plugin API (obsidian.d.ts) in TypeScript Definition format, which contains TSDoc comments describing what it does.

This repo also comes with a development vault with hot-reload support.
It loads the plugin from the build folder so you do not need to clone the repo in your vault to develop.

The sample code demonstrates some of the basic functionality the plugin API can do.
- Adds a ribbon icon, which shows a Notice when clicked.
- Adds a command "Open Sample Modal" which opens a Modal.
- Adds a plugin setting tab to the settings page.
- Registers a global click event and output 'click' to the console.
- Registers a global interval which logs 'setInterval' to the console.

## First time developing plugins?
Quick starting guide for new plugin devs:
- Check if [someone already developed a plugin for what you want](https://obsidian.md/plugins)! There might be an existing plugin similar enough that you can partner up with.
- Make a copy of this repo as a template with the "Use this template" button (login to GitHub if you don't see it).
- Clone your repo to a local development folder.
- Install NodeJS, then run `npm install` in the command line under your repo folder.
- Run `npm run watch` to compile your plugin every time you save a file.
- Make changes to `src/main.ts` (or create new `.ts` files).
- Open `vault` in Obsidian to see your plugin.
- For updates to the Obsidian API run `npm update` in the command line under your repo folder.

## Building
- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm install` to install dependencies.
- `npm run watch` to start compilation in watch mode.
- `npm run build` to build the plugin for production.

## Releasing
Run `npm version {major|minor|patch}` to bump the version.
This will make the neccessary changes to `manifest.json` and `versions.json`.
This will also create a git commit and tag.

## Adding your plugin to the community plugin list
- Check the [plugin guidelines](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines).
- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.

## Improve code quality with eslint (optional)
- [ESLint](https://eslint.org/) is a tool that analyzes your code to quickly find problems. You can run ESLint against your plugin to find common bugs and ways to improve your code.
- To use eslint with this project, make sure to install eslint from terminal:
  - `npm install -g eslint`
- To use eslint to analyze this project use this command:
  - `eslint main.ts`
  - eslint will then create a report with suggestions for code improvement by file and line number.
- If your source code is in a folder, such as `src`, you can use eslint with this command to analyze all files in that folder:
  - `eslint .\src\`

## Funding URL
You can include funding URLs where people who use your plugin can financially support it.

The simple way is to set the `fundingUrl` field to your link in your `manifest.json` file:
```json
{
    "fundingUrl": "https://buymeacoffee.com"
}
```

If you have multiple URLs, you can also do:
```json
{
    "fundingUrl": {
        "Buy Me a Coffee": "https://buymeacoffee.com",
        "GitHub Sponsor": "https://github.com/sponsors",
        "Patreon": "https://www.patreon.com/"
    }
}
```

## API Documentation
See https://github.com/obsidianmd/obsidian-api
