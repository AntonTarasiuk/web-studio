const upButton = document.querySelector("#up-button")
const headerHeight = document.querySelector(".header").offsetHeight

window.onscroll = () => { 
    upButton.style.display = 
        document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight 
        ? "block" 
        : "none";
};

function backToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
