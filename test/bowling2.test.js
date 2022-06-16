import bowlinglogic from "../src/components/bowlinglogic";


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
        let bowlingArray = [[2, 3],["", ""]]
        let res = bowlinglogic.findEmptySlot(bowlingArray)
        expect(res).toBe(1)
    })
})