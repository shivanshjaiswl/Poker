// models/Game.js
const Deck = require("./Deck");
const Player = require("./Player");

class PokerGame {
    constructor() {
        this.deck = new Deck();
        this.players = [];
        this.pot = 0;
        this.communityCards = [];
        this.currentBet = 0;
        this.maxPlayers = 4
    }

    addPlayer(id, name) {
        if(this.players.length >= this.maxPlayers){
            return {
              error: "Maximum players reached. Only 4 players allowed.",
            };
        }
        const player = new Player(id, name);
        this.players.push(player);
    }

    startGame() {
        this.deck.reset();
        this.communityCards = [];
        this.pot = 0;
        this.currentBet = 0;

        for (let player of this.players) {
            player.hand = this.deck.deal(2);
        }
    }

    dealFlop() {
        this.communityCards.push(...this.deck.deal(3));
    }

    dealTurn() {
        this.communityCards.push(...this.deck.deal(1));
    }

    dealRiver() {
        this.communityCards.push(...this.deck.deal(1));
    }

    bet(playerId, amount) {
        const player = this.players.find((p) => p.id === playerId);
        if (!player) return { error: "Player not found" };

        const betAmount = player.bet(amount);
        this.pot += betAmount;
        this.currentBet = Math.max(this.currentBet, amount);

        return { success: true, pot: this.pot, currentBet: this.currentBet };
    }

    // Placeholder: Implement poker hand evaluation logic here
    evaluateWinner() {
        // Return dummy winner for now
        return this.players[Math.floor(Math.random() * this.players.length)];
    }
}

module.exports = PokerGame;
