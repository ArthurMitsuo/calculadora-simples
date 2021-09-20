export function qualOperacao(calculatorShortMemory, output){
    if(calculatorShortMemory.operation == '+'){
        return parseFloat(calculatorShortMemory.storagedNumber) + parseFloat(output.textContent);
    }else if(calculatorShortMemory.operation == '-'){
        return parseFloat(calculatorShortMemory.storagedNumber) - parseFloat(output.textContent);
    }else if(calculatorShortMemory.operation == '*'){
        return parseFloat(calculatorShortMemory.storagedNumber) * parseFloat(output.textContent);
    }else if(calculatorShortMemory.operation == '/'){
        return parseFloat(calculatorShortMemory.storagedNumber) / parseFloat(output.textContent);
    }
}
