import bowlinglogic, { calculateFrame } from "../src/components/bowlinglogic";

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
        let res = bowlinglogic.calculateScore(scoretable)
        expect(res).toBe(300)
    });
    test('full game scoring two scores last round', () => {
        let scoretable = [[2, 4], [9, 1], [10], [7, 2], [0, 10], [10], [10], [10], [4, 1], [3, 5]]
        // let scoretable = [[2,4],[9,1],[10], [7,2]]
        // let scoretable = [[0, 10], [10], [10], [10], [4, 1]]
        let res = bowlinglogic.calculateScore(scoretable)
        expect(res).toBe(156)
    })
    test('full game only spares', () => {
        let scoretable = [[9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1, 9]]
        let res = bowlinglogic.calculateScore(scoretable)
        expect(res).toBe(190)
    })
    test('last three with spare', () => {
        let scoretable = [[0, 10, 5]]
        let res = bowlinglogic.calculateScore(scoretable)
        expect(res).toBe(15)
    })
    test('one strikes in row', () => {
        let scoretable = [[10]]
        let res = bowlinglogic.calculateScore(scoretable)
        expect(res).toBe(10)
    });
    test('two strikes in row', () => {
        let scoretable = [[10], [10]]
        let res = bowlinglogic.calculateScore(scoretable)
        expect(res).toBe(30)
    });
    test('three strikes in row', () => {
        let scoretable = [[10], [10], [10]]
        let res = bowlinglogic.calculateScore(scoretable)
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
        let expected = [8, 18, 38]
        let res = bowlinglogic.bottomRow(scoretable)
        expect(res).toStrictEqual(expected)
    })
    test('create array with scores and total for that frame', () => {
        let scoretable = [[6, 2], [6, 4], [10]]
        let expected = [[6, 2, 8], [6, "/", 18], ["", "X", 38]]
        let res = bowlinglogic.arrayCombine(scoretable)
        expect(res).toStrictEqual(expected)
    })
})
