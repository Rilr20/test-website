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
            boardArray.push({
                piece: "pawn", position: position, side: "white", id: id, hasMoved: false
            })
            id++
            oppositePosition = oppositeSide(position)
            boardArray.push({
                piece: "pawn", position: oppositePosition, side: "black", id: id, hasMoved: false
            })
            id++
        });
        return boardArray
    },
    setUpKQ: function (id) {
        let positions = ["d1", "e1"]
        let pieces = ["king", "queen"]
        let boardArray = []
        for (let i = 0; i < positions.length; i++) {
            boardArray.push({
                piece: pieces[i], position: positions[i], side: "white", id: id, hasMoved: false
            })
            id++
            boardArray.push({
                piece: pieces[i], position: oppositeSide(positions[positions.length - 1 - i]), side: "black", id: id, hasMoved: false
            })
            id++
        }
        return boardArray
    },
    setUpOuter: function (id) {
        let boardArray = []
        let pieces = ["rook", "knight", "bishop", "bishop", "knight", "rook"]
        let positions = ["a1", "b1", "c1", "f1", "g1", "h1"]
        for (let i = 0; i < positions.length; i++) {
            boardArray.push({ piece: pieces[i], position: positions[i], side: "white", id: id, hasMoved: false })
            id++
            boardArray.push({ piece: pieces[i], position: oppositeSide(positions[i]), side: "black", id: id, hasMoved: false })
            id++
        }
        return boardArray
    },
    move: function (pieceId, toPosition, setChessBoard, chessBoard, removedPieces, setRemovedPieces) {
        let piece = findPiece(pieceId, chessBoard)
        let removedPiece = ""
        let id = piece.id
        let newChessBoard = chessBoard
        if (typeof toPosition === "number") {
            let toPiece = findPiece(toPosition, chessBoard)
            toPosition = toPiece.position
        }
        let possible = isMoveValid(piece, toPosition, chessBoard)
        if (possible) {
            for (let i = 0; i < newChessBoard.length; i++) {
                if (newChessBoard[i].position == toPosition && newChessBoard[i].id !== id) {
                    removedPiece = newChessBoard[i]
                }
                if (newChessBoard[i].id == id) {
                    piece.position = toPosition
                    piece.hasMoved = true
                    newChessBoard[i] = piece
                }
            }
            if (removedPiece !== "") {
                newChessBoard = remove(removedPiece, chessBoard, removedPieces, setRemovedPieces)
            }
            setChessBoard(newChessBoard)
            setRemovedPieces(removedPieces)
        }

        return [piece, removedPieces]
    },
    findPiece: function (pieceId, chessBoard) {
        let returnPiece
        chessBoard.forEach(piece => {
            if (piece.id == pieceId) {
                returnPiece = piece
            }
        });
        return returnPiece
    },
    buttonClick: function (event, selected, setSelected, setChessBoard, chessBoard, removedPieces, setRemovedPieces) {
        let tmpSelected = selected
        let currentElement = getRightElement(event)
        switch (tmpSelected.length) {
            case 1:
                if (duplicate(currentElement, selected[0])) {
                    tmpSelected.pop()
                    break;
                }

                tmpSelected.push(currentElement)
                move(tmpSelected[0], tmpSelected[1], setChessBoard, chessBoard, removedPieces, setRemovedPieces)
                tmpSelected = []
                break;
            case 0:
                //check if it has svg element if it don't then do nothing
                if (event.currentTarget.firstChild instanceof SVGSVGElement) {
                    tmpSelected.push(currentElement)
                }
                break;
        }
        setSelected(tmpSelected)
    },
    getRightElement: function (event) {
        if (event.currentTarget.firstChild === null) {
            return event.currentTarget.id
        } else {
            return parseInt(event.currentTarget.firstChild.id)
        }
    },
    duplicate: function (first, second) {
        if (first === second) {
            return true
        }
        return false
    },
    isMoveValid(piece, toPosition, chessBoard) {
        let isValid = false
        if (isSameSide(piece, toPosition, chessBoard)) {
            return false
        }
        switch (piece.piece) {
            case "pawn":
                // en passant
                // only 1 space forward
                // attack 1 space forward diagonal
                // two space forward possible on first move
                isValid = true
                break;
            case "knight":
                isValid = knightMove(piece.position, toPosition)
                break;
            case "rook":
                isValid = rookMove(piece, toPosition, chessBoard)
                break;
            case "bishop":
                isValid = bishopMove(piece.position, toPosition, chessBoard)
                break;
            case "queen":
                //straight and diagonal
                isValid = true
                break;
            case "king":
                //can castle if king and rook hasn't moved and sight is clear
                //kingside - b1, g8
                //queenside - f1, c8
                isValid = kingMove(piece.position, toPosition, chessBoard)
                break;
            default:
                break;
        }
        return isValid
    },
    isSameSide: function (piece, toPosition, chessBoard) {
        let toPiece = findPieceOnPosition(toPosition, chessBoard)
        if (toPiece instanceof Object && piece.side == toPiece.side) {
            return true
        }
        return false
    },
    findPieceOnPosition(position, chessBoard) {
        for (let i = 0; i < chessBoard.length; i++) {
            if (chessBoard[i].position == position) {
                return chessBoard[i]
            }
        }
        return null
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
    },
    rookMove: function (piece, toPosition, chessBoard) {
        let y = toPosition[0]
        let x = toPosition[1]
        if (piece.position.includes(x) || piece.position.includes(y)) {
            return isRookMoveBlocked(piece.position, toPosition, chessBoard)
        }
        return false
    },
    isRookMoveBlocked: function (fromPosition, toPosition, chessBoard) {
        fromPosition = convertLetterToNumber(fromPosition)
        toPosition = convertLetterToNumber(toPosition)
        let directionX = toPosition[0] > fromPosition[0] ? 1 : -1
        let directionY = toPosition[1] > fromPosition[1] ? 1 : -1
        let index = 0
        if (toPosition[0] === fromPosition[0]) {
            index = 1
        }
        let xPos = fromPosition[0]
        let yPos = fromPosition[1]
        for (let i = 1; i < Math.abs(toPosition[index] - fromPosition[index]); i++) {
            if (toPosition[0] === fromPosition[0]) {
                yPos = fromPosition[1] + i * directionY
            } else {
                xPos = fromPosition[0] + i * directionX
            }
            if (pieceOnSquare(xPos, yPos, chessBoard)) {
                return false
            }
        }
        return true
    },
    knightMove: function (fromPosition, toPosition) {
        let fromPositionArray = convertLetterToNumber(fromPosition)
        let toPositionArray = convertLetterToNumber(toPosition)
        let xDelta = Math.abs(fromPositionArray[0] - toPositionArray[0])
        let yDelta = Math.abs(fromPositionArray[1] - toPositionArray[1])
        if (xDelta == 2 && yDelta == 1 || xDelta == 1 && yDelta == 2) {
            return true
        }
        return false
    },
    bishopMove: function (fromPosition, toPosition, chessBoard) {
        let fromPositionArray = convertLetterToNumber(fromPosition)
        let toPositionArray = convertLetterToNumber(toPosition)
        if (fromPositionArray[0] == toPositionArray[0] || fromPositionArray[1] == toPositionArray[1]) {
            return false
        }
        if (Math.abs(fromPositionArray[0] - toPositionArray[0]) == Math.abs(fromPositionArray[1] - toPositionArray[1])) {
            return isBishopMoveBlocked(fromPositionArray, toPositionArray, chessBoard)
        }
        return false;
    },
    isBishopMoveBlocked: function (fromPosition, toPosition, chessBoard) {
        let directionX = toPosition[0] > fromPosition[0] ? 1 : -1
        let directionY = toPosition[1] > fromPosition[1] ? 1 : -1
        for (let i = 1; i < Math.abs(toPosition[0] - fromPosition[0]); i++) {
            if (pieceOnSquare(fromPosition[0] + i * directionX, fromPosition[1] + i * directionY, chessBoard)) {
                return false
            }
        }
        return true
    },
    kingMove: function(fromPosition, toPosition, chessBoard) {
        console.log("jag är kung");
        let fromPositionArray = convertLetterToNumber(fromPosition)
        let toPositionArray = convertLetterToNumber(toPosition)
        let xDelta = Math.abs(fromPositionArray[0] - toPositionArray[0])
        let yDelta = Math.abs(fromPositionArray[1] - toPositionArray[1])
        console.log(xDelta);
        console.log(yDelta);
        console.log(xDelta - yDelta);
        if(yDelta <= 1 && xDelta <= 1) {
            return true
        }

        return false
    },
    pieceOnSquare: function (X, Y, chessBoard) {
        // false a piece is     on the square
        // true  a piece is not on the square
        //om du inte är i arrayen så betyder det att det inte finns en pjäs på den platsen
        let chessCoordinate = convertNumberToLetter(X, Y)
        let allPieces = getAllPiecePositions(chessBoard)
        if (allPieces.indexOf(chessCoordinate) === -1) {
            return false
        }
        return true
    },
    getAllPiecePositions: function (chessBoard) {
        let positions = []
        for (let i = 0; i < chessBoard.length; i++) {
            positions.push(chessBoard[i].position)
        }
        return positions
    },
    convertLetterToNumber: function (position) {
        let letters = ["a", "b", "c", "d", "e", "f", "g", "h"]
        return [letters.indexOf(position[0]) + 1, parseInt(position[1])]
    },
    convertNumberToLetter: function (Xpos, Ypos) {
        let letters = ["a", "b", "c", "d", "e", "f", "g", "h"]
        return `${letters[Xpos - 1]}${Ypos}`
    }
}
export default chesslogic

