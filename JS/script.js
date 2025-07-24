document.addEventListener("DOMContentLoaded", function () {
  // ✅ Menu burger responsive
  const toggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  if (toggle && navbar) {
    toggle.addEventListener("click", function () {
      navbar.classList.toggle("show");
    });
  }

  // ✅ Recherche dynamique
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".product-card");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchValue = searchInput.value.toLowerCase();

      let found = false;

      cards.forEach(card => {
        const text = card.textContent.toLowerCase(); // ✅ corrigé ici
        const match = text.includes(searchValue);
        card.style.display = match ? "" : "none";
        if (match) found = true;
      });

      // ✅ Afficher un message si aucune carte ne correspond
      const noResultMsg = document.getElementById("no-results");
      if (noResultMsg) {
        noResultMsg.style.display = found ? "none" : "block";
      }
    });
  }
});
// ⭐ Notation étoilée cliquable
document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".rating-stars .star");
  const noteText = document.getElementById("note-text");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      stars.forEach(s => s.classList.remove("selected"));
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("selected");
      }
      noteText.textContent = `Note : ${index + 1} étoile(s)`;
    });
  });
});
