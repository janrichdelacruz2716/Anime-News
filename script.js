function redirectToLogin() {
    window.location.href = "login.html";
    return false;
}
 function redirectToHome() {
            window.location.href = "index.html";
            return false; 
}

  document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-button");
    const cards = document.querySelectorAll(".card");

    if (searchButton) {
        searchButton.addEventListener("click", function(event) {
            event.preventDefault();
            const searchTerm = searchInput.value.toLowerCase();

            cards.forEach(function(card) {
                const header = card.querySelector("h3").textContent.toLowerCase();
                const description = card.querySelector("p").textContent.toLowerCase();

                if (header.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});
  
  
  