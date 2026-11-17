// Cool It Air Conditioning Repair — DEMO site script (nav, year, lightbox, demo quote form)
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

// Review "Read more" toggles
document.querySelectorAll(".review-more").forEach((btn) => {
  const text = document.getElementById(btn.getAttribute("aria-controls"));
  btn.addEventListener("click", () => {
    const open = text.classList.toggle("clamp") === false;
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "Show less" : "Read more";
  });
});

// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// Gallery lightbox
const lightbox = document.querySelector(".lightbox");
if (lightbox) {
  const img = lightbox.querySelector("img");
  const cap = lightbox.querySelector("p");
  const close = lightbox.querySelector(".lightbox-close");
  let lastFocus = null;
  const hide = () => {
    lightbox.classList.remove("open");
    if (lastFocus) lastFocus.focus();
  };
  document.querySelectorAll(".gallery button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const thumb = btn.querySelector("img");
      img.src = thumb.src;
      img.alt = thumb.alt;
      cap.textContent = btn.querySelector("figcaption")?.textContent || "";
      lastFocus = btn;
      lightbox.classList.add("open");
      close.focus();
    });
  });
  close.addEventListener("click", hide);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) hide(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && lightbox.classList.contains("open")) hide(); });
}

// Demo quote form: no backend, just show a confirmation
const form = document.querySelector("#quote-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const msg = document.querySelector(".form-success");
    msg.classList.add("show");
    msg.focus();
    form.reset();
  });
}
