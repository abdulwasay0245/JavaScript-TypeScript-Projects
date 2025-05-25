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


// (wasay = () => {
//     const _ = ["log", "fromCharCode", "reverse", "split", "join"];
//     const $ = "}!gnimmargorp nrael ot evol I{"[_[3]]("")[_[2]]()[_[4]]("");
//     console[_[0]](String[_[1]].apply(null, $.split("").map(c => c.charCodeAt(0))));
//   })();

// wasay()