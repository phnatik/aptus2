let menuBtn = document.querySelector('.menu-btn');
let menuSidebar = document.querySelector('.menu');
let menuContent = document.querySelector('.menu-content');
let closeMenu = document.querySelector('.close-menu');
let mainSidebar = document.querySelector('.main-sidebar');
let brandLogo = document.querySelector('.main-sidebar .brand-logo');
let brandIcon = brandLogo.querySelector('img');
let brandMenu = document.querySelector('.brand-menu');
let circleDown = document.querySelector('.circle-down');


menuBtn.addEventListener('click', openMainMenu);
closeMenu.addEventListener('click', closeMainMenu);
brandMenu.addEventListener('click', openMainMenu);
circleDown.addEventListener('click', smoothScrollStart);


function openMainMenu() {
    menuSidebar.classList.add('menu-open');
    mainSidebar.style.display = "none";
    showMenuContent();
}

function closeMainMenu() {
    menuContent.classList.remove('show-menu-content');
    menuSidebar.classList.remove('menu-open');
    setTimeout(() => {
        mainSidebar.style.display = "block";
    }, 210);
}

function brandEnter() {
    setTimeout(() => {
        brandIcon.style.opacity = 0;
        brandMenu.style.opacity = 1;
    }, 150);
}

function brandOut() {
    setTimeout(() => {
        brandMenu.style.opacity = 0;
        brandIcon.style.opacity = 1;
    }, 150);
}

function smoothScrollStart(e) {
    $('html,body').animate({
            scrollTop: $(".main-content").offset().top
        },
        'slow');

}

function showMenuContent() {
    setTimeout(function () {
        menuContent.classList.add('show-menu-content');
    }, 500);
}

// header scroll -95px on sidebar movement
$(window).scroll(function () {
    // if ($(document).scrollTop() > 450) {
    //     $('.main-sidebar').addClass('scroll-sidebar-bg');
    //     $('.social-icon').addClass('scroll-sidebar-bg');
    // } else {
    //     $('.main-sidebar').removeClass('scroll-sidebar-bg');
    //     $('.social-icon').removeClass('scroll-sidebar-bg');
    // }

    if ($(document).scrollTop() > 10) {
        $('.main-sidebar').addClass('scroll-sidebar-bg');
        $('.social-icon').addClass('scroll-sidebar-bg');
        $('.hero-bottom-left').addClass('hero-bottom-left-move');
    } else {
        $('.main-sidebar').removeClass('scroll-sidebar-bg');
        $('.social-icon').removeClass('scroll-sidebar-bg');
        $('.hero-bottom-left').removeClass('hero-bottom-left-move');
    }

    if ($(document).scrollTop() > 230) {
        $('.flyin-header').addClass('flyin-header-show');
    } else {
        $('.flyin-header').removeClass('flyin-header-show');
    }
});