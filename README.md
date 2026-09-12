# Bixel — portfolio

Static site. No build step, no dependencies, no framework.

```
index.html            home — statement, four selected projects, contact
about.html            what I do, how projects are scoped
work/index.html       all seven projects
work/<slug>.html      one page per project (7)
assets/site.css       all styles, both themes
assets/site.js        theme toggle
assets/img/           64 images
```

## Deploying to Vercel

### Option A — drag and drop (fastest)

1. Go to https://vercel.com and sign up (GitHub, GitLab or email).
2. On the dashboard, click **Add New → Project**.
3. Choose **Deploy** without a Git repo, and drag this whole folder onto
   the upload area. Not the .zip — the unzipped folder.
4. Framework preset: **Other**. Leave build command and output directory empty.
5. Click **Deploy**. You get a live URL like `bixel-portfolio.vercel.app`
   in under a minute.

### Option B — Git (better, because updates redeploy themselves)

1. Create a repository on GitHub and push this folder to it:
   ```
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOURNAME/bixel-portfolio.git
   git push -u origin main
   ```
2. In Vercel: **Add New → Project → Import Git Repository**, pick the repo.
3. Framework preset **Other**, no build command, output directory `.`
4. Deploy. Every future `git push` redeploys automatically.

### Option C — command line

```
npm i -g vercel
cd bixel-site
vercel          # preview deploy
vercel --prod   # production
```

## Custom domain

Buy a domain, then in Vercel: **Project → Settings → Domains → Add**.
Vercel shows the DNS records to set at your registrar. HTTPS is automatic.

## Before you go live

- Replace `hello@example.com` in the footer of every page
- Add the four social links in the footer
- Fill every amber `<span class="flag">` marker, then delete the
  `.draftbar` div at the top of each page
- Add real years to each project's meta block
- Add a testimonial to the home page
- Update the `<meta name="description">` on each page if you want
  different search copy

Find every remaining marker with:

```
grep -rn "class=\"flag\"\|draftbar" .
```

## Theme

Dark by default; follows the visitor's OS setting until they use the
toggle, after which their choice is remembered. Colours are CSS variables
at the top of `assets/site.css` — edit `:root` for dark and
`[data-theme="light"]` for light.
