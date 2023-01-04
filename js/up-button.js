const upButton = document.querySelector("#up-button")

window.onscroll = () => { 
    upButton.style.display = 
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 
        ? "block" 
        : "none";
};

function backToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
