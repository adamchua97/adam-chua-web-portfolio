// Adam Chua: Portfolio. Vanilla JS, no dependencies.

document.addEventListener("DOMContentLoaded", function () {
  initNavToggle();
  initProjectFilters();
  initProjectDetails();
});

function initNavToggle() {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    var isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  links.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initProjectFilters() {
  var bar = document.querySelector(".filter-bar");
  var cards = document.querySelectorAll("[data-category]");
  if (!bar || !cards.length) return;

  var pills = bar.querySelectorAll(".filter-pill");

  bar.addEventListener("click", function (e) {
    var pill = e.target.closest(".filter-pill");
    if (!pill) return;

    pills.forEach(function (p) { p.setAttribute("aria-pressed", "false"); });
    pill.setAttribute("aria-pressed", "true");

    var category = pill.getAttribute("data-filter");
    cards.forEach(function (card) {
      var match = category === "all" || card.getAttribute("data-category") === category;
      card.style.display = match ? "" : "none";
    });
  });
}

function initProjectDetails() {
  document.querySelectorAll(".details-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".project-card");
      var panel = card.querySelector(".project-details");
      var isOpen = btn.getAttribute("aria-expanded") === "true";

      btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
      card.classList.toggle("is-open", !isOpen);
      if (panel) panel.hidden = isOpen ? true : false;
    });
  });
}
