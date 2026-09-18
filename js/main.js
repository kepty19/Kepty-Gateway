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

const submitBtn = document.getElementById("enquiry-submit");
const errorEl = document.getElementById("enquiry-error");

const openEnquiry = () => {
  enquiry.hidden = false;
  form.hidden = false;
  thanks.hidden = true;
  if (errorEl) errorEl.hidden = true;
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

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (errorEl) errorEl.hidden = true;
  if (form.elements._honey && form.elements._honey.value) return;

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending…";

  try {
    const response = await fetch("https://formsubmit.co/ajax/contact@kepty.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: "Football Private Lesson enquiry",
        _captcha: "false",
        _template: "table",
      }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(payload.message || "Could not send");
    }
    form.hidden = true;
    thanks.hidden = false;
  } catch (err) {
    if (errorEl) {
      errorEl.textContent =
        "The message could not be sent. Please try again, or email contact@kepty.co directly.";
      errorEl.hidden = false;
    }
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send enquiry";
  }
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
