
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu,.header__logo').toggleClass('active');
        $('body').toggleClass('lock')
    });
});




let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for (i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
} else {
    body.classList.add('mouse');
}

$(document).ready(function () {
    $('.block__title').click(function (event) {
        if ($('columns-about__block .block').hasClass('one')) {
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300)
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
