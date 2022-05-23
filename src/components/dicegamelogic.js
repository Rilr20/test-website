
//  export default  function throwDie() { } export defaultfunction throwDice(diceArray) { }
const dicegamelogic = {
    throwDie: function() {
        return Math.floor(Math.random() * 6) + 1
    },
    throwDice: function() {
        for (let i = 0; i < diceArray.length; i++) {
            diceArray[i] = throwDice
        }
        return diceArray;
    }
}
export default dicegamelogic
export const throwDie = dicegamelogic.throwDie
export const throwDice = dicegamelogic.throwDice