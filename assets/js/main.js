// const navbar_icon = document.querySelector('.navbar-toggle2');
// const menu_items = document.querySelector(".menu_items");
// const navigate = document.querySelector(".navigation");
// navbar_icon.addEventListener('click', () => {
//     menu_items.classList.toggle('show');
//     navigate.classList.toggle('column');
// })

// document.querySelectorAll(".navigation > li a").forEach(n => n.addEventListener('click', () => {
//     menu_items.classList.removeClass('show');
//     navigate.classList.removeClass('column');
// }))


$(document).ready(function () {
    $(".navbar-toggle2").click(function () {
        $(".menu_items").toggleClass('show');
        $(".navigation").toggleClass('column');
    });


    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww > 991) {
            $(".menu_items").removeClass('show');
            $(".navigation").removeClass('column');
        }
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});





