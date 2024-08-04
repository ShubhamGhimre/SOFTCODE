function SearchHandleClick() {
    const searchBox = document.getElementById("search");
    const HeroContainer = document.getElementById("hero");

    if (searchBox.style.display === "none") {
        searchBox.style.display = "block";
        HeroContainer.style.backdropFilter = "bur(20px)";
    }
    else {
        searchBox.style.display = "none";
    }
}


const bar = document.getElementById("bars");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        console.log("bar clicked");
        navbar.classList.add('active');
    });
}
// toogle bar to add and remove active class


if (close) {
    close.addEventListener("click", () => {
        // console.log("close clicked");
        navbar.classList.remove('active');
    });
}