// card options
const cardArray = [
  {
    name: "batman",
    img: "img/batman.jpg",
  },
  {
    name: "blackwidow",
    img: "img/blackwidow.jpg",
  },
  {
    name: "captainamerica",

    img: "img/captainamerica.png",
  },
  {
    name: "harleyquinn",
    img: "img/harleyquinn.jpeg",
  },
  {
    name: "captainamerica",

    img: "img/captainamerica.png",
  },
  {
    name: "wonderwoman",
    img: "img/wonderwoman.jpg",
  },
  {
    name: "hulk",
    img: "img/hulk.jpg",
  },
  {
    name: "hulk",
    img: "img/hulk.jpg",
  },
  {
    name: "hulk",
    img: "img/hulk.jpg",
  },
  {
    name: "blackwidow",
    img: "img/blackwidow.jpg",
  },
  {
    name: "batman",
    img: "img/batman.jpg",
  },
  {
    name: "harleyquinn",
    img: "img/harleyquinn.jpeg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

// create Board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement("img");
    card.setAttribute("src", "img/card.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

//check for matches
function checkForMatch() {
  var cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match.");
    cards[optionOneId].setAttribute("src", "img/blank.png");
    cards[optionTwoId].setAttribute("src", "img/blank.png");
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "img/card.jpg");
    cards[optionTwoId].setAttribute("src", "img/card.jpg");
    alert("Sorry, try again");
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations! You found them all!";
  }
}
// flipcard

function flipCard() {
  var cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}
createBoard();
