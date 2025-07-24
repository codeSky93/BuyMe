document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    const title = document.getElementById("title").value.trim();
    const price = document.getElementById("price").value.trim();
    const photo = document.getElementById("photo").files[0];

    if (!title || !price || !photo) {
      alert("Merci de remplir tous les champs requis.");
      e.preventDefault();
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (photo && !allowedTypes.includes(photo.type)) {
      alert("Seules les images JPEG, PNG ou WebP sont autorisées.");
      e.preventDefault();
    }
  });
});
