document.addEventListener("DOMContentLoaded", () => {
  const categoryLinks = document.querySelectorAll(".category-list a");
  const productCards = document.querySelectorAll(".product-card");

  categoryLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active class from all
      categoryLinks.forEach(l => l.classList.remove("active-category"));

      // Add active class to clicked link
      link.classList.add("active-category");

      const category = link.dataset.category;

      // Show / hide products
      productCards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
        card.style.display = "";        // back to grid mode
        } else {
        card.style.display = "none";    // hide
        }
      });
    });
  });
});
