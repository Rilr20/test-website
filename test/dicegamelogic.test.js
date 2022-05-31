import dicegamelogic, { throwDie } from '../src/components/dicegamelogic'

describe('straights', () => {
    test('small straight has small straight', () => {
        let straight = [5, 2, 3, 4, 1]
        expect(dicegamelogic.straight(straight, false)).toBe(30)
    });

    test('small straight do not have one', () => {
        let straight = [1, 2, 3, 4, 1]
        expect(dicegamelogic.straight(straight, false)).toBe(0)
    });

    test('large straight has large straight', () => {
        let straight = [5, 2, 3, 4, 6]
        expect(dicegamelogic.straight(straight, true)).toBe(40)
    });

    test('small straight when large straight', () => {
        let straight = [5, 2, 3, 4, 1]
        expect(dicegamelogic.straight(straight, true)).toBe(0)
    });

});

describe('full house', () => {
    test('full house with full house', () => {
        let dice = [2, 2, 3, 3, 3]
        expect(dicegamelogic.fullHouse(dice)).toBe(25)
    })

    test('full house no full house', () => {
        let dice = [2, 2, 3, 3, 1]
        expect(dicegamelogic.fullHouse(dice)).toBe(0)
    })
})

describe('X of A Kind', () => {
    test('3 of a kind', () => {
        let dice = [2, 2, 2, 1, 1]
        expect(dicegamelogic.xOfAKind(dice, 3)).toBe(8)
    })
    test('4 of a kind', () => {
        let dice = [2, 2, 2, 2, 1]
        expect(dicegamelogic.xOfAKind(dice, 4)).toBe(9)
    })

    test('5 of a kind', () => {
        let dice = [3, 3, 3, 3, 3]
        expect(dicegamelogic.xOfAKind(dice, 5)).toBe(50)
    })

    test('none of a kind', () => {
        let dice = [2, 1, 3, 5, 1]
        expect(dicegamelogic.xOfAKind(dice, 3)).toBe(0)
    })
})

describe('points checks', () => {
    test('length of lower points res', () => {
        let dice = [2, 1, 3, 5, 1]
        let res = dicegamelogic.lowerPoints(dice, 3)
        expect(res.length).toBe(7)
    })
});

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));
describe('dice Throws', () => {
    // let dieSpy
    // beforeAll(() => {
    //     dieSpy = 
    // })
    const testState = jest.fn();
    test('Throw Dice function, first time throw', () => {
        let change = [0, 1, 2, 3, 4]
        let dice = []
        jest.spyOn(dicegamelogic, "throwDie").mockImplementation(
            jest.fn().mockReturnValue(62)
        )
        let res = dicegamelogic.throwDice(testState,change, dice)
        expect(res.length).toEqual(5)
        // expect(res).toEqual(expect.arrayContaining([2, 2, 2, 2, 2]))
    })

    test('Throw Dice function, no Re rolls', () => {
        let change = []
        let dice = [1, 2, 3, 4, 5]
        // jest.spyOn(dicegamelogic, "throwDie").mockImplementation(
        //     jest.fn().mockReturnValue(2)
        // )
        let res = dicegamelogic.throwDice(testState,change, dice)
        expect(res.length).toEqual(5)
        expect(res).toEqual(dice)
    })

    test('Throw Dice function, change 3 in row start at 0', () => {
        let change = [0, 1, 2]
        let dice = [12, 12, 12, 31, 54]
        // jest.spyOn(dicegamelogic, "throwDie").mockImplementation(
        //     jest.fn().mockReturnValue(2)
        // )
        let res = dicegamelogic.throwDice(testState,change, dice)
        expect(res.length).toEqual(5)
        expect(res).toEqual(expect.arrayContaining([31, 54]))
        expect(res).toEqual(expect.not.arrayContaining([12]))
    })

    test('Throw Dice function, change 3 in row start at 2', () => {
        let change = [2, 3, 4]
        let dice = [31, 54, 12, 12, 12]
        // jest.spyOn(dicegamelogic, "throwDie").mockImplementation(
        //     jest.fn().mockReturnValue(2)
        // )
        let res = dicegamelogic.throwDice(testState, change, dice)
        expect(res.length).toEqual(5)
        expect(res).toEqual(expect.arrayContaining([31, 54]))
        expect(res).toEqual(expect.not.arrayContaining([12]))
    })

    test('Throw Dice function, change 3 spread out', () => {
        let change = [0, 3, 4]
        let dice = [12, 31, 54, 12, 12]
        // jest.spyOn(dicegamelogic, "throwDie").mockImplementation(
        //     jest.fn().mockReturnValue(2)
        // )
        let res = dicegamelogic.throwDice(testState, change, dice)
        expect(res.length).toEqual(5)
        expect(res[1]).toEqual(dice[1])
        expect(res[2]).toEqual(dice[2])
        expect(res).toEqual(expect.arrayContaining([31, 54]))
        expect(res).toEqual(expect.not.arrayContaining([12]))
    })

    test('Throw Dice function, change 2 spread out', () => {
        let change = [0, 4]
        let dice = [12, 31, 54, 26, 12]
        jest.spyOn(dicegamelogic, "throwDie").mockImplementation(
            jest.fn().mockReturnValue(2)
        )
        let res = dicegamelogic.throwDice(testState, change, dice)
        expect(res.length).toEqual(5)
        expect(res[1]).toEqual(dice[1])
        expect(res[2]).toEqual(dice[2])
        expect(res).toEqual(expect.arrayContaining([31, 54, 26]))
        expect(res).toEqual(expect.not.arrayContaining([12]))
    })
    // afterAll(() => {
    //     dieSpy.mockRestore()
    // })
});
