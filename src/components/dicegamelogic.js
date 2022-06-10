import { playerCard } from "./consts";
import Dice from "./dice";

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
        const diceArray = dice
        if (change.length === 0) {
            return dice
        }
        change.forEach(changeNum => {
            diceArray[changeNum] = throwDie()
        });

        setDice(diceArray)
        return diceArray
    },
    pointsPreview: function (diceArray, setGameBoard, gameBoard) {
        const upperArray = upperPoints(diceArray)
        const lowerArray = lowerPoints(diceArray)
        const newPlayerCard = gameBoard
        let fullArray = [].concat(upperArray, lowerArray)
        for (let i = 0; i < fullArray.length; i++) {
            if (!newPlayerCard[i].isSet) {
                newPlayerCard[i].score = fullArray[i]
            }
        }
        totalSum(playerCard)
        setGameBoard(newPlayerCard)
    },

    upperPoints: function (diceArray) {
        let ones = 0, twos = 0, threes = 0, fours = 0, fives = 0, sixes = 0
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
        // const sum = ones + twos + threes + fours + fives + sixes
        // const bonus = sum >= 63 ? 35 : 0
        let returnArray = [ones, twos, threes, fours, fives, sixes, 0]
        return returnArray
    },
    lowerPoints: function (diceArray) {
        const fullArray = []
        fullArray.push(xOfAKind(diceArray, 3))
        fullArray.push(xOfAKind(diceArray, 4))
        fullArray.push(fullHouse(diceArray))
        fullArray.push(straight(diceArray, false))
        fullArray.push(straight(diceArray, true))
        fullArray.push(xOfAKind(diceArray, 5))
        fullArray.push(totalSum(diceArray))
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
            if (obj[key] == 3 || obj[key] == 2) {
                prev = prev - obj[key];
            }
        }
        prev === 0 ? res = 25 : res = 0
        return res
    },
    straight: function (diceArray, large) {
        let points = large ? 40 : 30
        let check = large ? 2 : 1
        points = diceArray.length === 0 ? 0 : points
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
                for (let i = 0; i < diceArray.length - 1; i++) {
                    diceArray[i].isSet ? total += diceArray[i].score : total += 0
                }
                diceArray[diceArray.length - 1].score = total
                diceArray[diceArray.length - 1].isSet = true
                total = diceArray
                break;
            case false:
                for (let i = 0; i < diceArray.length; i++) {
                    total += diceArray[i]
                }
                break;
        }
        return total
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
    bonusPoints: function(setGameBoard, gameBoard) {
        let totalScore = 0
        for (let i = 0; i < 6; i++) {
            totalScore += gameBoard[i].score
        }
        if (totalScore >= 63) {
            gameBoard[6].score = 35
            gameBoard[6].isSet = true
        } else {
            gameBoard[6].score = 0
            gameBoard[6].isSet = true
        }
        setGameBoard(gameBoard)
        return gameBoard
    },
    gameOver: function(setGameState, gameBoard) {
        let isGameOver = true
        for (let i = 0; i < gameBoard.length; i++) {
            if (!gameBoard[i].isSet) {
                isGameOver = false
            }
        }
        if (isGameOver) {
            setGameState("finished")
        }
        return isGameOver
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
export const bonusPoints = dicegamelogic.bonusPoints
export const gameOver = dicegamelogic.gameOver
