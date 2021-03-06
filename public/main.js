// DONE: when click here is clicked, a new card should show up under hand-face up

const qs = (e) => document.querySelector(e)

let suits = ['Hearts ♥️', 'Clubs ♣️', 'Spades ♠️', 'Diamonds ♦️']
let faces = [
  { name: 'A', value: '1' },
  { name: '2', value: '2' },
  { name: '3', value: '3' },
  { name: '4', value: '4' },
  { name: '5', value: '5' },
  { name: '6', value: '6' },
  { name: '7', value: '7' },
  { name: '8', value: '8' },
  { name: '9', value: '9' },
  { name: '10', value: '10' },
  { name: 'J', value: '11' },
  { name: 'Q', value: '12' },
  { name: 'K', value: '13' }
]
let deck = []
let j = 0
let i = 52
let card

const createDeck = () => {
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
    for (let faceIndex = 0; faceIndex < faces.length; faceIndex++) {
      deck.push({
        suit: suits[suitIndex],
        name: faces[faceIndex].name,
        value: faces[faceIndex].value
      })
    }
  }
}

const randomFirstCard = () => {
  createDeck()
  const randomNumber = Math.floor(Math.random() * 52)
  const randomCard = deck[randomNumber]
  const formattedCard = `${randomCard.name} of ${randomCard.suit}`
  qs('.faceUp').textContent = formattedCard
}

const randomSecondCard = () => {
  const randomNumber = Math.floor(Math.random() * 52)
  const randomCard = deck[randomNumber]
  const formattedCard = `${randomCard.name} of ${randomCard.suit}`
  qs('.faceUp').textContent = formattedCard
}

const main = () => {
  qs('.newFirstCard').addEventListener('click', () => randomFirstCard())
  qs('.faceUp').addEventListener('click', () => randomSecondCard())
}

document.addEventListener('DOMContentLoaded', main)
