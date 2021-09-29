import { verificaVirgula, clicouVirgula, clicouOperaracao, clicouCalcula,clicouEmNumero, clicouReset, clicouApaga, verificaZeroTecla} from "./controller.js";


const $ = document.querySelector.bind(document);

export function selecionaDaCalculadora(){
    const output = document.querySelector('.display');
    let isTrue = false;

   const calculatorShortMemory = {
    storagedNumber: undefined,
    operation: undefined
    }

    verificaVirgula(output);
    
    const comma = document.querySelector(".comma").addEventListener('click', (evento)=>{ 
        clicouVirgula(comma, output);   
    })
    
    const igual = document.querySelector('#equals').addEventListener('click', (event)=>{
        const value = '=';
        clicouCalcula(calculatorShortMemory, output)
    })
    
    const numbers = document.querySelectorAll(".number__selector").forEach(number => {
            number.addEventListener('click', (event) =>{
                clicouEmNumero(output);
                output.textContent += event.target.innerHTML;
                isTrue = true;
                clicouTrue(true);
                isTrue = false;
            })  
    })
    
    const operations = document.querySelectorAll(".operation").forEach(operation => {
        operation.addEventListener('click', ()=>{

            calculatorShortMemory.operation = operation.innerHTML;
            clicouOperaracao(calculatorShortMemory, output);
        })
    })  

    const reset = document.querySelector('#reset').addEventListener('click', () => clicouReset(calculatorShortMemory, output));

    const apaga = document.querySelector('#apaga').addEventListener('click', () => clicouApaga( output));
    
    //teclas numéricas
    window.addEventListener('keypress', (event)=>{
        console.log(event.keyCode);
        if(event.keyCode == 48){
            verificaZeroTecla(output, "0"); 
        }else if(event.keyCode == 49){
            verificaZeroTecla(output, "1");
        }else if(event.keyCode == 50){
            verificaZeroTecla(output, "2");
        }else if(event.keyCode == 51){
            verificaZeroTecla(output, "3");
        }else if(event.keyCode == 52){
            verificaZeroTecla(output, "4");
        }else if(event.keyCode == 53){
            verificaZeroTecla(output, "5");
        }else if(event.keyCode == 54){
            verificaZeroTecla(output, "6");
        }else if(event.keyCode == 55){
            verificaZeroTecla(output, "7");
        }else if(event.keyCode == 56){
            verificaZeroTecla(output, "8");
        }else if(event.keyCode == 57){
            verificaZeroTecla(output, "9");
        }else
        //teclas operações
         if(event.keyCode == 47){
            calculatorShortMemory.operation = '/';
            clicouOperaracao(calculatorShortMemory, output);
        }else if(event.keyCode == 42){
            calculatorShortMemory.operation = '*';
            clicouOperaracao(calculatorShortMemory, output);
        }else if(event.keyCode == 45){
            calculatorShortMemory.operation = '-';
            clicouOperaracao(calculatorShortMemory, output);
        }else if(event.keyCode == 43){
            calculatorShortMemory.operation = '+';
            clicouOperaracao(calculatorShortMemory, output);
        }else
        //vírgula
         if(event.keyCode == 44 || event.keyCode == 46){
            clicouVirgula(event.keyCode == 44||event.keyCode == 46, output); 
        }else
        //igual
        if(event.keyCode == 13){
            let value = '=';
            clicouCalcula(calculatorShortMemory, output)
        }else
        //reset (R) e apaga (B)
         if(event.keyCode == 114){
            clicouReset(calculatorShortMemory, output);
        }else if(event.keyCode == 98){
            clicouApaga( output);
        }
    });
    
}
export function clicouTrue(n){
    if(n){
        return true;
    }
}
