/*
    * Project Name: "Candid Shots" (Photography Booking Website)
    * Designed & Coded by: GULSHAN SONGARA
*/

/*========-- 01) Preloader --========*/
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    loader.classList.add('stop');

    setTimeout(() => {
        loader.style.display = 'none';
    }, 3000);
});


/*========-- 02) Current Page Active-link --========*/
const activeLink = document.querySelectorAll('.active-link');
const currLocation = location.href;

activeLink.forEach(actLink => {

    if (actLink.href === currLocation) {
        actLink.classList.add('current-link');
    }

    actLink.addEventListener('click', (e) => {
        e.preventDefault();
    });
});


/*========-- 03) on Window Scroll (sticky-header, scrollTop-btn & scroll-spy) --========*/
const header = document.querySelector('#header');
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {

    const currentTop = window.scrollY;

    // Sticky Header
    if (currentTop > 100) {
        header.classList.add('sticky');
    }
    else {
        header.classList.remove('sticky');
    }

    // Scroll-to-top btn
    if (currentTop > 1000) {
        scrollTopBtn.style.transform = 'translateY(0)';
    }
    else {
        scrollTopBtn.style.transform = 'translateY(100px)';
    }

    // Scroll-spy
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list a');

    sections.forEach(currSection => {

        let sectionId = currSection.getAttribute('id');
        let sectionHeight = currSection.offsetHeight;
        let sectionTop = currSection.offsetTop;

        if (currentTop >= (sectionTop - sectionHeight / 3)) {

            navLinks.forEach(currLink => {

                currLink.classList.remove('active-link');

                const hrefValue = currLink.getAttribute('href').substring(1);
                if (hrefValue === sectionId) {
                    currLink.classList.add('active-link');
                }
            });
        }

    });

});


/*========-- 04) on Page Refresh (sticky-header & scrollTop-btn) --========*/
const scrolled = window.scrollY;

// Sticky Header (on Refresh)
if (scrolled > 100) {
    header.classList.add('sticky');
}
else {
    header.classList.remove('sticky');
}

// Scroll-to-top btn (on Refresh)
if (scrolled > 1000) {
    scrollTopBtn.style.transform = 'translateY(0)';
}
else {
    scrollTopBtn.style.transform = 'translateY(100px)';
}

/*========-- 05) Scroll-to-top Btn functionality --========*/
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/*========-- 06) Sidebar --========*/
const sidebar = document.querySelector('#side-bar');
const sidebarBtn = document.querySelector('.sidebar-btn');

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// closing the Sidebar on clicking Outside or any of the Links inside it
document.addEventListener('click', (e) => {
    if (e.target.id !== 'side-bar' && e.target.className !== 'sidebar-btn') {
        sidebar.classList.remove('open');
    }
});


/*========-- 07) Gallery (Filter & Lightbox) --========*/

// Filter Gallery
const filterBtn = document.querySelectorAll('.filter-list li');
const itemBox = document.querySelectorAll('.item-box');

filterBtn.forEach(currBtn => {
    currBtn.addEventListener('click', () => {

        currBtn.parentElement.querySelector('.active-filter').classList.remove('active-filter');
        currBtn.classList.add('active-filter');

        const filterValue = currBtn.getAttribute('data-filter');

        itemBox.forEach(currBox => {
            if (filterValue === 'all' || currBox.classList.contains(filterValue)) {
                currBox.classList.remove('hide');
                currBox.classList.add('show');
            }
            else {
                currBox.classList.remove('show');
                currBox.classList.add('hide');
            }
        });

    });
});

// LightBox
const galleryImgs = document.querySelectorAll('.item-box img');
const lightboxImg = document.querySelector('.lightbox img');
const lightboxWrapper = document.querySelector('.lightbox-wrapper');
const lightboxClose = document.querySelector('.lightbox-close');

galleryImgs.forEach(currImg => {
    currImg.addEventListener('click', () => {

        let imgSrc = currImg.getAttribute('src');

        lightboxImg.setAttribute('src', imgSrc);

        document.documentElement.classList.add('overflow-hide');

        lightboxWrapper.classList.add('visible');

    });
});

// closing the Lightbox on clicking the close-btn
lightboxClose.addEventListener('click', () => {

    document.documentElement.classList.remove('overflow-hide');

    lightboxWrapper.classList.remove('visible')
});

// closing the Lightbox on clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === lightboxWrapper) {

        document.documentElement.classList.remove('overflow-hide');

        lightboxWrapper.classList.remove('visible')
    }
});


/*========-- 08) Swiper-Sliders --========*/

// Services Swiper
const swiper = new Swiper('.services-swiper', {
    effect: "coverflow",
    grabCursor: true,
    speed: 600,
    loop: true,
    loopedSlides: 6,
    centeredSlides: true,
    slideToClickedSlide: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".services-swiper .swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    mousewheel: {
        invert: false,
        releaseOnEdges: true,
    }
});

// Reviews Swiper
const swiper2 = new Swiper('.reviews-swiper', {
    effect: "coverflow",
    grabCursor: true,
    speed: 600,
    loop: true,
    loopedSlides: 4,
    centeredSlides: true,
    slideToClickedSlide: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".reviews-swiper .swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    }
});