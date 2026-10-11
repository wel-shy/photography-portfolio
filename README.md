# Welshy Photography

Photography portfolio built with React, TypeScript, [React Router](https://reactrouter.com) and [Vite](https://vite.dev).

Every page is prerendered to static HTML at build time from the `manifest.json` on the CDN, which lists each collection and its images. The site has to be rebuilt for newly uploaded photos to appear.

## Available Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm run build`

Type-checks the project and prerenders every page for production to the `build/client` folder.

### `npm run preview`

Serves the production build locally.

### `npm test`

Runs the tests with [Vitest](https://vitest.dev).

### `npm run lint` / `npm run format`

Lints with ESLint and formats with Prettier.

## Configuration

Environment variables live in `.env` and must be prefixed with `VITE_` to be exposed to the app.
