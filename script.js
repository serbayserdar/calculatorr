const squaredResult = document.getElementById("squared-result")
const cubedResult = document.getElementById("cubed-result")
const inputNumber = document.getElementById("input-number")
const historyContainer = document.getElementById("history-container")



const calculateResult=()=>{
    squaredResult.innerText=inputNumber.value * inputNumber.value

    cubedResult.innerText=inputNumber.value * inputNumber.value * inputNumber.value
    
    const newNumber = document.createElement('p')
    newNumber.innerText= inputNumber.value;
    newNumber.setAttribute("id","search")
    historyContainer.appendChild(newNumber)

    inputNumber.value="";
}

const deleteLastEntry=()=>{
    historyContainer.removeChild(historyContainer.lastChild)
    squaredResult.innerText='?';
    cubedResult.innerText='?';
}


const clearHistory=()=>{
    while(historyContainer.firstChild){
        historyContainer.removeChild(historyContainer.lastChild)
    }
    squaredResult.innerText='?';
    cubedResult.innerText='?';
}