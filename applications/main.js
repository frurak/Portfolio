const mainTextName = document.querySelector('.main_text .name');
const mainTextDescr = document.querySelector('.main_text .name_descr');
const secondaryText = document.querySelector('.secondary_text_container');
const socials = document.querySelector('.socials_main_container');
const motto = document.querySelector('.motto');

const navLinks = document.querySelectorAll('.nav_links .nav_link');

const projectsH1 = document.querySelector('.content_text h1');
const projectsH4 = document.querySelector('.content_text h4');

// const mediaMax413 = window.matchMedia('(max-width: 413px)');
// const mediaMax575 = window.matchMedia('(min-width: 414px) and (max-width: 575px)');
// const mediaMax767 = window.matchMedia('(min-width: 576px) and (max-width: 767px)');
// const mediaDevice375 = window.matchMedia('(device-width: 375px)');
// const mediaDevice280 = window.matchMedia('(device-width: 280px)');
// const mediaMax991 = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
const mediaMax1199 = window.matchMedia('(max-width: 1199px)');
const mediaMin1200 = window.matchMedia('(min-width: 1200px)');



window.onload = () => {
    //Run function when window.width is >= 1200px
    if (mediaMin1200.matches) {
        mainTextName.classList.add('name-active');
        mainTextDescr.classList.add('name_descr-active');
        secondaryText.classList.add('secondary-active');
        socials.classList.add('socials-active');
        motto.classList.add('motto-active');

        navLinks.forEach((link,index) => {
            link.classList.add('nav_links-active');
            if (index === 1) {
                link.classList.add('.nav_links-active');
                link.style.animationDelay = '2.9s';
                link.classList.remove('.nav_links-active');
            }
            if (index === 2) {
                link.classList.add('.nav_links-active');
                link.style.animationDelay = '3.0s';
                link.classList.remove('.nav_links-active');
            }
            if (index === 3) {
                link.classList.add('.nav_links-active');
                link.style.animationDelay = '3.1s';
                link.classList.remove('.nav_links-active');
            }
            link.classList.remove('.nav_links-active');
        });
    } 
    //Run function when window.width is < 1200px (mobile & tablet devices)
    else {
        mainTextName.classList.add('name-active');
        mainTextDescr.classList.add('name_descr-active');
    }

    //Load navigation dots pseudoclasses (color) ---- original in projects.js
    navDots[0].classList.add('navigation_dot-window-onload');
    navDots[0].classList.add('navigation_dot-active');
    navDots[1].classList.add('navigation_dot-window-onload');
    navDots[2].classList.add('navigation_dot-window-onload');
    projectsH1.style.opacity = '0';
    projectsH4.style.opacity = '0';
    projectsH1.style.opacity = '0';
}

// ---------- START ---------- Projects section TEXT on-scroll appear
const subheader2 = document.querySelector('.subheader-offsetTop');
let subheader2Top = subheader2.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY >= subheader2Top) {
        projectsH1.classList.add('projectsH1-active');
        projectsH4.classList.add('projectsH4-active');
        navDots.forEach((dot,index) => {
            dot.classList.add('dot-active');
            if (index === 1) {
                dot.style.animationDelay = '0.85s';
            }
            if (index === 2) {
                dot.style.animationDelay = '1s';
            }
        });
    }
});
// ---------- END ---------- Projects section TEXT on scroll appear
// ---------- START ---------- Footer dot bounce
const footerDot = document.querySelector('.footer_left_content h1 .footer_left_dot');

window.addEventListener('scroll', () => {
    if (window.innerHeight >= document.querySelector('.bottoms_socials').getBoundingClientRect().bottom) {
        footerDot.classList.add('footer_left_dot-active');
    }
});
// ---------- END ---------- Footer dot bounce
// ---------- START ---------- Menu Open/Close
const nav = document.querySelector('nav');
const menuBtn = document.querySelector('.menu_btn');
const toggleLines = document.querySelector('.toggle_line');
let menuClickCounter = 0;

let menuOpen = false; //Detects if menu is open (helps with fixing the bug in pageScrollMenu.js)

menuBtn.addEventListener('click', () => {
    if (mediaMax1199.matches && !menuOpen) {
        if (menuClickCounter === 0) {
            menuOpen = true;
            console.log(menuClickCounter);
            nav.classList.add('nav-active1');
            nav.classList.remove('nav-active2');
            nav.classList.remove('nav-active3');
    
            toggleLines.classList.add('toggle_line-active1');
            toggleLines.classList.remove('toggle_line-active2');

            if (mediaMax1199.matches) {
                navLinks.forEach((link,index) => {
                    link.style.animation = '';  
                    link.classList.add('nav_links-activeMax1199px');
                    if (index === 1) {
                        link.style.animationDelay = '0.85s';
                    }
                    if (index === 2) {
                        link.style.animationDelay = '0.90s';
                    }
                    if (index === 3) {
                        link.style.animationDelay = '0.95s';
                    }  
                });
            }
            
            menuClickCounter++;
        } else {
            console.log(menuClickCounter);
            if (mediaMax1199.matches) {
                navLinks.forEach((link,index) => {             
                    link.style.animation = '';            
                    link.style.animation = 'mainFadeBack 0.50s ease-in-out both';            
                });
            }
            
            nav.classList.add('nav-active2');
            nav.classList.remove('nav-active1');
            nav.classList.remove('nav-active3');
    
            toggleLines.classList.add('toggle_line-active2');
            toggleLines.classList.remove('toggle_line-active1');

            menuClickCounter--;
        }
        menuOpen = false;
    }
});

if (mediaMax1199.matches) {
    navLinks.forEach((link,index) => {
        link.addEventListener('click', () => {
            navLinks.forEach((link,index) => {             
                link.style.animation = '';            
                link.style.animation = 'mainFadeBack 0.50s ease-in-out both';            
            });
            nav.classList.add('nav-active3');
            nav.classList.remove('nav-active1');
    
            toggleLines.classList.add('toggle_line-active2');
            toggleLines.classList.remove('toggle_line-active1');
    
            menuClickCounter--;
        });
    });
}

// ---------- END ---------- Menu Open/Close

