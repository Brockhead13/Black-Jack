let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack  false
let isAlive = true

let message =""



if (sum <= 20) {
    message = ("Do you want to draw a new card?")
    }
else if (sum === 21) {
    console.log ("Woohoo!  You've got Blackjack!")
}    

else {
    message("You're out of the game!")
    isAlive = false
}

console.log(message)