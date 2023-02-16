import style from './theme.js'

let root = document.documentElement.style;
let variables = Object.keys(style.theme1)
let buttons = document.querySelectorAll('[data-theme]')
let buttonsArray = [...buttons]
let theme = 'theme1'

buttonsArray.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.remove('invisible')
        button.classList.add('visible')
        theme =button.dataset.theme
        variables.forEach(variable => root.setProperty(variable, style[theme][variable]))

        buttonsArray.filter(element => element != button).forEach(item => {
            item.classList.remove('visible')
            item.classList.add('invisible')
        })

    })

})




