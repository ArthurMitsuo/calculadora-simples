const containerRight = document.querySelector('.container__right');
const littleContainerRight = document.querySelector('.little-container__right');
let div = document.querySelector(".container__right");
let array = []

littleContainerRight.addEventListener('click', () =>{

    littleContainerRight.classList.add('little-container__right-hidden')
    containerRight.classList.remove('container__right-hidden')
    containerRight.classList.add('container__right-normal');
    console.log(containerRight.classList);   
});
containerRight.addEventListener('click', () => {
    littleContainerRight.classList.remove('little-container__right-hidden')
    containerRight.classList.remove('container__right-normal');
    containerRight.classList.add('container__right-hidden')
    console.log(containerRight.classList);
});


//coloca operações anteriores na div da direita
export function salvaContaFeita(calculatorShortMemory, output, resultado){
    div.innerHTML += `${calculatorShortMemory.storagedNumber} ${calculatorShortMemory.operation} ${output.textContent} = ${resultado}<br/><br/>`;
    console.log(div);
}


