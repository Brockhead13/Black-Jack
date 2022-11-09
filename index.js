for (let i = 10; i < 101; i += 10) {

    console.log(i)

}

let cards = [7,9,3]

for(let i = 0; i < cards.length; i++) {
    console.log(cards[i])
}


let sentence = ["hello ", "my ", "name ", "is ", "Per"]
let greetingEl =document.getElementById("geeting-el")

for (let i = 0; i < sentence.length; i++){
    greetingEl.textContent += sentence[i]
}

let player1Time = 102
let player2Time = 107

function getTotalRaceTime() {
    return player1Time + player2Time
}

let totalTIme = getTotalRaceTime()

console.log(totalTIme)