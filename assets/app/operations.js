import { resetCalculator, incrementCalculator, reset, del, calculate, checkFloat, checkEquation } from "./functions.js"

let output = document.querySelector('output')
let resetButton = document.querySelector("[data-operator='clean']")
let delButton = document.querySelector("[data-operator='erase']")
let calcButton = document.querySelector("[data-operator='calculate']")
let chars = document.querySelectorAll('[data-char]')
let charsArray = [...chars]
let operators = ['+','-','÷','x']



delButton.addEventListener('click',() => del(output))
resetButton.addEventListener('click', () => reset(output))
calcButton.addEventListener('click',()=> calculate(output))

charsArray.forEach(element => {
    element.addEventListener('click', ()=>{
        let lastChar = output.value[output.value.length-1]
        // In case the result is NaN, the next click will reset the calculator
        if(output.value == 'NaN' ) reset(output)
        // If the calculator starts with 0 and the element is -, the calculator will display -
        else if(output.value == '0' && element.value == '-') resetCalculator(output,element)
        // , exception
        else if(output.value == '0' && element.value == ',') incrementCalculator(output,element)
        // If the calculator starts with 0 and the element is an operator, the calculator will display 0 plus the operator
        else if(output.value == '0' && operators.indexOf(element.value) == -1) resetCalculator(output,element)
        // Exception ,
        else if(element.value == ',') {
            if(operators.indexOf(lastChar) !== -1) output.value = output.value + '0,'
            else if(checkFloat(output.value)) incrementCalculator(output,element)
        }
        // If the element is an operator, check to not repeat another operator subsequently
        else if(operators.indexOf(element.value) !== -1){
            if(checkEquation(output.value) == 2) calculate(output)
            else if(lastChar == ',') output.value = output.value + '0' + element.value
            else if(operators.indexOf(lastChar) == -1) incrementCalculator(output,element)
        }
        else incrementCalculator(output,element)

    })
})

