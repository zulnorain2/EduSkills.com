

window.addEventListener('scroll', reveal)
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var revealpoint = 457;
        if (revealpoint < window.scrollY) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}
