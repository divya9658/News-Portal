# News Portal

A polished React + Vite news portal that showcases article browsing, a search flow, and performance-focused reporting for a modern reading experience.

## Live demo

https://divya9658.github.io/News-Portal/

## Highlights

- Responsive article listing and detail views
- Search-driven navigation for discovering content quickly
- Lightweight Vite setup with production-ready GitHub Pages deployment
- Lighthouse-style performance reports under `performance-reports/`

## Tech stack

- React 19
- React Router
- Vite 8
- ESLint
- GitHub Pages deployment workflow

## Getting started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm start
   ```
   The app opens at http://127.0.0.1:3000/ by default.
3. Run the performance checks
   ```bash
   npm run test:performance
   ```

## Useful scripts

```bash
npm run dev          # start Vite in development mode
npm run build        # create the production bundle
npm run preview      # preview the production build locally
npm run lint         # run ESLint
npm run test:performance  # generate Lighthouse-style reports
```

## Performance reports

The project writes reports to the following files:

- `performance-reports/articles-lighthouse.json`
- `performance-reports/article-detail-lighthouse.json`

## Deployment

This repository is configured for GitHub Pages deployment using the workflow in `.github/workflows/deploy.yml`.

When changes are pushed to `main`, GitHub Actions builds the app and publishes the latest site to the live URL above.
