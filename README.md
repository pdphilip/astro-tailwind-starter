# Astro starter with Tailwind

(And React if you like)

## Getting started

```bash
git clone https://github.com/pdphilip/astro-tailwind-starter.git MY_PROJECT
cd MY_PROJECT
rm -rf .git
npm install
npm run dev

```

## Project Structure

Inside your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── css/
│   │   │   └── app.css
│   │   └── img/
│   │       └── logo.svg
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Footer.astro
│   │   └── Layout.astro
│   │   └── Navigation.astro
│   └── pages/
│       └── about.astro
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
|:-----------------------|:---------------------------------------------------|
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## Directives

https://docs.astro.build/en/reference/directives-reference/

`client:load` renders and hydrates the component immediately on page load. - Priority: high
`client:idle` renders and hydrates the component when the browser is idle. - Priority: medium
`client:idle={{timeout: 500}}` renders and hydrates the component when the browser is idle, but waits for 500ms before rendering. - Priority: medium
`client:visible` renders and hydrates the component when it becomes visible in the viewport (“below the fold”) . - Priority: low
`client:media` renders and hydrates the component when the media attribute matches. - Priority: low: `<SidebarToggle client:media="(max-width: 50em)" />`

## Transition quirks

https://docs.astro.build/en/guides/view-transitions/

- `data-astro-rerun` directive is used to force inline scripts to re-execute after every transition
- `is:inline` directive is used to inline the scripts

```html

<script src="https://cdn.snipform.io/wrap/sf.iife.v1.08.js" defer is:inline data-astro-rerun/>

```