export const oppositeSide = chesslogic.oppositeSide
export const setUpPawns = chesslogic.setUpPawns
export const setUpGameBoard = chesslogic.setUpGameBoard
export const setUpKQ = chesslogic.setUpKQ
export const setUpOuter = chesslogic.setUpOuter
export const move = chesslogic.move
export const findPiece = chesslogic.findPiece
export const duplicate = chesslogic.duplicate
export const getRightElement = chesslogic.getRightElement
export const remove = chesslogic.remove
export const isMoveValid = chesslogic.isMoveValid
export const findPieceOnPosition = chesslogic.findPieceOnPosition
export const isSameSide = chesslogic.isSameSide
export const rookMove = chesslogic.rookMove
export const getAllPiecePositions = chesslogic.getAllPiecePositions
export const bishopMove = chesslogic.bishopMove
export const convertLetterToNumber = chesslogic.convertLetterToNumber
export const convertNumberToLetter = chesslogic.convertNumberToLetter
export const pieceOnSquare = chesslogic.pieceOnSquare
export const isBishopMoveBlocked = chesslogic.isBishopMoveBlocked
export const knightMove = chesslogic.knightMove
export const isRookMoveBlocked = chesslogic.isRookMoveBlocked
export const kingMove = chesslogic.kingMove
