# News Portal

A React + Vite news portal app with article listing, search, and Lighthouse-style performance reporting.

## Run locally

```bash
npm install
npm start
npm run test:performance
```

Open http://127.0.0.1:3000/ in your browser (Vite will automatically choose the next available port if 3000 is already in use).

## Performance verification

```bash
npm run test:performance
```

This generates Lighthouse-style reports in the `performance-reports/` folder:

- `performance-reports/articles-lighthouse.json`
- `performance-reports/article-detail-lighthouse.json`
