// const randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1

// console.log(`You got a ${randomNumber}`)

let elementNumber = 1
const btn = document.getElementById("rollBtn")
const dataSection = document.getElementById("data")
const dice = document.getElementById("dice")


function getDiceFace(rollResult) {
    switch (rollResult) {
      case 1:
        return "&#9856;";
      case 2:
        return "&#9857;";
      case 3:
        return "&#9858;";
      case 4:
        return "&#9859;";
      case 5:
        return "&#9860;";
      case 6:
        return "&#9861;";
      default:
        return "";
    }
  }


function diceRoll() {
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
    const smallDice = document.createElement("span")
    dataElements.classList.add("dataElement")
    dataSection.appendChild(dataElements)
    dataElements.appendChild(heading)
    dataElements.appendChild(smallDice)
    smallDice.classList.add("smallDice")
    smallDice.innerHTML = getDiceFace(randomNumber)
    heading.innerText = elementNumber;
    elementNumber = elementNumber + 1
   
}


btn.addEventListener('click', diceRoll)