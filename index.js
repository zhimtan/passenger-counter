let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.textContent = count
}

function save() {
    let currentCount = count + " - "
    saveEl.textContent += currentCount
    countEl.textContent = 0
    count = 0
}
