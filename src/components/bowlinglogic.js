const bowlinglogic = {
    calculateScore: function (bowlingArray) {
        let points = 0
        let check;
        let checkAgain;
        for (let i = 0; i < bowlingArray.length; i++) {
            checkAgain = ""
            check = checkNext(bowlingArray[i])
            switch (check) {
                case "strike":
                    if (bowlingArray[i].length === 3) {
                        points += calculateFrame(bowlingArray[i])
                    } else {
                        points = points + 10
                        if (i < bowlingArray.length - 1) {
                            if (bowlingArray[i + 1].length === 3) {
                                points = points + bowlingArray[i + 1][0] + bowlingArray[i + 1][1]
                            } else {
                                points += calculateFrame(bowlingArray[i + 1])
                                checkAgain = checkNext(bowlingArray[i + 1])
                            }
                        }
                        if (i < bowlingArray.length - 2 && checkAgain == "strike") {
                            points += bowlingArray[i + 2][0]
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
                    // console.log(calculateFrame(bowlingArray[i]));
                    points += calculateFrame(bowlingArray[i])
                    break;
            }
        }
        return points
    },
    displayScoreBoardPoints: function (bowlingArray) {
        let returnArray = []
        let check = ""
        // [["", "X"], ["5", "/"]]
        for (let i = 0; i < bowlingArray.length; i++) {
            check = checkNext(bowlingArray[i])
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
                    points += frame[i];
                }
                break;

            case 3:
                for (let i = 0; i < frame.length - 1; i++) {
                    points += frame[i]
                }
                if (points >= 10) {
                    points += frame[2]
                }
                break;
        }
        return points
    },
    bottomRow: function (bowlingArray) {
        let returnArray = []
        let res
        let tmpArray = []
        for (let i = 0; i < bowlingArray.length; i++) {
            tmpArray.push(bowlingArray[i])
            res = calculateScore(tmpArray)
            returnArray.push(res)
        }
        return returnArray
    },
    arrayCombine: function (bowlingArray) {
        let bottomRowRes = bottomRow(bowlingArray)
        let displayScoreBoardRes = displayScoreBoardPoints(bowlingArray)
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
        console.log(tmpArray);
        let res = arrayCombine(tmpArray)
        console.log(res);

        setBowlingScore(res)
    }
}

export default bowlinglogic
export const calculateScore = bowlinglogic.calculateScore
export const calculateFrame = bowlinglogic.calculateFrame
export const checkNext = bowlinglogic.checkNext
export const displayScoreBoardPoints = bowlinglogic.displayScoreBoardPoints
export const bottomRow = bowlinglogic.bottomRow
export const addToArray = bowlinglogic.addToArray
export const arrayCombine = bowlinglogic.arrayCombine
