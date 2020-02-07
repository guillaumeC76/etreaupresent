function openNav() {
    document.getElementById("myNav").style.width = "100%";
    $('.menuBurger').css('display', "none")
    setTimeout(function () {
        $('.overlay-content').css('display', "block")
    }, 100);
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    setTimeout(function () {
        $('.menuBurger').css('display', "inline-block")
    },300);
    setTimeout(function () {
        $('.overlay-content').css('display', "none")
    }, 200);


}




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-66px";
    }
    prevScrollpos = currentScrollPos;
}