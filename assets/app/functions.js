export function resetCalculator(output,element){
    output.value = element.value
}
export function incrementCalculator(output,element){
    output.value = output.value + element.value
}
export function reset(output){
    output.value = '0'
}
export function del(output){
    output.value = output.value.slice(0,-1)
    if(output.value == '') output.value = '0'
}
export function findOperator(str){
    let regex = /[^\d\.,]/
    let result 
    str[0] !== '-' ? result = str.match(regex) : result = str.substring(1).match(regex)
    return (result !== null ? result[0] : result)
}
export function checkEquation(str){
    let result = splitEquation(str)
    if(result.indexOf('') !== -1) result.splice(result.indexOf(''),1)
    return result.length 
}
export function checkFloat(str){
    let result
    let equation = splitEquation(str)
    if(equation.length == 1 && equation[0].indexOf(',') == -1) result = true
    else if(equation.length == 2 && equation[1].indexOf(',') == -1) result = true
    else result = false
    return result
}
export function calculate(output){
    output.value = convertToDot(output.value)
    let operator = findOperator(output.value)
    let [num1, num2] = getNumbers(output.value,operator)
    let result
    switch (operator) {
        case '+': result =  sum(num1, num2)
            break;
        case '-': result =  substraction(num1, num2)
            break;
        case '÷': result =  divide(num1, num2)
            break;
        case 'x': result =  multiple(num1, num2)
            break;
        case null: result = output.value
            break
        default: result =  0
            break;
    }
    result = convertToComma(result)
    output.value = result  
}

function sum(a,b){
    return parseFloat(a) + parseFloat(b)
}

function substraction(a,b){
    return parseFloat(a) - parseFloat(b)
}

function divide(a,b){
    return b == 0 ? NaN : parseFloat(a) / parseFloat(b)
}

function multiple(a,b){
    return parseFloat(a) * parseFloat(b)
}

function convertToDot(str){
    return (str.indexOf(',') !== -1 ? str.replace(',','.') : str)
}
function convertToComma(str){
    return (String(str).indexOf('.') !== -1 ? String(str).replace('.',',') : str)
}
function getNumbers(str,operator){
    return(
        operator == '-' && str[0] == '-' ? 
        [str.slice(0,str.lastIndexOf('-')),str.slice(str.lastIndexOf('-')+1)] :
        str.split(operator)
    )
}
function splitEquation(str){
    let regex = /[^\d\.,]/
    let result  
    str[0] !== '-' ? result = str.split(regex) : result = str.substring(1).split(regex)
    return result
}

