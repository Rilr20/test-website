const chessLogic = {
    oppositeSide: function (piece) {
        // 8 blir 1 och 1 blir åtta
        let opposite = ""
        let letter = piece[0]
        let num = piece[1]
        let array = [8,7,6,5,4,3,2,1]
        opposite = array[num-1] + letter
        return opposite
    },
    move: function (piece, position, setChessBoard) {
        return
    },
    setUpGameBoard: function (setChessBoard) {
        return
    }
}