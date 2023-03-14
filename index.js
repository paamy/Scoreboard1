let scoreEl = document.getElementById("score")
let homeCount = 12

let scoreGuestEl = document.getElementById("score-guest")
let guestCount = 5

// write functions that counting home score: +1, +2, +3
function homeOne() {
    //console.log("One")
    homeCount = homeCount + 1
    scoreEl.innerText = homeCount
}

function homeTwo() {
    //console.log("Two")
    homeCount += 2
    scoreEl.innerText = homeCount
}

function homeThree() {
    //console.log("Three")
    homeCount += 3
    scoreEl.innerText = homeCount
}

// Write Functions that counting guest score: +1, +2, +3

function guestOne() {
    //console.log("Clicked One")
    guestCount += 1
    scoreGuestEl.innerText = guestCount
}

function guestTwo() {
    //console.log("Clicked Two")
    guestCount += 2
    scoreGuestEl.innerText = guestCount
}

function guestThree() {
    //console.log("Clicked Three")
    guestCount += 3
    scoreGuestEl.innerText = guestCount
}