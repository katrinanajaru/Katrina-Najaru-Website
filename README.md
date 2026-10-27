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

For the first deployment, open the repository's **Settings → Pages** and set
**Build and deployment → Source** to **GitHub Actions**. GitHub requires this
one-time setting to be enabled in the repository.

After that, pushes to the `master` branch build and deploy the site
automatically:
<https://katrinanajaru.github.io/Katrina-Najaru-Website/>.

The GitHub Actions workflow builds the app and publishes `dist/`.

## Editing content

All text (experience, projects, skills, certifications, contacts) lives in [`src/data/resume.ts`](src/data/resume.ts).
To update the downloadable résumé, replace `public/Katrina-Najaru-Lekalkuli-Resume.pdf` and rebuild. To change the photo, replace `public/najash.jpeg`.
