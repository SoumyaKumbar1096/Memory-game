const cardArray = [
    {
        name: 'fries',
        img:  'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img:  'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img:  'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:  'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img:  'images/milkshake.png'
    },
    {
        name: 'pizza',
        img:  'images/pizza.png'
    },
    {
        name: 'fries',
        img:  'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img:  'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img:  'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:  'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img:  'images/milkshake.png'
    },
    {
        name: 'pizza',
        img:  'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChoosen = []
let cardsChoosenIds = []
let cardsWon = []


function createBoard(){
    for (let i=0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        // console.log(card)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
    console.log(cardArray)
}

createBoard()

function checkMatch(){

    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChoosenIds[0]
    const opetionTwoId = cardsChoosenIds[1]

    if(optionOneId == opetionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[opetionTwoId].setAttribute('src', 'images/blank.png')
        alert("You have clicked the same image!")
    }

    console.log('check for match!')
    if (cardsChoosen[0] == cardsChoosen[1]){
        alert('You found a Match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[opetionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[opetionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChoosen)
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[opetionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again!')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChoosen = []
    cardsChoosenIds = []

    if (cardsWon.length == (cardArray.length/2)){
        resultDisplay.textContent = 'Congratulations you found them all!'
    }

}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    

    cardsChoosen.push(cardArray[cardId].name)
    cardsChoosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if(cardsChoosen.length === 2){
        setTimeout( checkMatch, 500)
    }
}

