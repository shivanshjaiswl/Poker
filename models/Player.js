// models/Player.js
class Player {
  constructor(id, name, chips = 1000) {
    this.id = id;
    this.name = name;
    this.chips = chips;
    this.hand = [];
    this.inGame = true;
  }

  receiveCards(cards) {
    this.hand.push(...cards);
  }

  bet(amount) {
    if (amount > this.chips) {
      throw new Error("Not enough chips");
    }
    this.chips -= amount;
    return amount;
  }
}

module.exports = Player;
