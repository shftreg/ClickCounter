let saveEl  = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment() {
    count++
    countEl.textContent = count
}

function save() {
    countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}

console.log(count)