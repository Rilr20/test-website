const chessLogic = {
    oppositeSide: function (piece) {
        // 8 blir 1 och 1 blir åtta
        let opposite = ""
        let letter = piece[0]
        let num = piece[1]
        let array = [8, 7, 6, 5, 4, 3, 2, 1]
        opposite = letter + array[num - 1]
        return opposite
    },
    move: function (piece, position, setChessBoard) {
        return
    },
    setUpGameBoard: function () {
        let boardArray = setUpPawns()
        let kqArray = setUpKQ()
        let outer = setUpOuter()
        boardArray = boardArray.concat(kqArray, outer)
        return boardArray
    },
    setUpPawns: function () {
        let pawnsPosition = ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"]
        let boardArray = []
        let oppositePosition = ""
        pawnsPosition.forEach(position => {
            boardArray.push({ piece: "pawn", position: position, side: "white" })
            oppositePosition = oppositeSide(position)
            boardArray.push({ piece: "pawn", position: oppositePosition, side: "black" })

        });
        return boardArray
    },
    setUpKQ: function () {
        let positions = ["d1", "e1"]
        let pieces = ["king", "queen"]
        let boardArray = []
        for (let i = 0; i < positions.length; i++) {
            boardArray.push({ piece: pieces[i], position: positions[i], side: "white" })
            boardArray.push({ piece: pieces[i], position: oppositeSide(positions[positions.length - 1 - i]), side: "black" })
        }
        return boardArray
    },
    setUpOuter: function () {
        let boardArray = []
        let pieces = ["rook", "knight", "bishop", "bishop", "knight", "rook"]
        let positions = ["a1", "b1", "c1", "f1", "g1", "h1"]
        for (let i = 0; i < positions.length; i++) {
            boardArray.push({ piece: pieces[i], position: positions[i], side: "white" })
            boardArray.push({ piece: pieces[i], position: oppositeSide(positions[i]), side: "black" })
        }
        return boardArray
    }
}
export const oppositeSide = chessLogic.oppositeSide
export const setUpPawns = chessLogic.setUpPawns
export const setUpGameBoard = chessLogic.setUpGameBoard
export const setUpKQ = chessLogic.setUpKQ
export const setUpOuter = chessLogic.setUpOuter
