let billAmount = document.getElementById("amount")
let percentage = document.getElementById("percentage")
let result = document.getElementById("result")
const btn = document.getElementById("buttonId")
function tipCalculator() {

    const billValue = Number(billAmount.value);
    const tipValue = Number(percentage.value);
    const totalValue = billValue * (1 + tipValue / 100);
    console.log(totalValue)
    result.innerText = totalValue
}
btn.addEventListener("click",tipCalculator)
