// models/Deck.js
class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}

class Deck {
    constructor() {
        this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
        this.ranks = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        ];
        this.cards = [];
        this.reset();
    }

    reset() {
        this.cards = [];
        for (let suit of this.suits) {
            for (let rank of this.ranks) {
                this.cards.push(new Card(suit, rank));
            }
        }
        this.shuffle();
    }

    shuffle() {
         for (let i = 0; i < this.cards.length; i++) {
           let shuffle = Math.floor(Math.random() * this.cards.length);

           let temp = this.deck[i];
           this.cards[i] = this.cards[shuffle];
           this.cards[shuffle] = temp;
         }
    }
    
    deal(num) {
        return this.cards.splice(0, num);
    }
}

module.exports = Deck;
