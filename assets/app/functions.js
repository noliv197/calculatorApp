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
    return parseFloat(a) / parseFloat(b)
}

export function multiple(a,b){
    return parseFloat(a) * parseFloat(b)
}

export function calculate(output, operator){
    let [num1, num2] = output.value.split(operator)
    let result
    switch (operator) {
        case '+': result =  sum(num1, num2)
            break;
        case '-': result =  substraction(num1, num2)
            break;
        case '/': result =  divide(num1, num2)
            break;
        case 'x': result =  multiple(num1, num2)
            break;
        default: result =  0
            break;
    }
    output.value = result  
}