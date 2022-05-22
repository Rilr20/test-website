
module.exports.throwDie = function throwDie() {
    return Math.floor(Math.random() * 6) + 1
}
module.exports.throwDice = function throwDice(diceArray) {
    for (let i = 0; i < diceArray.length; i++) {
        diceArray[i] = throwDice
    }
    return diceArray;
}
