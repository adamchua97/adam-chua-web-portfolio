# Editing Guide — Adam Chua Portfolio

A reference for making future changes to this site: what to edit, where files go, and how a change gets from your computer to the live site.

---

## 1. Site map — which file holds what

| File | What's on it |
|---|---|
| `index.html` | Home page: hero intro, highlights strip, 4 featured projects |
| `about.html` | Professional summary, experience timeline, education, skills, certifications, awards |
| `projects.html` | All 16 project cards, with filter pills by category |
| `assets/css/style.css` | All styling (colors, fonts, layout, spacing) — one file for the whole site |
| `assets/js/main.js` | Mobile menu toggle, project filter buttons, "Details" expand/collapse on project cards |
| `assets/images/` | Profile photo + project screenshots |
| `assets/resume/` | The downloadable résumé PDF |
| `README.md` | Repo description shown on GitHub |

There's no build step — these are the actual files the browser loads. Editing text directly in the `.html` files is the normal way to make content changes.

---

## 2. Common edits

### Change text (bio, job bullets, skills, etc.)
Open the relevant `.html` file and edit the text directly. Content is plain HTML — paragraphs are in `<p>` tags, bullet points are in `<li>` tags, headings are in `<h1>`–`<h4>` tags. No special tools needed, a text editor is enough.

### Update your portrait photo
Replace the file at `assets/images/profile.jpg` with a new image, **keeping the exact same filename** (`profile.jpg`). Nothing else needs to change — `index.html` references it by that name. Any reasonably square/portrait photo works; it's displayed in a circle, so keep the subject centered.

### Add or swap a project screenshot
1. Drop the image file into `assets/images/`, using a short, descriptive, lowercase-hyphenated filename (e.g. `dashboard-preview.png`).
2. In `projects.html` (and `index.html` if it's also a featured project), find the relevant `<article class="project-card">` block and point its `<img src="...">` at the new file.

Screenshots display in a 16:10 box and are cropped to fill it (`object-fit: cover`), so landscape/wide screenshots look best — a tall vertical screenshot will get cropped on the sides.

### Update your résumé
Replace `assets/resume/Adam-Chua-Resume.pdf` with the new PDF, keeping the same filename. The "Download Résumé" buttons on every page already point to that path.

### Add a brand-new project card
Copy an existing `<article class="project-card">` block in `projects.html` as a template, then edit:
- `id="..."` — a unique short slug (only needed if you want to link to it directly, e.g. from the homepage)
- `data-category="..."` — one of: `data-engineering`, `ml-nlp`, `bi`, `strategy` (controls which filter pill shows it)
- The image (`<img src="assets/images/...">`) or, if you don't have a screenshot yet, reuse the icon-tile pattern from one of the 4 grad-school project cards (`project-media project-media--icon` with an inline `<svg>`)
- Title, description, and `tech-tags`
- The link button at the bottom (`View Project`), or the `Details` expand pattern if you want an inline write-up instead of an external link

### Add/update an experience entry, degree, skill, cert, or award
All in `about.html`, in clearly labeled sections (`Experience`, `Education`, `Skills`, `Certifications`, `Awards & Achievements`). Copy the pattern of an existing entry in that section and edit the text.

---

## 3. Previewing changes before they're public

Nothing is live until it's pushed to GitHub and merged into `main` (see below), so you can edit freely and check your work first.

**Easiest option — ask me.** I can start a local preview server and open it in the browser pane so you can see changes rendered before shipping them.

**To do it yourself:** open a terminal in the project folder and run:
```bash
python -m http.server 8000
```
then open `http://localhost:8000` in your browser. Stop it with `Ctrl+C` when done. (Any static file server works — e.g. the VS Code "Live Server" extension is another option.)

---

## 4. Shipping a change (getting it live)

This repo uses a simple branch → pull request → merge flow, same as we've been doing:

1. Edit the files (locally, by hand or by asking me).
2. Commit the changes on a new branch, and push it to GitHub.
3. Open a pull request into `main`.
4. Merge it.
5. GitHub Pages automatically rebuilds `main` and the live site updates within a minute or two — no separate deploy step.

**Easiest option — ask me.** Just describe the change (or hand me new files) and say "create a PR" — I'll make the edit, commit it, open the PR, and merge it once you give the go-ahead.

**To do it yourself:**
```bash
git checkout -b my-change-name
git add -A
git commit -m "Describe the change"
git push -u origin my-change-name
```
Then open the compare link GitHub prints in the terminal (or go to the repo on GitHub) to open and merge the pull request.

---

## 5. Quick reference

- Live site: https://adamchua97.github.io/adam-chua-web-portfolio/
- Repo: https://github.com/adamchua97/adam-chua-web-portfolio
- Filter categories used across `projects.html`: `data-engineering`, `ml-nlp`, `bi`, `strategy`
- Accent color / design tokens: top of `assets/css/style.css`, under `:root`
