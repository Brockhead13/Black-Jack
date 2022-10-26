let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message =""
let messageEl = dcument.getElementById("message-el")
let sumEl = document.getElementsById("sum-el")

let cardsEl = document.getElementsById("cards-el")

function startGame(){
    cardsEl.textContent = ""
    sumEl.textContent ="Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        message = "Woohoo!  You've got Blackjack!"

}else {
    message = "you're out of the game!"
    isAlive = false
}
messageEl.textContent= message