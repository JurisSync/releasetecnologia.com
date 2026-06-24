(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const header = document.querySelector(".header");
  const ano = document.getElementById("ano");
  const toast = document.getElementById("toast");

  if (ano) {
    ano.textContent = new Date().getFullYear();
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("is-scrolled", window.scrollY > 20);
    }, { passive: true });
  }

  if (toast && new URLSearchParams(window.location.search).get("enviado") === "1") {
    toast.hidden = false;
    toast.classList.add("is-visible");

    setTimeout(function () {
      toast.classList.remove("is-visible");
      const url = new URL(window.location);
      url.searchParams.delete("enviado");
      window.history.replaceState({}, "", url.pathname + url.hash);
    }, 5000);
  }
})();
