const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals');
const allClear =document.querySelector('[data-all-clear]');
const dataDel = document.querySelector('[data-del]');
const result = document.getElementById("result");


// NUMBER BUTTONS
numberButtons.forEach(button=>{
    button.addEventListener("click", ()=>{
        let x = button.innerText;
      document.getElementById("result").innerHTML += x;

    })
})

// OPERATION BUTTONS
operationButtons.forEach(button=>{
    button.addEventListener("click", ()=>{
        let x = button.innerText;
      document.getElementById("result").innerHTML += x;
      
    })    
})


// ALL CLEAR

allClear.addEventListener('click',()=>{
    document.getElementById("result").innerHTML = " ";

})

// RESULT
equalsButton.addEventListener('click',()=>{
    let x= result.textContent;
    let y= eval(x)
    document.getElementById("result").innerHTML= y;
})


// DATA DEL
dataDel.addEventListener('click',()=>{
    let x= result.innerText;
    const y = x.slice(0, -1);
    // slice deletes the first character from the end -1 represents how many characters need to be deleted, 0 says where to start the string
     document.getElementById("result").innerHTML = y;

})


