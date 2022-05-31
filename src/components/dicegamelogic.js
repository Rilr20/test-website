import { playerCard } from "./consts";
import Dice from "./dice";

//  export default  function throwDie() { } export defaultfunction throwDice(diceArray) { }
const dicegamelogic = {
    throwDie: function () {
        return Math.floor(Math.random() * 6) + 1
    },
    /**
     * 
     * @param {useState} setDice 
     * @param {Array} change contains the rolls that should be changed
     * @param {Array} dice contains all the dice that will be kept
     * @returns {array} with new / old rolls
     */
    throwDice: function (setDice, change, dice) {
        change = change.sort()
        let splicedDice = []
        const diceArray = dice
        if (change.length == 0) {
            return dice
        }

        // for (let i = 0; i < 5; i++) {
        //     if (i < change.length) {
        //         diceArray[i] = throwDie()
        //     } else {
        //         diceArray[i] = dice[i]
        //     }
        // }
        // change.forEach(changeNum => {
        //     console.log("NUM is " + changeNum);
        //     for (let i = 0; i < 5; i++) {
        //         // console.log("loop " + i);
        //         console.log("looperion");
        //         console.log(i);
        //         console.log(changeNum == i);
        //         console.log("looperion stopperino");
        //         if (changeNum == i) {
        //             // console.log("DICE THREW!");
        //             diceArray[i] = throwDie()
        //             break;
        //         } else {
        //             // console.log("OLD dice kept :)");
        //             diceArray[i] = dice[i]
        //         }
        //     }
        // });
        change.forEach(changeNum => {
            diceArray[changeNum] = throwDie()
        });

        // console.log(diceArray);
        setDice(diceArray)
        return diceArray
    },
    pointsPreview: function (diceArray, setGameBoard, gameBoard) {
        let fullArray = []
        // console.log(diceArray);
        const upperArray = upperPoints(diceArray)
        const lowerArray = lowerPoints(diceArray)
        const newPlayerCard = gameBoard
        // console.log(playerCard);
        fullArray = [].concat(upperArray, lowerArray)
        // console.log("array time lolrwerpoaw");
        // console.log(lowerArray);
        // console.log(upperArray);
        // console.log(fullArray);
        for (let i = 0; i < fullArray.length; i++) {
            // console.log(i);
            if (!newPlayerCard[i].isSet) {
                newPlayerCard[i].score = fullArray[i]
            }
        }
        // console.log(playerCard[6]);

        // console.log(playerCard[6]);
        totalSum(playerCard)
        setGameBoard(newPlayerCard)
        return
    },
    upperPoints: function (diceArray) {
        let ones = 0, twos = 0, threes = 0, fours = 0, fives = 0, sixes = 0
        let returnArray = []
        diceArray.forEach(die => {
            switch (die) {
                case 1:
                    ones += die
                    break;
                case 2:
                    twos += die
                    break;
                case 3:
                    threes += die
                    break;
                case 4:
                    fours += die
                    break;
                case 5:
                    fives += die
                    break;
                case 6:
                    sixes += die
                    break;
            }
        });
        const sum = ones + twos + threes + fours + fives + sixes
        const bonus = sum >= 63 ? 35 : 0
        // console.log("bonus");
        // console.log(bonus);
        // console.log("bonus");
        returnArray = [ones, twos, threes, fours, fives, sixes, bonus]
        return returnArray
    },
    lowerPoints: function (diceArray) {
        const testArray = [5, 2, 3, 4, 6]
        const fullArray = []
        fullArray.push(xOfAKind(diceArray, 3))
        fullArray.push(xOfAKind(diceArray, 4))
        fullArray.push(fullHouse(diceArray))
        fullArray.push(straight(diceArray, false))
        fullArray.push(straight(diceArray, true))
        // fullArray.push(straight(diceArray))
        fullArray.push(xOfAKind(diceArray, 5))
        fullArray.push(totalSum(diceArray))
        // console.log("fullArray");
        // console.log(fullArray);
        return fullArray
    },
    xOfAKind: function (diceArray, num) {
        let obj = diceArray.reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {});

        for (const key in obj) {
            if (obj[key] == num && num == 5) {
                return 50
            }
            else if (obj[key] == num && num != 5) {
                return totalSum(diceArray)
            }
        }
        return 0
    },
    fullHouse: function (diceArray) {
        let obj = diceArray.reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {});
        let prev = 5
        let res = 0

        for (const key in obj) {
            // console.log(obj[key]);
            if (obj[key] == 3 || obj[key] == 2) {
                prev = prev - obj[key];
            }
        }
        prev == 0 ? res = 25 : res = 0
        return res
    },
    straight: function (diceArray, large) {
        let points = large ? 40 : 30
        let check = large ? 2 : 1
        for (let i = 0; i < diceArray.length; i++) {
            if (!diceArray.includes(check)) {

                points = 0
                break
            }
            check++
        }
        return points
    },
    totalSum: function (diceArray) {
        let total = 0;
        switch (typeof (diceArray[0]) == "object") {
            case true:
                console.log("OJ ETT OBJECT");
                break;
            case false:
                for (let i = 0; i < diceArray.length; i++) {
                    total += diceArray[i]
                }
                break;
        }
        return total
        // Object.keys(diceArray).forEach(key => {
        //     // console.log(playerCard[key]);
        //     total = total + diceArray[key] == "" ? 0 : parseInt(diceArray[key])
        // });//VA=?!=!=!=!
    },
    // drawDice: function () {
    //     // const diceArray = throwDice()
    //     const diceArray = [1, 2, 2, 3, 4]
    //     let newDice = []
    //     diceArray.forEach(die => {
    //         let res = drawDie(die)
    //         newDice.push(res)
    //     });
    //     // setDice(newDice)
    //     return newDice
    // },
    // drawDie: function (number) {
    //     return <Dice pips={number} />
    // },
    addPoints: function (gameBoard, points, boardId) {
        //lägg till points

        //sätt alla previews till 0
    }
}
export default dicegamelogic
export const throwDie = dicegamelogic.throwDie
export const throwDice = dicegamelogic.throwDice
export const pointsPreview = dicegamelogic.pointsPreview
export const totalSum = dicegamelogic.totalSum
export const upperPoints = dicegamelogic.upperPoints
export const lowerPoints = dicegamelogic.lowerPoints
export const xOfAKind = dicegamelogic.xOfAKind
// export const drawDice = dicegamelogic.drawDice
// export const drawDie = dicegamelogic.drawDie
export const fullHouse = dicegamelogic.fullHouse
export const straight = dicegamelogic.straight
