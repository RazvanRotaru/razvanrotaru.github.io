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
const portfolioContents = Array.from(document.querySelectorAll('.portfolio__content'))

qualificationTabs.forEach(tab => {
    const target = document.querySelector(tab.dataset.target)

    if (target.classList.contains('qualification__active')){
        target.style.maxHeight = target.scrollHeight + 'px';
    } else {
        target.style.maxHeight = null;
    }

    tab.addEventListener('click', () => {
        // console.log(target)
        // console.log(target.style)

        // console.log(tab)
        // console.log(tab.style)

        if (tab.classList.contains('portfolio__content')) {
            portfolioContents.filter(content => content != tab).forEach(n => {
                n.classList.remove('qualification__active')
                const target = document.querySelector(n.dataset.target)
                target.classList.remove('qualification__active')
                target.style.maxHeight = null;
            })
        }

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
window.addEventListener('scroll', function() {
	var element = document.querySelector('.portfolio__grid');

    if (element.classList.contains('portfolio__active')) {
        return;
    }

	var position = element.getBoundingClientRect();
    var thresh = 300;

	// checking whether fully visible
	if(position.top >= thresh && position.bottom + thresh <= window.innerHeight) {
		// console.log('Element is fully visible in screen');
        element.style.transform = null
	}

	// checking for partial visibility
	if(position.top + thresh < window.innerHeight && position.bottom >= thresh) {
		// console.log('Element is partially visible in screen');
        var diff = position.bottom - this.window.innerHeight;
        // console.log('diff: ' + diff)
        element.style.transform = 'rotateY(' + diff / 10 + 'deg)'
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header')
    } else {
        nav.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollTop() {
    const scrollTop = document.getElementById('scroll-up')
    if (this.scrollY >= 560) {
        scrollTop.classList.add('show-scroll')
    } else {
        scrollTop.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})