const containerRight = document.querySelector('#container__right');
const checkbox = document.querySelector('#checkbox');


checkbox.addEventListener("change", () =>{
    if(checkbox.checked){
        containerRight.classList.remove("container__right-hidden");
        containerRight.classList.add("container__right");
    }else{
        containerRight.classList.remove("container__right");
        containerRight.classList.add("container__right-hidden");
    }
})

containerRight.addEventListener("dblclick", (e)=>{
    e.preventDefault;
    containerRight.innerHTML = '';
});

//coloca operações anteriores na div da direita
let counter = 0;
export function salvaContaFeita(calculatorShortMemory, output, resultado){
    counter++;
    console.log(containerRight.innerHTML);
    if(counter === 9){
        containerRight.innerHTML += "clique duas vezes para limpar a tabela";
    }else{
        containerRight.innerHTML += `<li>${calculatorShortMemory.storagedNumber} ${calculatorShortMemory.operation} ${output.textContent} = ${resultado}</li><br/><br/>`;
    }
}

//container draggable
let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;
let target = null;

containerRight.addEventListener("mousedown", dragStart); 
containerRight.addEventListener("mouseup", dragEnd); 
containerRight.addEventListener("mousemove", drag); 

function dragStart(e){
    if(e.target == containerRight){
        active = true;
    }
    target = e.target;
    
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
}

function dragEnd(){
    initialX = currentX;
    initialY = currentY;

    active = false;
}

function drag(e){
    if(active){
        e.preventDefault();

        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, target)
    }
}

function setTranslate(xPosition, yPosition, element){
    element.style.transform = "translate3d(" + xPosition + "px, " + yPosition + "px, 0)";
}