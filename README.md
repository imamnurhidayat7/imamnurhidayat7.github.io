# Imam Nurhidayat — Portfolio

Personal portfolio website built with Next.js (App Router) + Tailwind CSS, deployed on GitHub Pages.

🌐 **Live:** [https://imamnurhidayat7.github.io](https://imamnurhidayat7.github.io)

## Tech Stack

- Next.js 14 (App Router) with TypeScript
- Tailwind CSS
- lucide-react icons
- Static export for GitHub Pages
- GitHub Actions for CI/CD

## Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
```

Outputs static files to `./out/`.

## Updating Content

All content lives in the `data/` folder as typed TypeScript constants:

| File | What to edit |
|------|--------------|
| `data/profile.ts` | Name, title, tagline, bio, email, social links, quick facts |
| `data/experience.ts` | Job experience entries (role, company, dates, bullets, tech) |
| `data/projects.ts` | Portfolio projects (title, description, tech, links) |
| `data/skills.ts` | Skills organized by category |

After editing, commit and push to `main` — GitHub Actions will rebuild and deploy automatically.

## Deployment

Pushes to `main` trigger the `.github/workflows/deploy.yml` workflow, which:

1. Installs dependencies
2. Builds the static site
3. Deploys to GitHub Pages

To deploy manually, use the Actions tab → "Deploy to GitHub Pages" → "Run workflow".

### GitHub Pages Setup (one-time)

1. Go to repo **Settings → Pages**
2. Source: **GitHub Actions**
3. Save

The workflow will then handle deployments on every push to `main`.

## Project Structure

```
.
├── app/              # Next.js App Router (layout, page, globals)
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Experience, Projects, Skills, Contact
│   └── ui/           # Reusable: SectionTitle, Badge
├── data/             # Typed content (profile, experience, projects, skills)
├── lib/              # Utilities (cn helper)
├── public/           # Static assets (images, CV PDF)
└── .github/workflows/ # GitHub Actions
```

## License

MIT