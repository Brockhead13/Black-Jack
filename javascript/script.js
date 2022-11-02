let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message =""
let messageEl = dcument.getElementById("message-el")
let sumEl = document.getElementsById("sum-el")

let cardsEl = document.getElementsById("cards-el")

function startGame(){
    renderGame
}

function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
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

let card = 6
sum += card
cardsEl.push(card)
console.log(cards)
renderGame()


let experience = ["Certified ABA Therapist, Berea College Alumni, UT Grad School"]

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you, how about you?",
    "All good. Been working on my protolio lately."
]


let newMesage = "Same here!"    


let newMessage = "Same here!"
let per = ["per Quinton Brockman", 48, true]
   
  
console.log(messages.pop());
console.log(messages)  
