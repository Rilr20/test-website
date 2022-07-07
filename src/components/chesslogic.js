const chesslogic = {
    oppositeSide: function (piece) {
        let opposite = ""
        let letter = piece[0]
        let num = piece[1]
        let array = [8, 7, 6, 5, 4, 3, 2, 1]
        opposite = letter + array[num - 1]
        return opposite
    },
    setUpGameBoard: function () {
        let id = 0
        let boardArray = []

        boardArray = setUpPawns(id)
        id = boardArray.length

        let kqArray = setUpKQ(id)
        boardArray = boardArray.concat(kqArray)
        id = boardArray.length

        let outer = setUpOuter(id)
        boardArray = boardArray.concat(outer)

        return boardArray
    },
    setUpPawns: function (id) {
        let pawnsPosition = ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"]
        let boardArray = []
        let oppositePosition = ""
        pawnsPosition.forEach(position => {
            boardArray.push({ piece: "pawn", position: position, side: "white", id: id })
            id++
            oppositePosition = oppositeSide(position)
            boardArray.push({ piece: "pawn", position: oppositePosition, side: "black", id: id })
            id++
        });
        return boardArray
    },
    setUpKQ: function (id) {
        let positions = ["d1", "e1"]
        let pieces = ["king", "queen"]
        let boardArray = []
        for (let i = 0; i < positions.length; i++) {
            boardArray.push({ piece: pieces[i], position: positions[i], side: "white", id: id })
            id++
            boardArray.push({ piece: pieces[i], position: oppositeSide(positions[positions.length - 1 - i]), side: "black", id: id })
            id++
        }
        return boardArray
    },
    setUpOuter: function (id) {
        let boardArray = []
        let pieces = ["rook", "knight", "bishop", "bishop", "knight", "rook"]
        let positions = ["a1", "b1", "c1", "f1", "g1", "h1"]
        for (let i = 0; i < positions.length; i++) {
            boardArray.push({ piece: pieces[i], position: positions[i], side: "white", id: id })
            id++
            boardArray.push({ piece: pieces[i], position: oppositeSide(positions[i]), side: "black", id: id })
            id++
        }
        return boardArray
    },
    move: function (piece, toPosition, setChessBoard, chessBoard, removedPieces, setRemovedPieces) {
        if (toPosition instanceof Array || toPosition instanceof Object) {
            toPosition = toPosition[0]
        }
        piece = createPieceObject(piece)
        let removedPiece = ""
        let id = piece.id
        let newChessBoard = chessBoard
        piece.position = toPosition //check if move is possible or if it removes a piece
        for (let i = 0; i < newChessBoard.length; i++) {
            if (newChessBoard[i].position == toPosition) {
                removedPiece = newChessBoard[i]
            }
            if (newChessBoard[i].id == id) {
                newChessBoard[i] = piece
            }
        }
        if (removedPiece !== "") {
            newChessBoard = remove(removedPiece, chessBoard, removedPieces, setRemovedPieces)
        }
        setChessBoard(newChessBoard)
        setRemovedPieces(removedPieces)

        return [piece, removedPieces]
    },
    createPieceObject: function (valueArray) {
        let object = {}
        object.piece = valueArray[1]
        object.position = valueArray[0]
        object.side = valueArray[2]
        object.id = valueArray[3]
        return object
    },
    buttonClick: function (event, selected, setSelected, setChessBoard, chessBoard, removedPieces, setRemovedPieces) {
        let tmpSelected = selected
        getRightElement(event)
        switch (tmpSelected.length) {

            case 1:
                let currentElement = getRightElement(event)
                // add the other one, and check if it is a duplicate if it then remove it
                //if its a duplicate remove the duplicate
                //if its another piece then add event.currenttarget.firstchild.classlist[3]
                if (duplicate(currentElement, selected[0])) {
                    tmpSelected.pop()
                    break;
                }
                //if its not a duplicate add it and then run move function
                tmpSelected.push(currentElement)
                move(tmpSelected[0], tmpSelected[1], setChessBoard, chessBoard, removedPieces, setRemovedPieces)
                tmpSelected = []
                break;
            case 0:
                //check if it has svg element if it don't then do nothing
                if (event.currentTarget.firstChild instanceof SVGSVGElement) {
                    tmpSelected.push(event.currentTarget.firstChild.classList)
                }
                break;
        }
        setSelected(tmpSelected)
    },
    getRightElement: function (event) {
        if (event.currentTarget.firstChild === null) {
            return event.currentTarget.classList[0]
        } else {
            return event.currentTarget.firstChild.classList
        }
    },
    duplicate: function (first, second) {
        if (first === second) {
            return true
        }
        return false
    },
    isMoveValid(piece, chessBoard) {
        isValid = false
        switch (piece.piece) {
            case "pawn":
                break;
            case "knight":
                break;
            case "rook":
                break;
            case "bishop":
                break;
            case "queen":
                break;
            case "king":
                break;
            default:
                break;
        }
    },
    remove: function (removePiece, chessBoard, removedPieces, setRemovedPieces) {
        for (let i = 0; i < chessBoard.length; i++) {
            if (removePiece == chessBoard[i]) {
                const index = chessBoard.indexOf(chessBoard[i]);
                removedPieces.push(chessBoard[i])
                if (index > -1) {
                    chessBoard.splice(index, 1);
                }
            }
        }
        setRemovedPieces(removedPieces)
        return chessBoard
    }
}
export default chesslogic

export const oppositeSide = chesslogic.oppositeSide
export const setUpPawns = chesslogic.setUpPawns
export const setUpGameBoard = chesslogic.setUpGameBoard
export const setUpKQ = chesslogic.setUpKQ
export const setUpOuter = chesslogic.setUpOuter
export const move = chesslogic.move
export const createPieceObject = chesslogic.createPieceObject
export const duplicate = chesslogic.duplicate
export const getRightElement = chesslogic.getRightElement
export const remove = chesslogic.remove
