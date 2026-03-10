/**
 * Main JavaScript — Portfolio
 * Handles: navigation, hamburger menu, project grid rendering,
 * and nav-link visibility based on page scroll length.
 */

(function () {
  "use strict";

  // ---- DOM Elements ----
  var hamburgerBtn = document.getElementById("hamburger-btn");
  var navDropdown  = document.getElementById("nav-dropdown");
  var navRight     = document.getElementById("nav-right-links");
  var projectGrid  = document.getElementById("project-grid");

  // ---- Hamburger Menu Toggle ----
  if (hamburgerBtn && navDropdown) {
    hamburgerBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      navDropdown.classList.toggle("open");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!navDropdown.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        navDropdown.classList.remove("open");
      }
    });

    // Close dropdown when a link inside it is clicked
    var dropdownLinks = navDropdown.querySelectorAll("a");
    for (var i = 0; i < dropdownLinks.length; i++) {
      dropdownLinks[i].addEventListener("click", function () {
        navDropdown.classList.remove("open");
      });
    }
  }

  // ---- Nav Link Visibility ----
  // If the page is too short to scroll, hide the right-side nav links.
  // They remain accessible through the hamburger dropdown.
  function updateNavVisibility() {
    if (!navRight) return;
    var pageScrollable = document.documentElement.scrollHeight > window.innerHeight + 100;
    if (pageScrollable && window.innerWidth >= 768) {
      navRight.classList.remove("hidden");
    } else {
      navRight.classList.add("hidden");
    }
  }

  window.addEventListener("load", updateNavVisibility);
  window.addEventListener("resize", updateNavVisibility);

  // ---- Project Grid Rendering ----
  // Reads the PROJECTS array from js/projects.js and builds the grid.
  function renderProjectGrid() {
    if (!projectGrid) return;
    if (typeof PROJECTS === "undefined" || PROJECTS.length === 0) {
      projectGrid.innerHTML = '<p style="text-align:center;color:#6B6B6B;">No projects yet. Add projects in js/projects.js</p>';
      return;
    }

    projectGrid.innerHTML = "";

    for (var i = 0; i < PROJECTS.length; i++) {
      var project = PROJECTS[i];
      var item = document.createElement("a");
      item.className = "project-item";

      if (project.type === "external") {
        item.href = project.link;
        item.target = "_blank";
        item.rel = "noopener noreferrer";
      } else {
        // Art, photography, or any other type — opens the gallery page
        item.href = "project.html?id=" + encodeURIComponent(project.id);
      }

      // Build the inner HTML
      var badgeHTML = "";
      if (project.type === "external") {
        badgeHTML =
          '<span class="project-badge">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
              '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>' +
              '<polyline points="15 3 21 3 21 9"/>' +
              '<line x1="10" y1="14" x2="21" y2="3"/>' +
            '</svg>' +
            ' External' +
          '</span>';
      }

      item.innerHTML =
        '<div class="project-thumbnail">' +
          '<img src="' + project.thumbnail + '" alt="' + project.title + '" loading="lazy" onerror="this.style.display=\'none\'" />' +
        '</div>' +
        '<div class="project-title">' +
          project.title +
          badgeHTML +
        '</div>';

      projectGrid.appendChild(item);
    }

    // Recheck nav visibility after grid is rendered (content may have changed height)
    updateNavVisibility();
  }

  renderProjectGrid();

})();
