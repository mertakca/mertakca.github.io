# Mert Akca Portfolio

Personal portfolio built with React, TypeScript, and Vite for GitHub Pages.

## Development

1. Install dependencies:

  npm install

2. Start local development server:

  npm run dev

3. Build for production:

  npm run build

4. Run checks (lint + build):

  npm run check

## Deployment

GitHub Actions workflow is defined at .github/workflows/deploy.yml.

1. Push to main.
2. In repository settings, set Pages source to GitHub Actions.
3. The workflow builds and deploys dist to GitHub Pages.

