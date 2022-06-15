import { AbcSharp } from "@mui/icons-material";
import bowlinglogic, { calculateFrame, cleanArray } from "../src/components/bowlinglogic";

describe('bowling table frame tests', () => {
    test('calculate frame normal', () => {
        let frame = [2, 3]
        let res = bowlinglogic.calculateFrame(frame)
        expect(res).toBe(5)
    });
    test('calculate frame spare 2 8', () => {
        let frame = [2, 8]
        let res = bowlinglogic.calculateFrame(frame)
        expect(res).toBe(10)
    });
    test('calculate frame 0 10', () => {
        let frame = [0, 10]
        let res = bowlinglogic.calculateFrame(frame)
        expect(res).toBe(10)
    })
    test('calcuate frame strike', () => {
        let frame = [10]
        let res = bowlinglogic.calculateFrame(frame)
        expect(res).toBe(10)
    });
    test('calculate frame misses', () => {
        let frame = [0, 0]
        let res = bowlinglogic.calculateFrame(frame)
        expect(res).toBe(0)
    })
    test('calclate last frame three strikes', () => {
        let frame = [10, 10, 10]
        let res = bowlinglogic.calculateFrame(frame)
        expect(res).toBe(30)
    })
    test('calculate last frame impossible', () => {
        let frame = [2, 5, 2]
        let res = bowlinglogic.calculateFrame(frame)
        expect(res).toBe(7)
    })
    test('calculate last frame spare', () => {
        let frame = [2, 8, 5]
        let res = bowlinglogic.calculateFrame(frame)
        expect(res).toBe(15)
    })
});

describe('bowling frame scoretable test', () => {
    test('max score', () => {
        let scoretable = [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]]
        let res = bowlinglogic.calculateTotalScore(scoretable)
        expect(res).toBe(300)
    });
    test('full game scoring two scores last round', () => {
        let scoretable = [[2, 4], [9, 1], [10], [7, 2], [0, 10], [10, ""], [10], [10], [4, 1], [3, 5]]
        let res = bowlinglogic.calculateTotalScore(scoretable)
        expect(res).toBe(156)
    })
    test('full game only spares', () => {
        let scoretable = [[9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1, 9]]
        let res = bowlinglogic.calculateTotalScore(scoretable)
        expect(res).toBe(190)
    })
    test('last three with spare', () => {
        let scoretable = [[0, 10, 5]]
        let res = bowlinglogic.calculateTotalScore(scoretable)
        expect(res).toBe(15)
    })
    test('one strikes in row', () => {
        let scoretable = [[10]]
        let res = bowlinglogic.calculateTotalScore(scoretable)
        expect(res).toBe(10)
    });
    test('two strikes in row', () => {
        let scoretable = [[10], [10]]
        let res = bowlinglogic.calculateTotalScore(scoretable)
        expect(res).toBe(30)
    });
    test('three strikes in row', () => {
        let scoretable = [[10, ""], [10, ""], [10, ""]]
        let res = bowlinglogic.calculateTotalScore(scoretable)
        expect(res).toBe(60)
    });
});

