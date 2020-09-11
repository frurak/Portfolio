const experienceScrollContainer = document.getElementById('scroll_experience');
let expContTop = experienceScrollContainer.getBoundingClientRect().top;

const secondarySection = document.querySelector('.secondary_section');
let secTop = secondarySection.offsetTop;

const leftTextContainer = document.getElementById('scroll_about');
let leftTextTop = leftTextContainer.getBoundingClientRect().top;

const projectsContainer = document.getElementById('scroll_projects');
let projectsTop = projectsContainer.offsetTop;

const body = document.querySelector('body');
let bodyBottom = body.getBoundingClientRect().bottom;

// console.log(leftTextTop);

navLinks.forEach((link,index) => {
    link.addEventListener('click', () => {
        if (index === 0) {
            if(mediaMax1199.matches) {
                window.scrollTo({
                    top: secTop,
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: expContTop,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
        if (index === 1) {
            window.scrollTo({
                top: leftTextTop,
                left: 0,
                behavior: 'smooth'
            });
        }
        if (index === 2) {
            window.scrollTo({
                top: projectsTop,
                left: 0,
                behavior: 'smooth'
            });
        }
        if (index === 3) {
            window.scrollTo({
                top: bodyBottom,
                left: 0,
                behavior: 'smooth'
            });
        }
    });
});