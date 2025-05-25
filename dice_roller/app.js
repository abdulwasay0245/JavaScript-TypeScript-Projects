// const randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1

// console.log(`You got a ${randomNumber}`)


const btn = document.getElementById("rollBtn")
function diceRoll() {
    const dice = document.getElementById("dice")
    const resultDiv = document.createElement("div")
    resultDiv.classList.add("resultDiv")
    document.querySelector("main").appendChild(resultDiv)
}

btn.addEventListener('click', diceRoll)