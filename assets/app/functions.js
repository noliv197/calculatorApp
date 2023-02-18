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

export function sum(a,b){
    return parseFloat(a) + parseFloat(b)
}

export function substraction(a,b){
    return parseFloat(a) - parseFloat(b)
}

export function divide(a,b){
    return b == 0 ? NaN : parseFloat(a) / parseFloat(b)
}

export function multiple(a,b){
    return parseFloat(a) * parseFloat(b)
}

export function calculate(output){
    output.value = convertToDot(output.value)
    let operator = findOperator(output.value)
    let [num1, num2] = getNumbers(output.value,operator)
    console.log(operator)
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

function convertToDot(str){
    return (str.indexOf(',') !== -1 ? str.replace(',','.') : str)
}
function convertToComma(str){
    return (String(str).indexOf('.') !== -1 ? String(str).replace('.',',') : str)
}
function findOperator(str){
    let regex = /[^\d\.]/
    let result
    str[0] !== '-' ? result = str.match(regex) : result = str.substring(1).match(regex)
    return (result !== null ? result[0] : result)
}
function getNumbers(str,operator){
    return(
        operator == '-' && str[0] == '-' ? 
        [str.slice(0,str.lastIndexOf('-')),str.slice(str.lastIndexOf('-')+1)] :
        str.split(operator)
    )
}

function checkLastChar(element){
    
}