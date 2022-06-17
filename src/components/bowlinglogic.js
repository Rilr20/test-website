const bowlinglogic = {
    calculateScore: function (bowlingArray) {
        let points = 0
        let returnArray = []
        let check;
        let checkAgain;
        for (let i = 0; i < bowlingArray.length; i++) {
            points = 0
            checkAgain = ""
            check = checkNext(bowlingArray[i])
            switch (check) {
                case "strike":
                    if (bowlingArray[i].length === 3) {
                        points = parseInt(points) + parseInt(calculateFrame(bowlingArray[i]))
                    } else {
                        points = parseInt(points) + 10
                        if (i < bowlingArray.length - 1) {
                            if (bowlingArray[i + 1].length === 3) {
                                points = parseInt(points) + parseInt(bowlingArray[i + 1][0] == "" ? 0 : bowlingArray[i + 1][0]) + parseInt(bowlingArray[i + 1][1] == "" ? 0 : bowlingArray[i + 1][1])
                            } else {
                                points = parseInt(points) + parseInt(calculateFrame(bowlingArray[i + 1]))
                                checkAgain = checkNext(bowlingArray[i + 1])
                            }
                        }
                        if (i < bowlingArray.length - 2 && checkAgain == "strike") {
                            points = parseInt(points) + parseInt(bowlingArray[i + 2][0] == "" ? 0 : bowlingArray[i + 2][0])
                        }
                    }
                    break;
                case "spare":
                    //tror denna är trasig om man får spare sedan strike
                    if (bowlingArray[i].length === 3) {
                        points += calculateFrame(bowlingArray[i])
                    } else {
                        points = points + 10
                        if (i + 1 < bowlingArray.length) {
                            points = points + bowlingArray[i + 1][0]
                        }
                    }
                    break;
                default:
                    points = parseInt(points) + parseInt(calculateFrame(bowlingArray[i]))
                    break;
            }
            // console.log(points);
            returnArray.push(points)
        }
        return returnArray
    },
    displayScoreboardPoints: function (bowlingArray) {
        let returnArray = []
        let check = ""
        // [["", "X"], ["5", "/"]]
        for (let i = 0; i < bowlingArray.length; i++) {
            check = checkNext(bowlingArray[i])
            if (bowlingArray[i].length === 3) {
                let firstItem = bowlingArray[i][0] == 10 ? "X" : bowlingArray[i][0]
                let secondItem = bowlingArray[i][1] == 10 ? "X" : bowlingArray[i][1]
                let thirdItem = bowlingArray[i][2] == 10 ? "X" : bowlingArray[i][2]
                if (firstItem !== "X" && firstItem + secondItem == 10) {
                    secondItem = "/"
                }
                if (secondItem + thirdItem == 10) {
                    thirdItem = "/"
                }

                returnArray.push(
                    [
                        firstItem,
                        secondItem,
                        thirdItem
                    ])
            } else {
                switch (check) {
                    case "strike":

                        returnArray.push(["", "X"])
                        break
                    case "spare":

                        returnArray.push([bowlingArray[i][0], "/"])
                        break
                    default:
                        returnArray.push(bowlingArray[i])
                        break
                }
            }
        }

        return returnArray
    },
    checkNext: function (bowlingArray) {
        if (bowlingArray[0] === 10) {
            return "strike"
        }
        if (bowlingArray[0] + bowlingArray[1] === 10) {
            return "spare"
        }
        return null
    },
    calculateFrame: function (frame) {
        let points = 0;
        switch (frame.length) {
            // case 1:
            //     return frame[0]
            case 2:
                for (let i = 0; i < frame.length; i++) {
                    points = points + frame[i];
                }
                break;
            case 3:
                for (let i = 0; i < frame.length - 1; i++) {
                    points = points + frame[i]
                }
                if (points >= 10) {
                    points = points + frame[2]
                }
                break;
        }
        return parseInt(points)
    },
    bottomRow: function (bowlingArray, stop = bowlingArray.length) {

        let returnArray = []
        let res
        for (let i = 0; i < stop; i++) {
            res = calculateScore(bowlingArray)
            res = sumArray(res, i + 1, 0)
            returnArray.push(res)
        }
        return returnArray
    },
    sumArray: function (bowlingArray, stop = bowlingArray.length, startPosition = 0) {
        let points = 0

        for (let i = startPosition; i < stop; i++) {

            points = points + parseInt(bowlingArray[i]);

        }
        return points
    },
    findEmptySlot: function (bowlingArray) {
        let i = 0
        for (i; i < bowlingArray.length; i++) {
            if (bowlingArray[i][0].length === 0 && bowlingArray[i][1].length === 0) {
                break
            }
        }
        return i
    },
    addToArray: function (number, setBowlingScore, bowlingScore, setBottomRow, setDisplayScore) {
        number = parseInt(number)
        let stop = false
        for (let i = 0; i < bowlingScore.length; i++) {
            for (let j = 0; j < bowlingScore[i].length; j++) {
                if (bowlingScore[i][j] === 10 && bowlingScore[i].length !== 3) {
                    break
                }
                if (bowlingScore[i][j].length === 0) {
                    if (bowlingScore[i].length === 3 && bowlingScore[i][0].length !== 0 && bowlingScore[i][1].length !== 0 && bowlingScore[i][0] + bowlingScore[i][1] < 10) {
                        stop = true
                        break
                    }
                    bowlingScore[i][j] = number
                    stop = true
                    break
                }
            }
            if (stop) {
                break
            }
        }
        let res = displayScoreboardPoints(bowlingScore)
        let stopInt = findEmptySlot(bowlingScore)
        let frameScore = bottomRow(bowlingScore, stopInt)
        setBottomRow(frameScore)
        setDisplayScore(res)
        setBowlingScore(bowlingScore)
        return [res, frameScore]
    }
}

export default bowlinglogic
export const calculateScore = bowlinglogic.calculateScore
export const calculateFrame = bowlinglogic.calculateFrame
export const checkNext = bowlinglogic.checkNext
export const displayScoreboardPoints = bowlinglogic.displayScoreboardPoints
export const bottomRow = bowlinglogic.bottomRow
export const addToArray = bowlinglogic.addToArray
export const sumArray = bowlinglogic.sumArray
export const findEmptySlot = bowlinglogic.findEmptySlot
