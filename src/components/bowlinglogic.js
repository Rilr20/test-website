const bowlinglogic = {
    calculateScore: function (bowlingArray, stop = bowlingArray.length) {
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
                                //onödig kod? kanske flyttas
                                // points = parseInt(points) + parseInt(bowlingArray[i + 1][0]) + parseInt(bowlingArray[i + 1][1])
                                points = parseInt(points) + parseInt(bowlingArray[i + 1][0] == "" ? 0 : bowlingArray[i + 1][0]) + parseInt(bowlingArray[i + 1][1] == "" ? 0 : bowlingArray[i + 1][0])
                            } else {
                                // let frame = calculateFrame(bowlingArray[i + 1])
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
                    // if (bowlingArray[i].length === 3) {
                    //     points += calculateFrame(bowlingArray[i])
                    // } else {
                    //     console.log(points);
                    //     points = points + 10
                    //     console.log(points);
                    //     if (i + 1 < bowlingArray.length) {
                    //         if (bowlingArray[i][0].length !== undefined) {
                    //             console.log(bowlingArray[i][1].length);
                    //             points = points + parseInt(bowlingArray[i + 1][0])
                    //         } else if (bowlingArray[i][1].length !== undefined) {
                    //             console.log(bowlingArray[i][1].length);
                    //             points = points + parseInt(bowlingArray[i + 1][1])
                    //         }
                    //         console.log(points);
                    //     }
                    // }
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
                    points = points + frame[i]
                }
                if (points >= 10) {
                    points = points + frame[2]
                }
                break;
        }
        return points
    },
    bottomRow: function (bowlingArray, stop = bowlingArray.length) {
        // console.log("BOTTOMROW FUNCTION ASS");
        // console.log(bowlingArray);
        let returnArray = []
        let res
        for (let i = 0; i < stop; i++) {
            res = calculateScore(bowlingArray)
            // console.log("calculate sciore result");
            // console.log(res);
            res = sumArray(res, i + 1, 0)
            returnArray.push(res)
        }
        return returnArray
    },
    sumArray: function (bowlingArray, stop = bowlingArray.length, startPosition = 0) {
        let points = 0
        // console.log("-----------------------------------------------------------");
        // console.log("SUMARRAY");
        // console.log(bowlingArray);
        for (let i = startPosition; i < stop; i++) {
            // console.log("starterion");
            // console.log(bowlingArray[i] instanceof String);
            // console.log(bowlingArray[i] !== "");
            // console.log(bowlingArray[i]);
            if (bowlingArray[i] instanceof String && bowlingArray[i] !== "") {
                // console.log("AIDAIOHHIOASDIHOIOADHOASDOIHASDIOHASDoih");
                let tmpPoints = parseInt(bowlingArray[i - 1]) - 10
                points = points + tmpPoints
            } else {
                points = points + parseInt(bowlingArray[i]);

            }
        }
        return points
    },
    calculateTotalScore: function (bowlingArray) {
        let res = calculateScore(bowlingArray)
        res = sumArray(res)
        return res
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
    cleanArray: function (bowlingArray) {
        bowlingArray.forEach(item => {
            // item.pop()
            // switch (item.length) {
            //     case 3:
            //         if (bowlingArray.indexOf(item) != 10) {
            //             item.pop()
            //         }
            //         break;
            //     case 4:
            //         item.pop()
            //         break;
            //     default:
            //         break;
            // }
            if (item.length === 3 && (item[0] !== "" && item[1] !== "X") || item.length === 4) {
                item.pop()
            }
        });
        // for (let i = 0; i < bowlingArray.length; i++) {
        //     if (i === 9) {
        //         if (bowlingArray[i].length === 4) {
        //             bowlingArray[i].pop()

        //         }
        //     } else {
        //         if (bowlingArray[i].length === 3) {
        //             bowlingArray[i].pop()
        //         }
        //     }

        // }
        return bowlingArray
    },
    arrayCombine: function (bowlingArray) {
        // let tmpArray = cleanArray(bowlingArray)
        let tmpArray = bowlingArray
        let emptyIndex = findEmptySlot(tmpArray)
        let bottomRowRes = bottomRow(tmpArray, emptyIndex)
        // console.log("bottomRowResasdasdasd");
        // console.log(bowlingArray);
        let displayScoreBoardRes = displayScoreBoardPoints(tmpArray, emptyIndex)
        for (let i = 0; i < 1; i++) {
            // console.log("IAD)APODHIOASd");
            // if (displayScoreBoardRes.length === 3 && i !== 9 
            //     || displayScoreBoardRes.length === 4 && i === 9) {
            //     console.log("argjrgjoragjo");
            //     displayScoreBoardRes[-1] = bottomRowRes[i]
            // } else {
            // // console.log(displayScoreBoardRes);
            displayScoreBoardRes[i].push(bottomRowRes[i])
            // // console.log(displayScoreBoardRes);
            // }

        }
        return displayScoreBoardRes
    },
    addToArray: function (number, setBowlingScore, bowlingScore, setBottomRow, setDisplayScore) {
        number = parseInt(number)
        // console.log(bowlingScore);
        // console.log("START __--_-_--_____---_");
        // let tmpArray = bowlingScore;
        // // console.log(tmpArray);
        // // console.log(number);
        // let stop = false;
        // for (let i = 0; i < tmpArray.length; i++) {
        //     // console.log(tmpArray[i] + " " + i);
        //     for (let index = 0; index < tmpArray[i].length - 1; index++) {
        //         // console.log(tmpArray[i][index] + " " + index);
        //         // console.log(tmpArr   ay[i].length);
        //         if (tmpArray[i][index] == "") {
        //             // console.log("arghora");
        //             // console.log(parseInt(number));
        //             tmpArray[i][index] = parseInt(number)
        //             console.log(tmpArray);
        //             // console.log("stop time");
        //             stop = true
        //             // break;
        //         }
        //     }
        //     if (stop) {
        //         break
        //     }
        // }
        // let res = arrayCombine(tmpArray)
        // // console.log("OSAJKASDKJLASDJKLASDKJLASDJKLDAS");
        // // console.log(tmpArray);
        let stop = false
        for (let i = 0; i < bowlingScore.length; i++) {
            for (let j = 0; j < bowlingScore[i].length; j++) {
                if (bowlingScore[i][j] === 10 && bowlingScore[i].length !== 3) {
                    break
                }
                if (bowlingScore[i][j] == "") {
                    bowlingScore[i][j] = number
                    stop = true
                    break
                }
            }
            if (stop) {
                break
            }
        }
        let res = displayScoreBoardPoints(bowlingScore)
        let stopInt = findEmptySlot(bowlingScore)
        // let score = calculateScore(bowlingScore, stopInt)
        // console.log("frameScore");
        // console.log("frameScore");
        // console.log("frameScore");
        // console.log(score);
        let frameScore = bottomRow(bowlingScore, stopInt)
        // console.log("frameScore");
        // console.log(frameScore);
        // console.log("frameScore");
        setBottomRow(frameScore)
        setDisplayScore(res)
        setBowlingScore(bowlingScore)
        // console.log(res);
        return [res, frameScore]
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
export const cleanArray = bowlinglogic.cleanArray
