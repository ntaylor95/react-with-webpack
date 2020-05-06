class Card {
    constructor(faceVal, suit) {
        this.faceVal = faceVal,
        this.suit = suit
    }
}

const cards = [];
// const card1 = new Card('ace');
// cards.push(card1);

// jack => 11
// queen => 12
// king => 13

// 4 sourts
var suits = ['clubs', 'hearts', 'spades', 'diamonds'];
var cardFaceVals  = ['queen', 'jack', 'king'];

suits.forEach(suit => {
    for (var i=1; i<=13; i++) {
        let card = new Card(i, suit);
        cards.push(card);
    }

    cardFaceVals.forEach(c => {
        let card = new Card(c, suit);
        cards.push(card);
    })

});

const shuffle = (deck) => {
    const half = deck.length/2;
    const deck1 = deck.slice(0, half);
    const deck2 = deck.slice(half);

    const shuffledDeck = [];

    for (var i=0; i<half; i++) {
        shuffledDeck.push(deck2[i]);
        shuffledDeck.push(deck1[half-i]);
    }

    return shuffledDeck;
}

const deck2 = shuffle(cards);
console.log(deck2);

deck2.sort((a,b) => {
    if (Number(a) && Number(b)) {
        return a > b;
    }
}).reverse();

// const shuffle = (deck) => {
//     let shuffledDeck = [];

//     //sort by number first and then alphabetically
//     dec

//     for (var i=0; i<deck.length; i++) {
//         let randomIndex = Math.round(Math.random()*51);



//         console.log(randomIndex);
        


//         shuffledDeck.push(deck[randomIndex]);
//     }

//     return shuffledDeck;
// }

console.log(deck2);


