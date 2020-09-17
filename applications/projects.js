// ---------- START ---------- Mobile projects photo switch
let projects = {
    src: [
        'Projects_nike_adv.png',
        'Projects_geogo.png',
        'Projects_polar.png'
    ],
    alt: [
        'Nike Advanced Running Project Design',
        'GeoGo Social Application Project Design',
        'Polar.com Rebranding Project Design'
    ]
};

const navDots = document.querySelectorAll('.content_navigation_dots .navigation_dot');
const projectImage = document.querySelector('.project_image');
const projectShadow = document.querySelector('.image_shadow');

let disable = false; //Variable disabling 2nd click before 1st finishes
let dotStylized = [];
let dotClickCounter = 0;

navDots.forEach((dot,index) => {
    dot.addEventListener('click', () => {
        if (!disable) {
            disable = true;

            projectImage.classList.remove('project_image-bounce'); //Remove project image bounce

            dotStylized.push(index);

            //Changing color of clicked dot
            if (index === 0) {
                navDots[0].classList.add('navigation_dot-active');
                navDots[1].classList.remove('navigation_dot-active');
                navDots[2].classList.remove('navigation_dot-active');
                dotClickCounter++;
            } else if (index === 1) {
                navDots[0].classList.remove('navigation_dot-active');
                navDots[1].classList.add('navigation_dot-active');
                navDots[2].classList.remove('navigation_dot-active');
                dotClickCounter++;
            } else {
                navDots[0].classList.remove('navigation_dot-active');
                navDots[1].classList.remove('navigation_dot-active');
                navDots[2].classList.add('navigation_dot-active');
                dotClickCounter++;
            }

            // ---------- START ---------- "Show me more..." btn unhide after 2 or more nav_dots clicks
            const moreProjectsBtn = document.querySelector('.more_projects_container');

            if (dotClickCounter >= 2) {
                moreProjectsBtn.classList.add('more_projects_container-unhide');
            }
            // ---------- END ---------- "Show me more..." btn unhide after 2 or more nav_dots clicks

            //Images animations
            projectImage.classList.add('project_image-active');
            projectShadow.classList.add('image_shadow-active');

            //Switch content image
            setTimeout(() => {
                projectImage.setAttribute('src', `assets/${projects.src[index]}`);
                projectImage.setAttribute('alt', `${projects.alt[index]}`);
            },700);
            //Remove image animation
            setTimeout(() => {
                projectImage.classList.remove('project_image-active');
            },1700);
            //Remove shadow animation
            setTimeout(() => {
                projectShadow.classList.remove('image_shadow-active');

                //Enable clicking
                disable = false;
            },1701); 
        } 
    });
});
// ---------- END ---------- Mobile projects photo switch



// let imageClicker = 0;

// projectImage.addEventListener('click', () => {
//     if (mediaMin1200.matches) {
//         if (imageClicker === 0) {
//             document.querySelector('.main_container').classList.add('project-zoom-in');
//             document.querySelector('.experience_container').classList.add('project-zoom-in');
//             document.querySelector('.about_container').classList.add('project-zoom-in');
//             document.querySelector('.projects_content_container').classList.add('project-zoom-in');
//             document.querySelector('.footer_container').classList.add('project-zoom-in');
    
//             projectShadow.style.display = 'none';
//             projectImage.setAttribute('style', 'position: absolute; left: 50%; top: 0%; transform: translateX(-50%) scale(1.1); cursor: all-scroll;');
//             document.querySelector('.projects_section_container').setAttribute('style', 'position: relative; width: 100%; height: 100%;');
//             document.querySelector('.projects_images_container').setAttribute('style', 'width: 100%; height: 100%;');
//             document.querySelector('.exit_projectsJs').setAttribute('style', 'display: block;');
    
//             window.scrollTo(0, projectImage.offsetTop);
    
//             document.querySelector('.exit_projectsJs').addEventListener('click', () => {
//                 document.querySelector('.main_container').classList.remove('project-zoom-in');
//                 document.querySelector('.experience_container').classList.remove('project-zoom-in');
//                 document.querySelector('.about_container').classList.remove('project-zoom-in');
//                 document.querySelector('.projects_content_container').classList.remove('project-zoom-in');
//                 document.querySelector('.footer_container').classList.remove('project-zoom-in');
    
//                 projectShadow.style.display = 'flex';
//                 projectImage.setAttribute('style', '');
//                 document.querySelector('.projects_section_container').setAttribute('style', '');
//                 document.querySelector('.projects_images_container').setAttribute('style', '');
//                 document.querySelector('.exit_projectsJs').setAttribute('style', 'display: none;');
    
//                 window.scrollTo(0, document.querySelector('.projects_section_container').offsetTop);
                
//                 imageClicker--;
//             });
    
//             imageClicker++;
//         } else {
            
//             document.querySelector('.main_container').classList.remove('project-zoom-in');
//             document.querySelector('.experience_container').classList.remove('project-zoom-in');
//             document.querySelector('.about_container').classList.remove('project-zoom-in');
//             document.querySelector('.projects_content_container').classList.remove('project-zoom-in');
//             document.querySelector('.footer_container').classList.remove('project-zoom-in');
    
//             projectShadow.style.display = 'flex';
//             projectImage.setAttribute('style', '');
//             document.querySelector('.projects_section_container').setAttribute('style', '');
//             document.querySelector('.projects_images_container').setAttribute('style', '');
//             document.querySelector('.exit_projectsJs').setAttribute('style', 'display: none;');
    
//             window.scrollTo(0, document.querySelector('.projects_section_container').offsetTop);
            
//             imageClicker--;
//         }
//     }
// });

