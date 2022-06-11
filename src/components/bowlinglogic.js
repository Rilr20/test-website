const bowlinglogic = {
    calculateScore: function (bowlingArray, stop=bowlingArray.length) {
        let points = 0
        let returnArray = []
        let check;
        let checkAgain;
        for (let i = 0; i < stop; i++) {
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
                                points = parseInt(points) + parseInt(bowlingArray[i + 1][0]) + parseInt(bowlingArray[i + 1][1])
                            } else {
                                // let frame = calculateFrame(bowlingArray[i + 1])
                                points = parseInt(points) + parseInt(calculateFrame(bowlingArray[i + 1]))
                                checkAgain = checkNext(bowlingArray[i + 1])
                            }
                        }
                        if (i < bowlingArray.length - 2 && checkAgain == "strike") {
                            points = parseInt(points) + parseInt(bowlingArray[i + 2][0])
                        }
                    }
                    break;
                case "spare":
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
                    points = parseInt(points) + calculateFrame(bowlingArray[i])
                    break;
            }
            // console.log(points);
            returnArray.push(points)
        }
        return returnArray
    },
    displayScoreBoardPoints: function (bowlingArray) {
        let returnArray = []
        let check = ""
        // [["", "X"], ["5", "/"]]
        for (let i = 0; i < bowlingArray.length; i++) {
            check = checkNext(bowlingArray[i])
            switch (check) {
                case "strike":
                    if (bowlingArray[i].length === 3) {
                        let secondItem = bowlingArray[i][1]
                        let thirdItem = bowlingArray[i][2] === 10 ? "X" : bowlingArray[i][2]
                        if (bowlingArray[i][1] === 10) {
                            secondItem = "X"
                        }
                        if (bowlingArray[i][1] + bowlingArray[i][2] === 10) {
                            thirdItem = "/"
                        }
                        returnArray.push(
                            [
                                "X",
                                secondItem,
                                thirdItem
                            ]
                        )
                    } else {
                        returnArray.push(["", "X"])
                    }
                    break
                case "spare":
                    if (bowlingArray[i].length === 3) {
                        returnArray.push(
                            [
                                bowlingArray[i][0],
                                "/",
                                bowlingArray[i][2] == 10 ? "X" : bowlingArray[i][2]
                            ]
                        )
                    } else {
                        returnArray.push([bowlingArray[i][0], "/"])
                    }
                    break
                default:
                    if (bowlingArray[i].length === 3) {
                        returnArray.push([bowlingArray[i][0], bowlingArray[i][1], ""])
                    } else {
                        returnArray.push(bowlingArray[i])
                    }
                    break
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
            case 1:
                return frame[0]
            case 2:
                for (let i = 0; i < frame.length; i++) {
                    points = points + frame[i];
                }
                break;
            case 3:
                for (let i = 0; i < frame.length - 1; i++) {
                    points = points +  frame[i]
                }
                if (points >= 10) {
                    points = points +  frame[2]
                }
                break;
        }
        return points
    },
    bottomRow: function (bowlingArray, stop=bowlingArray.length) {
        let returnArray = []
        let res
        for (let i = 0; i < stop; i++) {
            res = calculateScore(bowlingArray)
            res = sumArray(res, i+1, 0)
            returnArray.push(res)
        }
        return returnArray
    },
    sumArray: function (bowlingArray, stop = bowlingArray.length, startPosition = 0) {
        let points = 0
        for (let i = startPosition; i < stop; i++) {
            points = points + bowlingArray[i];
        }
        return points
    },
    calculateTotalScore: function (bowlingArray) {
        let res = calculateScore(bowlingArray)
        res = sumArray(res)
        return res
    },
    findEmptySlot: function(bowlingArray) {
        let i = 0
        for (i; i < bowlingArray.length; i++) {
            if (bowlingArray[i][0].length === 0 && bowlingArray[i][1].length === 0) {
                break
            }
        }
        return i
    },
    arrayCombine: function (bowlingArray) {
        let emptyIndex = findEmptySlot(bowlingArray)
        let bottomRowRes = bottomRow(bowlingArray, emptyIndex)
        let displayScoreBoardRes = displayScoreBoardPoints(bowlingArray, emptyIndex)
        for (let i = 0; i < bottomRowRes.length; i++) {
            displayScoreBoardRes[i].push(bottomRowRes[i])
        }
        return displayScoreBoardRes
    },
    addToArray: function (number, setBowlingScore, bowlingScore) {
        let tmpArray = bowlingScore;
        let stop = false;
        for (let i = 0; i < tmpArray.length; i++) {
            for (let index = 0; index < tmpArray[i].length - 1; index++) {
                if (tmpArray[i][index] == "") {
                    tmpArray[i][index] = parseInt(number)
                    stop = true
                    break;
                }
            }
            if (stop) {
                break
            }
        }
        let res = arrayCombine(tmpArray)
        setBowlingScore(res)
    }
}

export default bowlinglogic
export const calculateScore = bowlinglogic.calculateScore
export const calculateFrame = bowlinglogic.calculateFrame
export const calculateTotalScore = bowlinglogic.calculateTotalScore
export const checkNext = bowlinglogic.checkNext
export const displayScoreBoardPoints = bowlinglogic.displayScoreBoardPoints
export const bottomRow = bowlinglogic.bottomRow
export const addToArray = bowlinglogic.addToArray
export const arrayCombine = bowlinglogic.arrayCombine
export const sumArray = bowlinglogic.sumArray
export const findEmptySlot = bowlinglogic.findEmptySlot
