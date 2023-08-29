const themeSwitch = document.getElementById('dark-mode__button')
const themeSwitchIcon = document.getElementById('dark-mode__icon')
var themeChecker = localStorage.getItem('dark-mode')

if (themeChecker == 'on') {
    document.body.classList.add('dark-mode')
    localStorage.setItem('dark-mode', 'on')
    themeSwitchIcon.classList.replace('fa-moon', 'fa-sun')
}

themeSwitch.addEventListener('click', () => {
    switchDarkOrLightMode()
})

function switchDarkOrLightMode() {
    themeChecker = localStorage.getItem('dark-mode')

    if (themeChecker === 'on') {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('dark-mode', 'off')
        themeSwitchIcon.classList.replace('fa-sun', 'fa-moon')
    
    } else {
        document.body.classList.add('dark-mode')
        localStorage.setItem('dark-mode', 'on')
        themeSwitchIcon.classList.replace('fa-moon', 'fa-sun')

    }

}