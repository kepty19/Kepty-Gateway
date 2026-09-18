const preloader = document.getElementById("preloader");
const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
const enquiry = document.getElementById("enquiry");
const form = document.getElementById("enquiry-form");
const thanks = document.getElementById("enquiry-thanks");
const year = document.getElementById("year");
const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

year.textContent = String(new Date().getFullYear());

window.setTimeout(() => {
  preloader.classList.add("is-gone");
}, 1450);

window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  },
  { passive: true }
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((el, index) => {
  el.style.animationDelay = `${index % 4 * 0.08}s`;
  observer.observe(el);
});

const openEnquiry = () => {
  enquiry.hidden = false;
  form.hidden = false;
  thanks.hidden = true;
  form.reset();
  document.body.style.overflow = "hidden";
  menu.hidden = true;
};

const closeEnquiry = () => {
  enquiry.hidden = true;
  document.body.style.overflow = "";
};

document.querySelectorAll("[data-open-enquiry]").forEach((btn) => {
  btn.addEventListener("click", openEnquiry);
});

document.querySelectorAll("[data-close-enquiry]").forEach((btn) => {
  btn.addEventListener("click", closeEnquiry);
});

enquiry.addEventListener("click", (event) => {
  if (event.target === enquiry) closeEnquiry();
});

document.querySelector("[data-open-menu]").addEventListener("click", () => {
  menu.hidden = false;
  document.body.style.overflow = "hidden";
});

document.querySelector("[data-close-menu]").addEventListener("click", () => {
  menu.hidden = true;
  document.body.style.overflow = "";
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.hidden = true;
    document.body.style.overflow = "";
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const subject = encodeURIComponent("Football Private Lesson enquiry");
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:contact@kepty.co?subject=${subject}&body=${body}`;
  form.hidden = true;
  thanks.hidden = false;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeEnquiry();
    menu.hidden = true;
    document.body.style.overflow = "";
  }
});

window.addEventListener(
  "pointermove",
  (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursorDot.style.left = `${event.clientX}px`;
    cursorDot.style.top = `${event.clientY}px`;
  },
  { passive: true }
);

document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("pointerenter", () => cursor.classList.add("is-hover"));
  el.addEventListener("pointerleave", () => cursor.classList.remove("is-hover"));
});
