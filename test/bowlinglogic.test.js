import bowlinglogic from "../src/components/bowlinglogic";

describe('Calculate Frame Function', () => {
    test('calculate frame length 2', () => {
        let frame = [5, 2]
        let res = bowlinglogic.calculateFrame(frame)
        expect(res).toBe(7)
    });
    test('calculate frame length 2 with empty', () => {
        let frame = [10, ""]
        let res = bowlinglogic.calculateFrame(frame)
        expect(res).toBe(10)
    });
    test('calculate frame length 3 points is 9', () => {
        let frame = [5, 4, 2]
        let res = bowlinglogic.calculateFrame(frame)
        expect(res).toBe(9)

    });
    test('calculate frame length 3 points is 12', () => {
        let frame = [6, 4, 2]
        let res = bowlinglogic.calculateFrame(frame)
        expect(res).toBe(12)
    });
});

describe('Sum Array Funciton', () => {
    test('sum total of 10', () => {
        let array = [1, 2, 3, 4, 5, 6]
        let res = bowlinglogic.sumArray(array)
        expect(res).toBe(21)
    });
    test('sum array with stop set', () => {
        let array = [1, 2, 3, 4, 5, 6]
        let res = bowlinglogic.sumArray(array, 4)
        expect(res).toBe(10)
    });
    test('sum array with start position set', () => {
        let array = [1, 2, 3, 4, 5, 6]
        let res = bowlinglogic.sumArray(array, undefined, 4)
        expect(res).toBe(11)
    });

})

describe('Calculate Score Function', () => {
    test('calculate score three strikes in row', () => {
        let bowlingArray = [[10, ""], [10, ""], [10, ""]]
        let res = bowlinglogic.calculateScore(bowlingArray)
        expect(res).toStrictEqual([30, 20, 10])
    });
    test('two strikes next frame one empty', () => {
        let bowlingArray = [[10, ""], [10, ""], ["", "", ""]]
        let res = bowlinglogic.calculateScore(bowlingArray)
        expect(res).toStrictEqual([20, 10, 0])
    });
    test('one strike in last frame', () => {
        let bowlingArray = [[10, ""], [10, 5, ""]]
        let res = bowlinglogic.calculateScore(bowlingArray)
        expect(res).toStrictEqual([25, 15])
    })
    test('two spare', () => {
        let bowlingArray = [[4, 6], [5, 5]]
        let res = bowlinglogic.calculateScore(bowlingArray)
        expect(res).toStrictEqual([15, 10])
    })
    test('spare last frame', () => {
        let bowlingArray = [[4, 6, 5]]
        let res = bowlinglogic.calculateScore(bowlingArray)
        expect(res).toStrictEqual([15])
    })
    test('normal add', () => {
        let bowlingArray = [[4, 2]]
        let res = bowlinglogic.calculateScore(bowlingArray)
        expect(res).toStrictEqual([6])
    });
});

describe('Bottom Row Function', () => {
    test('testing bottom row with stop', () => {
        let bowlingArray = [[4,2],[10,0],[5,2]]
        let res = bowlinglogic.bottomRow(bowlingArray, 2)
        expect(res).toStrictEqual([6, 23])
    });
    test('testing bottom row no stop', () => {
    let bowlingArray = [[4, 2], [7, 2]]
        let res = bowlinglogic.bottomRow(bowlingArray)
        expect(res).toStrictEqual([6, 15])
    });
});

describe('check next test', () => {
    test('check next strike', () => {
        let bowlingArray = [10, ""]
        let res = bowlinglogic.checkNext(bowlingArray)
        expect(res).toBe("strike")
    })
    test('check next spare', () => {
        let bowlingArray = [4, 6]
        let res = bowlinglogic.checkNext(bowlingArray)
        expect(res).toBe("spare")
    });
    test('check next none', () => {
        let bowlingArray = [2, 3]
        let res = bowlinglogic.checkNext(bowlingArray)
        expect(res).toBe(null)
    });
})

