let firstCard = []
let secondCard = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

console.log()

function getRandomCard() {
    return Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
     } else if (randomNumber === 1) {
        return 11
     } else {
        return randomNumber
     }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame
}

function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){ 
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        message = "Woohoo!  You've got Blackjack!"
    }else {
    message = "you're out of the game!"
    isAlive = false
   }
messageEl.textContent= message
}

function newCard() {

let card = getRandomCard()
sum += card
cardsEl.push(card)
console.log(cards)
renderGame()

}


let randomNumber = Math.floor( Math.random() *  7 ) + 1

console.log(randomNumber)

function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}

console.log( rollDice() )