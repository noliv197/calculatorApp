import { resetCalculator, incrementCalculator, reset, del, calculate } from "./functions.js"

let output = document.querySelector('output')
let resetButton = document.querySelector("[data-operator='clean']")
let delButton = document.querySelector("[data-operator='erase']")
let calcButton = document.querySelector("[data-operator='calculate']")
let chars = document.querySelectorAll('[data-char]')
let charsArray = [...chars]
let operators = [',','+','-','÷','x']



delButton.addEventListener('click',() => del(output))
resetButton.addEventListener('click', () => reset(output))
calcButton.addEventListener('click',()=> calculate(output))

charsArray.forEach(element => {
    element.addEventListener('click', ()=>{
        if(output.value == 'NaN' ) reset(output)
        else if(output.value == '0' && element.value == '-') resetCalculator(output,element)
        else if(output.value == '0' && operators.indexOf(element.value) == -1) resetCalculator(output,element)
        else incrementCalculator(output,element)
    })
})

