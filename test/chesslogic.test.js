import chesslogic from "../src/components/chesslogic";

describe('moving pieces', () => {
    const testState = jest.fn();

    test('move piece a1 to a2', () => {
        let piece = ["a1", "pawn", "white", 1]
        let expected = { id: 1, piece: "pawn", position: "a2", side: "white" }
        let chessBoard = [{ id: 1, piece: "pawn", position: "a1", side: "white" }, { id: 2 ,piece: "pawn", position: "a5", side: "black" }]
        let res = chesslogic.move(piece, "a2", testState, chessBoard, [], testState)
        expect(res[0]).toStrictEqual(expected)
        expect(chessBoard.length).toBe(2)
    });
    test('b4 pawn takes c5 pawn', () => {
        let piece = ["b4", "pawn", "white", 1]
        let expected = [{ id: 1, piece: "pawn", position: "c5", side: "white" }, [{ id: 2, piece: "pawn", position: "c5", side: "black" },]]
        let chessBoard = [{ id: 1, piece: "pawn", position: "a1", side: "white" }, { id: 2, piece: "pawn", position: "c5", side: "black" }]

        let res = chesslogic.move(piece, "c5", testState, chessBoard, [], testState)

        expect(res).toStrictEqual(expected)
        expect(chessBoard.length).toBe(1)
    });

    //try to move piece that is blocked by another one; nothing happens
    //try to do illegal move; nothing happens
    //en passant
    //pawn moves to top and you choose what it becomes
});

describe('opposite test', () => {
    test('a1 becomes a8', () => {
        let res = chesslogic.oppositeSide("a1")
        expect(res).toBe("a8")
    });
    test('b2 becomes b7', () => {
        let res = chesslogic.oppositeSide("b2")
        expect(res).toBe("b7")
    });
    test('f6 becomes f3', () => {
        let res = chesslogic.oppositeSide("f6")
        expect(res).toBe("f3")
    });


});
