/**
 * Project Detail Page JavaScript
 * Reads the "id" query parameter from the URL and renders
 * the matching project's gallery from the PROJECTS array.
 */

(function () {
  "use strict";

  // ---- Read the project ID from the URL ----
  var params    = new URLSearchParams(window.location.search);
  var projectId = params.get("id");
  var container = document.getElementById("project-detail");

  if (!container) return;

  // ---- Find the project ----
  var project = null;
  if (typeof PROJECTS !== "undefined") {
    for (var i = 0; i < PROJECTS.length; i++) {
      if (PROJECTS[i].id === projectId) {
        project = PROJECTS[i];
        break;
      }
    }
  }

  // ---- Not found ----
  if (!project) {
    container.innerHTML =
      '<div class="error-message">' +
        '<p>Project not found.</p>' +
        '<p><a href="index.html">Return to portfolio</a></p>' +
      '</div>';
    return;
  }

  // ---- Update page title ----
  document.title = project.title + " — Helen Liu";

  // ---- Build the page ----
  var html = "";

  // Back link
  html +=
    '<a href="index.html" class="project-back-link">' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<line x1="19" y1="12" x2="5" y2="12"/>' +
        '<polyline points="12 19 5 12 12 5"/>' +
      '</svg>' +
      'Back to portfolio' +
    '</a>';

  // Header
  html += '<div class="project-detail-header">';
  html += '<h1 class="project-detail-title">' + project.title + '</h1>';
  if (project.description) {
    html += '<p class="project-detail-description">' + project.description + '</p>';
  }
  html += '</div>';

  // Gallery
  if (project.images && project.images.length > 0) {
    html += '<div class="gallery">';
    for (var j = 0; j < project.images.length; j++) {
      var src = project.images[j];
      var ext = src.split(".").pop().toLowerCase();
      var isVideo = (ext === "mp4" || ext === "webm" || ext === "mov");

      html += '<div class="gallery-item">';
      if (isVideo) {
        html +=
          '<video controls playsinline preload="metadata" class="gallery-media">' +
            '<source src="' + src + '" type="video/' + (ext === "mov" ? "mp4" : ext) + '" />' +
            'Your browser does not support video playback.' +
          '</video>';
      } else {
        html +=
          '<img src="' + src + '" alt="' + project.title + '" class="gallery-media" loading="lazy" />';
      }
      html += '</div>';
    }
    html += '</div>';
  } else {
    html += '<p style="color:#6B6B6B;text-align:center;padding:40px 0;">No images added yet for this project.</p>';
  }

  container.innerHTML = html;

  // ---- Hamburger menu logic (same as main page) ----
  var hamburgerBtn = document.getElementById("hamburger-btn");
  var navDropdown  = document.getElementById("nav-dropdown");

  if (hamburgerBtn && navDropdown) {
    hamburgerBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      navDropdown.classList.toggle("open");
    });

    document.addEventListener("click", function (e) {
      if (!navDropdown.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        navDropdown.classList.remove("open");
      }
    });

    var dropdownLinks = navDropdown.querySelectorAll("a");
    for (var k = 0; k < dropdownLinks.length; k++) {
      dropdownLinks[k].addEventListener("click", function () {
        navDropdown.classList.remove("open");
      });
    }
  }

})();
