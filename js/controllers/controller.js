import {qualOperacao} from '../model/calcula.js';
import {clicouTrue} from './selecionaNumero.js'
import {salvaContaFeita} from './sideDivs.js'
//contador para verificar posição do separador decimal
let contador = 1;

//valida o click no botão chamado de vírgula, que, na verdade, é um ponto
export function clicouVirgula(comma, output){
    const value = '.';

    if(contador === 1){
        if(output.textContent == '0' || output.textContent == 0){
            output.textContent += value;
            contador++;
            console.log(contador)
        }else{
            output.textContent += value;
            contador++;
            console.log(contador)
        } 
    }else{
        console.log('vírgula, já clicado');
    }      
}

//validam os clicks nos botões de operação
export function clicouOperaracao(calculatorShortMemory, output){
    if(calculatorShortMemory.operation == '-' && output.textContent == '0'){
        
        output.textContent = '-';
        calculatorShortMemory.storagedNumber = undefined;
    }else if(output.textContent == '0' && calculatorShortMemory.operation != '-'){
        
        output.textContent = "Impossível, aperte R";
    }else{
        
        contador = 1;
        verificaCliqueOperacao(calculatorShortMemory, output)   
    }   
}
function verificaCliqueOperacao(calculatorShortMemory, output){
    if(calculatorShortMemory.storagedNumber == undefined){
        
        calculatorShortMemory.storagedNumber = output.textContent;
        output.textContent = '0';
        console.log(calculatorShortMemory.storagedNumber);
    }else{
        
        salvaContaFeita(calculatorShortMemory, output, qualOperacao(calculatorShortMemory, output))
        output.textContent = qualOperacao(calculatorShortMemory, output);
        calculatorShortMemory.storagedNumber = output.textContent;
        
        if(clicouTrue){
            output.textContent = '0';
        }
    } 
}

//tira o zero, ou não, padrão do display
export function clicouEmNumero(output) {
    let lista = output.textContent.split('');
    if(lista[1] == '.'){
        return true;
    }else if(lista[0]==0){
        output.textContent = '';
    }
}

//valida o click no botão de calcular
export function clicouCalcula(calculatorShortMemory, output){
    if(calculatorShortMemory.storagedNumber == undefined){
       
        output.textContent = 'Impossível, aperte R';
    }else{
        
        let resultado = qualOperacao(calculatorShortMemory, output);
        salvaContaFeita(calculatorShortMemory, output, resultado);
        output.textContent = resultado;
        reset(calculatorShortMemory, output)
    }
}
//botão reset e função reset
export function reset(calculatorShortMemory, output){
    
    contador = 1;
    calculatorShortMemory.storagedNumber = undefined;
    calculatorShortMemory.operation= undefined;
}
export function clicouReset(calculatorShortMemory, output){
    
    output.textContent = '0';
    reset(calculatorShortMemory, output)
}

//botão apaga
export function clicouApaga(output){
    if(output.textContent != '0'){
        output.textContent = output.textContent.replace(/.$/, ''); 
        if(output.textContent == ''){
            output.textContent += '0';
        }
    }
}

//teclas do teclado numérico

export function verificaZeroTecla(output, valor){
    if(output.textContent === "0"){
        output.textContent = valor;
    }else{
        output.textContent += valor;
    }
}