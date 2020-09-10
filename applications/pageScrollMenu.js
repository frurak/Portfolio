let scrollPos = 0;
const topBar = document.querySelector('.topbar');

//Define if user scrolls UP od DOWN
window.addEventListener('scroll', () => {
    if (mediaMax1199.matches && menuClickCounter === 0) {
        if (document.querySelector('body').getBoundingClientRect().top > scrollPos) {
            topBar.classList.add('topbar-show');
            topBar.classList.remove('topbar-hide');
        } else {
            // ---- START ---- Fixing the bug - when user starts scrollind DOWN and immediately click toggle menu btn, the tobbar hides and there are only nav_links visible.
            menuOpen = true;
            setTimeout(() => {
                menuOpen = false;
            },500);
            // ---- END ---- Fixing the bug

            topBar.classList.add('topbar-hide');
            topBar.classList.remove('topbar-show');
        }
        //Reset scrollPos after every single scroll
        scrollPos = document.querySelector('body').getBoundingClientRect().top;
    }
});