let firstCard = getandomCard()
let secondCard = getRandomCard()
let cards =[firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = dcument.getElementById("message-el")
let sumEl = document.getElementsById("sum-el")
let cardsEl = document.getElementsById("cards-el")

function startGame() {
    renderGame
}

function getRandomCard() {
    return 5
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

function newCard()
console.log("Drawing a new card fro the deck!")

let card = getRandomCard
sum += card
cardsEl.push(card)
console.log(cards)
renderGame()


