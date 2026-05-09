const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const copyBtn = document.getElementById("copyBtn");
const copyStatus = document.getElementById("copyStatus");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

copyBtn.addEventListener("click", async () => {
  const invite = "https://discord.gg/wvvmqE5A3f";

  try {
    await navigator.clipboard.writeText(invite);
    copyStatus.textContent = "Discord invite copied!";

    setTimeout(() => {
      copyStatus.textContent = "";
    }, 2500);
  } catch {
    copyStatus.textContent = "Could not copy invite.";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const revealElements = document.querySelectorAll(
  ".section-heading, .card, .gallery-card, .pricing-card, .info-item, .policy-box, .discord, .hero-content, .hero-brand"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});