// const date = new Date()
// const currentYear = date.getFullYear()
// console.log(`Current Year is ${currentYear}`)

// process.stdin.on('data', (data) => {
//     const userYear = data;
//     const result = currentYear - userYear 
//     console.log(`Your Age is ${result}`);
//     process.exit()
    
// })
function ageCalculate() {
    const age = document.getElementById("age");
    const userValue = age.value;
    const result = document.getElementById("result")
    const date = new Date()
    const currentYear = date.getFullYear()
    const userAge = currentYear - userValue;

    result.innerText = userAge


}
btn.addEventListener('click', ageCalculate)