describe('findEmptySlot function', () => {
    test('test find empty slot', () => {
        let bowlingArray = [[2, 3], [3, ""]]
        let res = bowlinglogic.findEmptySlot(bowlingArray)
        expect(res).toBe(2)
    });
    test('test find no slot', () => {
        let bowlingArray = [[2, 3], [3, 4]]
        let res = bowlinglogic.findEmptySlot(bowlingArray)
        expect(res).toBe(2)
    });
    test('test find slot both empty', () => {
        let bowlingArray = [[2, 3], ["", ""]]
        let res = bowlinglogic.findEmptySlot(bowlingArray)
        expect(res).toBe(1)
    })
})

describe('add to Array', () => {
    const testState = jest.fn();
    test('Add to last frame three times only keep two', () => {
        let res 
        let bowlingCard = [["","",""]]
        for (let i = 0; i < 3; i++) {
            res = bowlinglogic.addToArray(4, testState, bowlingCard, testState, testState)
        }
        expect(res[0]).toStrictEqual([[4, 4, ""]])
    });
    test('Add to last frame three strikes', () => {
        let res
        let bowlingCard = [["", "", ""]]
        for (let i = 0; i < 3; i++) {
            res = bowlinglogic.addToArray(10, testState, bowlingCard, testState, testState)
        }
        expect(res[0]).toStrictEqual([["X","X","X"]])
    });
    test('Add to last frame with spare', () => {
        let res
        let bowlingCard = [["", "", ""]]
        // for (let i = 0; i < 3; i++) {
        res = bowlinglogic.addToArray(4, testState, bowlingCard, testState, testState)
        res = bowlinglogic.addToArray(6, testState, bowlingCard, testState, testState)
        res = bowlinglogic.addToArray(8, testState, bowlingCard, testState, testState)
        // }
        expect(res[0]).toStrictEqual([[4, "/", 8]])
    });
    test('Add zero ten spare', () => {
        let res
        let bowlingCard = [["", ""]]
        bowlinglogic.addToArray(0, testState, bowlingCard, testState, testState)
        res = bowlinglogic.addToArray(10, testState, bowlingCard, testState, testState)
        expect(res[0]).toStrictEqual([[0, "/"]])
    });
    test('Add two numbers five three', () => {
        let res
        let bowlingCard = [["", ""]]
        res = bowlinglogic.addToArray(5, testState, bowlingCard, testState, testState)
        res = bowlinglogic.addToArray(3, testState, bowlingCard, testState, testState)
        expect(res[0]).toStrictEqual([[5, 3]])
    });
    test('Add two numbers ten five', () => {
        let res
        let bowlingCard = [["", ""], ["",""]]
        res = bowlinglogic.addToArray(10, testState, bowlingCard, testState, testState)
        res = bowlinglogic.addToArray(5, testState, bowlingCard, testState, testState)
        expect(res[0]).toStrictEqual([["", "X"], [5,""]])
    });
    test('add to full array', ()=> {
        let res
        let bowlingCard = [[10, ""]]
        res = bowlinglogic.addToArray(8, testState, bowlingCard, testState, testState)
        expect(res[0]).toStrictEqual([["", "X"]])
    })
});

describe('Display Scoreboard Points', () => {
    test('Display test', () => {
        let bowlingArray = [[10, "",], [4, 6], [5, 0], [10, 4, 6]]
        let res = bowlinglogic.displayScoreboardPoints(bowlingArray)
        expect(res).toStrictEqual([["", "X"], [4, "/"], [5, 0], ["X", 4, "/"]])
    });
    test('last frame three strikes', () => {
        let bowlingArray = [[10, 10, 10]]
        let res = bowlinglogic.displayScoreboardPoints(bowlingArray)
        expect(res).toStrictEqual([["X", "X", "X"]])
    })
    test('last frame no strikes', () => {
        let bowlingArray = [[5, 4, ""]]
        let res = bowlinglogic.displayScoreboardPoints(bowlingArray)
        expect(res).toStrictEqual([[5, 4, ""]])
    })
    test('last frame with spare', () => {
        let bowlingArray = [[5, 5, 8]]
        let res = bowlinglogic.displayScoreboardPoints(bowlingArray)
        expect(res).toStrictEqual([[5, "/", 8]])
    })
    test('zero ten spare', () => {
        let bowlingArray = [[0, 10]]
        let res = bowlinglogic.displayScoreboardPoints(bowlingArray)
        expect(res).toStrictEqual([[0, "/"]])
    })
});
