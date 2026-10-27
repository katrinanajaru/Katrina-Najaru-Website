# Katrina Najaru Lekalkuli · Portfolio

Single-page portfolio built with React, TypeScript and Vite.

## Run locally

```bash
npm install
npm run dev      # development server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

The build uses relative paths, so `dist/` can be uploaded to any static host (Netlify, Vercel, GitHub Pages, cPanel) or opened through XAMPP at
`http://localhost/Najash-portfolio-main/katrina-portfolio/dist/`.

## Deploy to GitHub Pages

Push to the `master` branch to build and deploy the site automatically:
<https://katrinanajaru.github.io/Katrina-Najaru-Website/>.

The GitHub Actions workflow builds the app and publishes `dist/`. It enables
GitHub Pages for the repository on its first run.

## Editing content

All text (experience, projects, skills, certifications, contacts) lives in [`src/data/resume.ts`](src/data/resume.ts).
To update the downloadable résumé, replace `public/Katrina-Najaru-Lekalkuli-Resume.pdf` and rebuild. To change the photo, replace `public/najash.jpeg`.
