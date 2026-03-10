/**
 * ============================================================
 * PROJECT CONFIGURATION
 * ============================================================
 *
 * This file is the single place to add, edit, or remove projects
 * from the portfolio. Each project is an object in the PROJECTS array.
 *
 * HOW TO ADD A NEW PROJECT
 * ------------------------
 * 1. Copy one of the example objects below.
 * 2. Paste it at the end of the array (before the closing bracket).
 * 3. Fill in each field (see the field guide below).
 * 4. Add your thumbnail image to: assets/images/thumbnails/
 * 5. For art projects, add your gallery images to:
 *    assets/images/projects/your-project-id/
 * 6. Save this file and push to GitHub.
 *
 * HOW TO REMOVE A PROJECT
 * -----------------------
 * Delete the entire object (from the opening { to the closing },)
 * for the project you want to remove, then save and push.
 *
 * FIELD GUIDE
 * -----------
 *   id          - A unique identifier using only lowercase letters,
 *                 numbers, and hyphens. This is used in the URL.
 *                 Example: "landscape-studies" or "my-game-2024"
 *
 *   title       - The name displayed on the thumbnail and detail page.
 *                 Example: "Landscape Studies"
 *
 *   thumbnail   - Path to the square thumbnail image.
 *                 Place the image in assets/images/thumbnails/
 *                 Example: "assets/images/thumbnails/landscape.jpg"
 *
 *   type        - What kind of project this is:
 *                 "art"      -> Clicking opens a gallery page with your images
 *                 "external" -> Clicking opens an external website in a new tab
 *
 *   link        - The URL for external projects (opens in new tab).
 *                 Leave as "" for art projects.
 *                 Example: "https://my-game.example.com"
 *
 *   images      - An array of image or video file paths for art projects.
 *                 These are displayed in order on the gallery page.
 *                 Supported formats: .jpg, .jpeg, .png, .gif, .webp, .mp4, .webm
 *                 Leave as [] for external projects.
 *                 Example: [
 *                   "assets/images/projects/my-project/01.jpg",
 *                   "assets/images/projects/my-project/02.png",
 *                   "assets/images/projects/my-project/video.mp4"
 *                 ]
 *
 *   description - A short description shown on the project detail page.
 *                 Optional — leave as "" if you don't want one.
 *                 Example: "A series of watercolor landscapes."
 *
 * ============================================================
 */

const PROJECTS = [
  // ---- Example: Art / Photography Project ----
  {
    id: "sample-art-project",
    title: "Sample Art Project",
    thumbnail: "assets/images/thumbnails/sample-art.svg",
    type: "art",
    link: "",
    images: [
      "assets/images/projects/sample-art-project/01.svg",
      "assets/images/projects/sample-art-project/02.svg",
      "assets/images/projects/sample-art-project/03.svg"
    ],
    description: "A sample art project. Replace this with your own work."
  },

  // ---- Example: External Website / Game Project ----
  {
    id: "sample-website",
    title: "Sample Website",
    thumbnail: "assets/images/thumbnails/sample-website.svg",
    type: "external",
    link: "https://example.com",
    images: [],
    description: ""
  },

  // ---- Add more projects below by copying one of the examples above ----
];
