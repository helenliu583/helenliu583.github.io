# Helen Liu — Portfolio Website

A clean, responsive portfolio website for showcasing art, photography, website, and game projects. Hosted on GitHub Pages.

**Live site:** [helenliu583.github.io](https://helenliu583.github.io)

---

## How This Website Works

The site has two pages:

- **`index.html`** — The main page with a grid of project thumbnails and an "About Me" section.
- **`project.html`** — A detail page that shows a scrollable gallery of images/videos for a project.

All project data is stored in a single file: **`js/projects.js`**. When you want to add or remove a project, you only need to edit that one file (and add your images).

**No build tools are required.** Just edit the files and push to GitHub.

---

## File Structure

```
helenliu583.github.io/
  index.html              Main page (project grid + About Me)
  project.html            Project gallery page
  css/
    style.css             All styles for the site
  js/
    projects.js           Project data (THE FILE YOU EDIT to add/remove projects)
    main.js               Navigation and grid rendering logic
    project-page.js       Gallery rendering for the detail page
  assets/
    images/
      thumbnails/         Square thumbnail images for the project grid
      projects/
        your-project-id/  A folder per project containing gallery images
  README.md               This file
```

---

## How to Add a New Project

### Step 1: Choose your project type

- **Art / Photography project** — Opens a gallery page with scrollable images when clicked.
- **External project** (website, game, etc.) — Opens an external URL in a new tab when clicked.

### Step 2: Add your images

1. **Thumbnail:** Add a square image to `assets/images/thumbnails/`. This is what appears in the grid on the main page. Any image format works (`.jpg`, `.png`, `.webp`, `.svg`, etc.).

2. **Gallery images (art projects only):** Create a folder in `assets/images/projects/` named with your project's ID (see below), then put your images and/or videos inside it.

```
assets/
  images/
    thumbnails/
      my-new-project.jpg          <-- your thumbnail
    projects/
      my-new-project/             <-- folder named with the project ID
        01.jpg                    <-- gallery images
        02.png
        03.mp4                    <-- videos work too
```

### Step 3: Add an entry to `js/projects.js`

Open `js/projects.js` and add a new object to the `PROJECTS` array. Here is the format:

```javascript
{
  id: "my-new-project",
  title: "My New Project",
  thumbnail: "assets/images/thumbnails/my-new-project.jpg",
  type: "art",
  link: "",
  images: [
    "assets/images/projects/my-new-project/01.jpg",
    "assets/images/projects/my-new-project/02.png",
    "assets/images/projects/my-new-project/03.mp4"
  ],
  description: "A short description of this project."
}
```

### Step 4: Save and push to GitHub

```
git add .
git commit -m "Add new project: My New Project"
git push
```

Your project will appear on the live site within a few minutes.

---

## Project Data Format

Each project in `js/projects.js` is an object with these fields:

| Field         | Required | Description |
|---------------|----------|-------------|
| `id`          | Yes      | A unique URL-friendly identifier. Use only lowercase letters, numbers, and hyphens. Example: `"landscape-studies"` |
| `title`       | Yes      | The project name shown on the grid and detail page. Example: `"Landscape Studies"` |
| `thumbnail`   | Yes      | Path to the square thumbnail image. Place it in `assets/images/thumbnails/`. Example: `"assets/images/thumbnails/landscape.jpg"` |
| `type`        | Yes      | `"art"` (opens a gallery page) or `"external"` (opens a URL in a new tab) |
| `link`        | For external | The URL to open. Leave as `""` for art projects. Example: `"https://my-game.example.com"` |
| `images`      | For art  | Array of image/video paths shown on the gallery page. Leave as `[]` for external projects. Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`, `.mp4`, `.webm` |
| `description` | No       | A short description shown on the detail page. Leave as `""` to skip. |

### Example: Art Project

```javascript
{
  id: "watercolor-series",
  title: "Watercolor Series",
  thumbnail: "assets/images/thumbnails/watercolor.jpg",
  type: "art",
  link: "",
  images: [
    "assets/images/projects/watercolor-series/painting-01.jpg",
    "assets/images/projects/watercolor-series/painting-02.jpg",
    "assets/images/projects/watercolor-series/process-video.mp4"
  ],
  description: "A collection of watercolor paintings exploring light and color."
}
```

### Example: External Website

```javascript
{
  id: "my-game",
  title: "My Game",
  thumbnail: "assets/images/thumbnails/my-game.png",
  type: "external",
  link: "https://my-game.example.com",
  images: [],
  description: ""
}
```

---

## How to Remove a Project

1. Open `js/projects.js`.
2. Find the project you want to remove.
3. Delete the entire object (from the opening `{` to the closing `},`).
4. Save and push to GitHub.
5. Optionally delete the project's images from `assets/images/`.

---

## How to Edit the About Me Section

Open `index.html` and find the "About Me" section near the bottom:

```html
<section class="about-section" id="about">
  <h1 class="about-name">Helen Liu</h1>
  <p class="about-text">
    Your bio text goes here...
  </p>
</section>
```

Edit the text inside the `<h1>` and `<p>` tags, save, and push.

---

## How to Change the Site's Look

All styles are in `css/style.css`. The color palette is defined at the top using CSS variables:

```css
:root {
  --color-bg:          #FAFAF8;   /* page background */
  --color-surface:     #FFFFFF;   /* card/surface color */
  --color-text:        #2D2D2D;   /* main text color */
  --color-text-light:  #6B6B6B;   /* secondary text color */
  --color-accent:      #7C8B6E;   /* accent color (sage green) */
  --color-border:      #E5E3DF;   /* border color */
}
```

Change these values to customize the entire site's color scheme.

---

## Technical Details

- **No build tools required** — no npm, no Tailwind, no bundler. Just static HTML, CSS, and JavaScript.
- **Font:** [Inter](https://fonts.google.com/specimen/Inter) loaded from Google Fonts.
- **Icons:** Inline SVGs (no icon font dependencies).
- **Responsive:** CSS Grid with `auto-fill` for the project grid, media queries for mobile adjustments.
- **Minimum font size:** 14px (exceeds 12pt requirement).
- **Browser support:** All modern browsers (Chrome, Firefox, Safari, Edge).