describe('Bowling score table for frontend', () => {
    test('converts to special characters', () => {
        let scoretable = [[6, 2], [6, 4], [10]]
        let expected = [[6, 2], [6, "/"], ["", "X"]]
        let res = bowlinglogic.displayScoreBoardPoints(scoretable)
        expect(res).toStrictEqual(expected)
    });
    test('calculate score for each frame', () => {
        let scoretable = [[6, 2], [6, 4], [10]]
        let expected = [8, 28, 38]
        let res = bowlinglogic.bottomRow(scoretable)
        expect(res).toStrictEqual(expected)
    })
    // test('create array with scores and total for each frame', () => {
    //     let scoretable = [[6, 2], [6, 4], [10]]
    //     let expected = [[6, 2, 8], [6, "/", 28], ["", "X", 38]]
    //     let res = bowlinglogic.arrayCombine(scoretable)
    //     expect(res).toStrictEqual(expected)
    // })
    // test('create array with scores and total for three strikes', () => {
    //     let scoretable = [[10, ""], [10, ""], [10, ""]]
    //     let expected = [["", "X", 30], ["", "X", 50], ["", "X", 60]]
    //     let res = bowlinglogic.arrayCombine(scoretable)
    //     expect(res).toStrictEqual(expected)
    // })
    test('last frame with 3 strikes', () => {
        let scoreTable = [["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""], [10, 10, 10]]
        let expected = [["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""], ["X", "X", "X"]]
        let res = bowlinglogic.displayScoreBoardPoints(scoreTable)
        expect(res).toStrictEqual(expected)
    })
    test('last frame with 1 strike spare', () => {
        let scoreTable = [["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""], [10, 6, 4]]
        let expected = [["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""], ["X", 6, "/"]]
        let res = bowlinglogic.displayScoreBoardPoints(scoreTable)
        expect(res).toStrictEqual(expected)
    })
    test('last frame with 1 spare strike', () => {
        let scoreTable = [["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""], [6, 4, 10]]
        let expected = [["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""], [6, "/", "X"]]
        let res = bowlinglogic.displayScoreBoardPoints(scoreTable)
        expect(res).toStrictEqual(expected)
    })
    test('last frame with 8 points', () => {
        let scoreTable = [["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""], [6, 2, ""]]
        let expected = [["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""], [6, 2, ""]]
        let res = bowlinglogic.displayScoreBoardPoints(scoreTable)
        expect(res).toStrictEqual(expected)
    })
    test('With full array and empty slots', () => {
        let scoretable = [[2, 3],
        [6, 4],
        [10, ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", "", ""]]
        let expected = [[2, 3, 5],
        [6, "/", 25],
        ["", "X", 35],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", ""],
        ["", "", ""]]
        let res = bowlinglogic.arrayCombine(scoretable)
        expect(res).toStrictEqual(expected)
    });
    test('With full array filled', () => {
        let scoretable = [[10, ""],
        [10, ""],
        [10, ""],
        [10, ""],
        [10, ""],
        [10, ""],
        [10, ""],
        [10, ""],
        [10, ""],
        [10, 10, 10]]
        let expected = [["", "X", 30],
        ["", "X", 60],
        ["", "X", 90],
        ["", "X", 120],
        ["", "X", 150],
        ["", "X", 180],
        ["", "X", 210],
        ["", "X", 240],
        ["", "X", 270],
        ["X", "X", "X", 300]]


        let res = bowlinglogic.arrayCombine(scoretable)
        expect(res).toStrictEqual(expected)
    });
})

describe('Add to Array Tests', () => {
    const testState = jest.fn();

    test('add three items to array', () => {
        let array = [2, 3, 4]
        let res
        let bowlingCard = [
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", "", ""]
        ]

        let expected = [
            [2, 3],
            [4, ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", "", ""]
        ]
        for (let i = 0; i < array.length; i++) {
            res = bowlinglogic.addToArray(array[i], testState, bowlingCard, testState, testState)
        }
        let expected2 = [5,9]

        expect(res[0]).toStrictEqual(expected)
        expect(res[1]).toStrictEqual(expected2)
    })
    test('add strikes to array', () => {
        let res
        let bowlingCard = [
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", "", ""]
        ]

        let expected = [
            ["", "X"],
            ["", "X"],
            ["", "X"],
            ["", "X"],
            ["", "X"],
            ["", "X"],
            ["", "X"],
            ["", "X"],
            ["", "X"],
            ["X", "X", "X"]
        ]
        for (let i = 0; i < 13; i++) {
            res = bowlinglogic.addToArray(10, testState, bowlingCard, testState, testState)
        }
        let expected2 = [30,60,90,120,150,180,210,240,270,300]

        expect(res[0]).toStrictEqual(expected)
        expect(res[1]).toStrictEqual(expected2)
    })
    test('check points from each strike', () => {
        let expected2 = [[10],[20,30],[30,50,60]]
        let bowlingCard = [
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", "", ""]
        ]
        let res
        for (let i = 0; i < 3; i++) {
            res = bowlinglogic.addToArray(10, testState, bowlingCard, testState, testState)
            expect(res[1]).toStrictEqual(expected2[i])
        }
    })
    test('add one items to array', () => {
        let array = [2]
        let res
        let bowlingCard = [
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", "", ""]
        ]

        let expected = [
            [2, ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", "", ""]
        ]
        let expected2 = [2]

        for (let i = 0; i < array.length; i++) {
            res = bowlinglogic.addToArray(array[i], testState, bowlingCard, testState, testState)
        }
        expect(res[0]).toStrictEqual(expected)
        expect(res[1]).toStrictEqual(expected2)
    })
    test('add two items to array', () => {
        let array = [5, 5]
        let res
        let bowlingCard = [
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", "", ""]
        ]

        let expected = [
            [5, "/"],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", "", ""]
        ]
        let expected2 = [10]

        for (let i = 0; i < array.length; i++) {
            res = bowlinglogic.addToArray(array[i], testState, bowlingCard, testState, testState)
        }
        expect(res[0]).toStrictEqual(expected)
        expect(res[1]).toStrictEqual(expected2)
    })
    test('adding 5 to all', () => {
        let res
        let bowlingCard = [
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", "", ""]
        ]

        let expected = [
            [5, "/"],
            [5, "/"],
            [5, "/"],
            [5, "/"],
            [5, "/"],
            [5, "/"],
            [5, "/"],
            [5, "/"],
            [5, "/"],
            [5, "/", 5]
        ]
        let expected2 = [15,30,45,60,75,90,105,120,135,150]
        for (let i = 0; i < bowlingCard.length * 2 + 1; i++) {
            res = bowlinglogic.addToArray("5", testState, bowlingCard, testState, testState)
        }
        expect(res[0]).toStrictEqual(expected)
        expect(res[1]).toStrictEqual(expected2)
    })
})

describe('clean array tests', () => {

    test('clean array', () => {
        let array = [[5, 2, ""],
        ["", ""],
        ["", "", ""],
        [1, "", "", ""],
        [1, 2, "", ""],
        [1, 2, 3, ""],
        ["", "", "", ""]]
        let expected = [[5, 2],
        ["", ""],
        ["", "", ""],
        [1, "", ""],
        [1, 2, ""],
        [1, 2, 3],
        ["", "", ""]]
        let res = cleanArray(array)
        expect(res).toStrictEqual(expected)
    });

});

describe('aaids test', () => {
    const testState = jest.fn();
    test('woop', () => {
        let bowlingCard = [
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", "", ""]
        ]
        let expected = [
            [5], 
            [10], 
            [15, 20],
            [15, 25],
            [15, 30, 35],
            [15, 30, 40]
        ]
        let res
        for (let i = 0; i < 3; i++) {
            res = bowlinglogic.addToArray("5", testState, bowlingCard, testState, testState)
                expect(res[1]).toStrictEqual(expected[i])
        }
    })
})