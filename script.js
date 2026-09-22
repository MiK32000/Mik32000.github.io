document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const segs = document.querySelectorAll(".progress-seg");
  if (segs.length) {
    const animate = () => {
      segs.forEach((seg) => {
        const target = seg.getAttribute("data-target");
        seg.style.width = target + "%";
      });
    };
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.disconnect();
          }
        });
      }, { threshold: 0.2 });
      const track = document.querySelector(".progress-track");
      if (track) obs.observe(track);
    } else {
      animate();
    }
  }
});
