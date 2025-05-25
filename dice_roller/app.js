// const randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1

// console.log(`You got a ${randomNumber}`)

let elementNumber = 1
const btn = document.getElementById("rollBtn")
function diceRoll() {
    const dataSection = document.getElementById("data")
    const dice = document.getElementById("dice")
    dice.innerHTML = ""
    const randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    dice.classList.add("roll")
    setTimeout(() => {
        dice.classList.remove("roll")
        for (let index = 1; index <= randomNumber; index++) {
            const resultDiv = document.createElement("div")
            resultDiv.classList.add("dot")
            dice.appendChild(resultDiv)
            
        }
    }, 500);
    
    const dataElements = document.createElement("div")
    const heading = document.createElement("h1")
    dataElements.classList.add("dataElement")
    dataSection.appendChild(dataElements)
    dataElements.appendChild(heading)   
    heading.innerText = elementNumber;
    elementNumber = elementNumber + 1
}


btn.addEventListener('click', diceRoll)