// Menu Mobile
// Khai bao
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// Show
if (navToggle) {
    // su kien click
    navToggle.addEventListener('click', () => {
        // add class show-menu
        navMenu.classList.add('show-menu')
    })

}
// Hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
//  REMOVE MENU KHI CLICK LINK UL LI A
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // Khi nhấp vào từng nav__link,sẽ xóa lớp show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// 
function scrollHeader() {
    const header = document.getElementById('header')
    //Khi cuộn lớn hơn 200 đơn vị chiều cao khung nhìn, thêm thanh tiêu đề cuộn vào thẻ tiêu đề
    if (this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// swipper slide
var swiper = new Swiper(".discovery__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    spaceBetween:32,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    spaceBetween: 32,
    pagination: {
        el: ".swiper-pagination",
    },
});

//   Video

const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon')
function playPause() {
    if (videoFile.paused) {
        //play
        videoFile.play()
        // Chage icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')

    }
    else {
        //pause
        videoFile.pause()
        // chage icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}
videoButton.addEventListener('click', playPause)

function EndVideo() {
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-paly-line')
}

videoFile.addEventListener('ended', EndVideo)
// --------------------------------
function scrollUP() {
    const scrollUP = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollUP.classList.add('show-scroll');
    else scrollUP.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUP)

// active scrolll
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
//scroll enimation

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    //  keo len lai
    reset :true
})

sr.reveal(`.home__data, .home__social-link, .home__info,
.discovery__container,
.experrience__data,
.experience__overlay,
.place__card,
.sponsor__content, 
.footer__data,
.footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, .video__desc, 
.subscrtibe__desc`,{
    origin: 'left',
})
sr.reveal(`.about__img-overlay, 
.video__content, 
.subscrtibe__form`,{
    origin: 'right',
    interval:100,
})