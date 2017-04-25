(function() {
    var navIcon = document.querySelector(".navigation_icon");
    var breakPoint = navIcon.offsetTop;

    window.addEventListener('scroll', function(e) {
        if (window.pageYOffset > breakPoint) {
            navIcon.style.position = "fixed";
            navIcon.style.top = 0;
        } else {
            navIcon.style.position = "static";
        }
    });
})();