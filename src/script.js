const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const siteHeader = document.querySelector(".site-header");
const yearElement = document.querySelector("#year");
const revealItems = document.querySelectorAll(".fade-up");
const pageAnchorLinks = document.querySelectorAll('a[href^="#"]');
const siteNavLinks = siteNav ? siteNav.querySelectorAll('a[href^="#"]') : [];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const searchInput = document.querySelector("#resource-search");
const resourceGrid = document.querySelector("[data-resource-grid]");
const resourceCards = document.querySelectorAll("[data-resource-card]");
const noResultsMessage = document.querySelector("[data-no-results]");
const categoryButtons = document.querySelectorAll(".category-btn");

let activeCategory = "all";

function setNavigationState(isOpen) {
  if (!navToggle || !siteNav) {
    return;
  }

  siteNav.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

function closeNavigationMenu() {
  setNavigationState(false);
}

function getAnchorTarget(hash) {
  if (!hash || !hash.startsWith("#")) {
    return null;
  }

  const targetId = decodeURIComponent(hash.slice(1));

  if (!targetId) {
    return null;
  }

  return document.getElementById(targetId);
}

function revealNavigationTarget(target) {
  if (target.classList.contains("fade-up")) {
    target.classList.add("is-visible");
  }

  target.querySelectorAll(".fade-up").forEach((item) => {
    item.classList.add("is-visible");
  });
}

function updateCurrentNavigation(hash) {
  siteNavLinks.forEach((link) => {
    if (link.getAttribute("href") === hash) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function scrollToAnchorTarget(target, hash, shouldUpdateHistory = true) {
  const headerOffset = siteHeader ? siteHeader.offsetHeight + 16 : 16;
  const targetTop = Math.max(
    0,
    window.scrollY + target.getBoundingClientRect().top - headerOffset
  );

  revealNavigationTarget(target);
  window.scrollTo({
    top: targetTop,
    behavior: prefersReducedMotion.matches ? "auto" : "smooth"
  });

  if (shouldUpdateHistory) {
    if (window.location.hash === hash) {
      history.replaceState(null, "", hash);
    } else {
      history.pushState(null, "", hash);
    }
  }

  updateCurrentNavigation(hash);

  window.setTimeout(() => {
    if (typeof target.focus === "function") {
      target.focus({ preventScroll: true });
    }
  }, prefersReducedMotion.matches ? 0 : 220);
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

pageAnchorLinks.forEach((link) => {
  const hash = link.getAttribute("href");
  const target = getAnchorTarget(hash);

  if (!target) {
    link.setAttribute("aria-disabled", "true");
    return;
  }

  link.addEventListener("click", (event) => {
    event.preventDefault();
    closeNavigationMenu();
    scrollToAnchorTarget(target, hash);
  });
});

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    setNavigationState(!siteNav.classList.contains("is-open"));
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.classList.contains("is-open")) {
      return;
    }

    if (siteNav.contains(event.target) || navToggle.contains(event.target)) {
      return;
    }

    closeNavigationMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !siteNav.classList.contains("is-open")) {
      return;
    }

    closeNavigationMenu();
    navToggle.focus();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeNavigationMenu();
    }
  });
}

const initialTarget = getAnchorTarget(window.location.hash);

if (initialTarget) {
  window.addEventListener(
    "load",
    () => {
      scrollToAnchorTarget(initialTarget, window.location.hash, false);
    },
    { once: true }
  );
} else {
  updateCurrentNavigation(window.location.hash);
}

window.addEventListener("hashchange", () => {
  const target = getAnchorTarget(window.location.hash);

  if (target) {
    revealNavigationTarget(target);
  }

  updateCurrentNavigation(window.location.hash);
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

function filterResources() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  resourceCards.forEach((card) => {
    const title = card.querySelector("h3")?.textContent?.toLowerCase() || "";
    const description = card.querySelector("p")?.textContent?.toLowerCase() || "";
    const category = card.getAttribute("data-category") || "";
    const searchMatches = title.includes(searchTerm) || description.includes(searchTerm);
    const categoryMatches = activeCategory === "all" || category === activeCategory;

    if (searchMatches && categoryMatches) {
      card.style.display = "";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (noResultsMessage) {
    noResultsMessage.hidden = visibleCount > 0;
  }
}

function setActiveCategory(category) {
  activeCategory = category;
  categoryButtons.forEach((btn) => {
    const btnCategory = btn.getAttribute("data-category");
    btn.setAttribute("aria-pressed", btnCategory === category);
  });
  filterResources();
}

if (searchInput) {
  searchInput.addEventListener("input", filterResources);
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    setActiveCategory(category);
  });
});
