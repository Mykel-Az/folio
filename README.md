# Michael Azeez-Adekanmbi - Portfolio

Personal portfolio and blog of Michael Azeez-Adekanmbi, a full-stack software engineer building production web applications and AI-agent tooling with Python (Django, FastAPI) and TypeScript/React.

**Live site:** [michaelazeez-adekanmbi.vercel.app](https://michaelazeez-adekanmbi.vercel.app)

## Tech stack

- [Astro](https://astro.build) v6 - static-first framework, React islands for interactive parts
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) v4 with [shadcn/ui](https://ui.shadcn.com) primitives
- [MDX](https://mdxjs.com) blog with syntax highlighting (Shiki via rehype-pretty-code)
- [Motion](https://motion.dev) for animations
- Hosted on [Vercel](https://vercel.com) (`@astrojs/vercel` adapter)
- [pnpm](https://pnpm.io) as the package manager

## Getting started

**Prerequisites:** Node.js 22.12 or newer, and pnpm.

```bash
git clone https://github.com/Mykel-Az/folio
cd folio
pnpm install
pnpm dev
```

Then open <http://localhost:4321>.

| Command          | Action                               |
| ---------------- | ------------------------------------ |
| `pnpm dev`       | Start the dev server                 |
| `pnpm build`     | Build for production                 |
| `pnpm preview`   | Preview the production build locally |

## Where things live

| Path                      | What it controls                                              |
| ------------------------- | ------------------------------------------------------------- |
| `src/data/resume.tsx`     | Bio, work history, education, skills, projects, social links  |
| `src/data/config.ts`      | Site URL, SEO defaults, theme colors, base font size          |
| `src/content/blog/*.mdx`  | Blog posts                                                    |
| `src/components/`         | UI components and homepage sections                           |
| `src/layouts/Layout.astro`| HTML shell, meta tags, theme variables                        |
| `public/`                 | Static assets (avatar, project screenshots, OG image, favicon)|

## Deployment

The site deploys to Vercel automatically on every push to `master`. The Node.js version is pinned in `package.json` (`engines`), so Vercel builds with Node 22.

The production URL is set in two places that must match: `url` in `src/data/resume.tsx` and `site.url` in `src/data/config.ts`.

## Credits

Built from the [Starfolio](https://github.com/webrating/starfolio) Astro template by webrating, which is itself inspired by [dillionverma/portfolio](https://github.com/dillionverma/portfolio). Dock and animation components come from [Magic UI](https://magicui.design).

## License

[MIT](LICENSE). This project includes the original Starfolio copyright notice, as the license requires.