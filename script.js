window.addEventListener("scroll", function() {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px #963cff44";
    } else {
        header.style.boxShadow = "none";
    }
});

console.log("Welcome to My Profile Website!");