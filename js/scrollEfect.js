//change opacity on scroll of each element with 'showClass'
window.addEventListener('scroll', forEachElement);
var eachElement = document.querySelectorAll(".showClass");
function forEachElement(array) {
    array = eachElement;
    for (var i = 0; i < array.length; i++) {
        changeOpacity(array[i]);
    }
};
function changeOpacity(element) {
    var elementOffset = element.offsetTop/1.2;
    var windowOffset = window.pageYOffset;
    if (windowOffset < elementOffset) {

        element.style.opacity = 0;
    } else {
        element.style.opacity = 1;
    }
}
























