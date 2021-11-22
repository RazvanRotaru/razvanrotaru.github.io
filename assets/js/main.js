/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When a nav__link item is clicked, the show-menu class is removed from navMenu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    var content = this.nextElementSibling;
    // console.log(content)
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      this.classList.remove('skills__open')
      this.classList.add('skills__close')
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.classList.remove('skills__close')
      this.classList.add('skills__open')
    } 
}

skillsHeader.forEach(el => el.addEventListener('click', toggleSkills))

/*==================== QUALIFICATION TABS ====================*/
const qualificationTabs = document.querySelectorAll('[data-target]')

qualificationTabs.forEach(tab => {
    const target = document.querySelector(tab.dataset.target)

    if (target.classList.contains('qualification__active')){
        target.style.maxHeight = target.scrollHeight + 'px';
    } else {
        target.style.maxHeight = null;
    }

    tab.addEventListener('click', () => {
        console.log(target)
        console.log(target.style)


        if (target.classList.contains('qualification__active')){
            target.style.maxHeight = null;
        } else {
            target.style.maxHeight = target.scrollHeight + "px";
        }
        target.classList.toggle('qualification__active')
        tab.classList.toggle('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 