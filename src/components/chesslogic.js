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
                piece: "pawn", position: position, side: "white", id: id, hasMoved: false, passantable: false
            })
            id++
            oppositePosition = oppositeSide(position)
            boardArray.push({
                piece: "pawn", position: oppositePosition, side: "black", id: id, hasMoved: false, passantable: false
            })
            id++
        });
        return boardArray
    },
    setUpKQ: function (id) {
        let positions = ["d1", "e1"]
        let pieces = ["queen", "king"]
        let boardArray = []
        for (let i = 0; i < positions.length; i++) {
            boardArray.push({
                piece: pieces[i], position: positions[i], side: "white", id: id, hasMoved: false
            })
            id++
            boardArray.push({
                piece: pieces[i], position: oppositeSide(positions[i]), side: "black", id: id, hasMoved: false
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
        let possible = isMoveValid(piece, toPosition, chessBoard, removedPieces, setRemovedPieces)
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

        return [possible, removedPieces]
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
    buttonClick: function (event, selected, setSelected, setChessBoard, chessBoard, removedPieces, setRemovedPieces, currentPlayer, setCurrentPlayer) {
        let tmpSelected = selected
        let currentElement = getRightElement(event)
        let player = ""
        console.log(currentElement);
        switch (tmpSelected.length) {
            case 1:
                if (duplicate(currentElement, selected[0])) {
                    tmpSelected.pop()
                    break;
                }
                tmpSelected.push(currentElement)
                let res = move(tmpSelected[0], tmpSelected[1], setChessBoard, chessBoard, removedPieces, setRemovedPieces)
                tmpSelected = []
                if (res[0]) {
                    setCurrentPlayer(currentPlayer.reverse())
                }
                break;
            case 0:
                //check if it has svg element if it don't then do nothing twitter is a 
                let piece = findPiece(currentElement, chessBoard)
                if (event.currentTarget.firstChild instanceof SVGSVGElement && piece.side == currentPlayer[0]) {
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
    isMoveValid(piece, toPosition, chessBoard, removedPieces, setRemovedPieces) {
        let isValid = false
        if (isSameSide(piece, toPosition, chessBoard)) {
            return false
        }
        let id= null
        switch (piece.piece) {
            case "pawn":
                // en passant
                // only 1 space forward
                // attack 1 space forward diagonal
                // two space forward possible on first move
                let pawnReturn = pawnMove(piece, toPosition, chessBoard, removedPieces, setRemovedPieces)
                isValid = pawnReturn[0]
                id = pawnReturn[1]
                break;
            case "knight":
                isValid = knightMove(piece.position, toPosition)
                break;
            case "rook":
                isValid = rookMove(piece.position, toPosition, chessBoard)
                break;
            case "bishop":
                isValid = bishopMove(piece.position, toPosition, chessBoard)
                break;
            case "queen":
                //straight and diagonal
                isValid = queenMove(piece.position, toPosition, chessBoard)
                break;
            case "king":
                isValid = kingMove(piece.position, toPosition, chessBoard, piece.hasMoved)
                break;
            default:
                break;
        }
        clearEnPassantable(chessBoard, id)
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
    rookMove: function (fromPosition, toPosition, chessBoard) {
        let y = toPosition[0]
        let x = toPosition[1]
        if (fromPosition.includes(x) || fromPosition.includes(y)) {
            return isRookMoveBlocked(fromPosition, toPosition, chessBoard)
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
    kingMove: function (fromPosition, toPosition, chessBoard, hasMoved) {
        let fromPositionArray = convertLetterToNumber(fromPosition)
        let castleTiles = ["c1", "g8", "g1", "c8"]
        let castleIndex = castleTiles.indexOf(toPosition)

        if (castleIndex !== -1 && !hasMoved) {
            let rookPositions = ["a1", "h8", "h1", "a8"]
            let newPositions = ["d1", "f8", "f1", "d8"]
            let rookPosition = rookPositions[castleIndex]
            let rook = findPieceOnPosition(rookPosition, chessBoard)
            if (rook !== null && !rook.hasMoved && isRookMoveBlocked(fromPosition, rookPosition, chessBoard)) {
                //move rook to new position
                rook.position = newPositions[castleIndex]
                rook.hasMoved = true
                for (let i = 0; i < chessBoard; i++) {
                    if (chessBoard[i].id === rook.id) {
                        chessBoard[i] = rook
                    }
                }
                return true
            }
            return false
        }
        let toPositionArray = convertLetterToNumber(toPosition)
        let xDelta = Math.abs(fromPositionArray[0] - toPositionArray[0])
        let yDelta = Math.abs(fromPositionArray[1] - toPositionArray[1])
        if (yDelta <= 1 && xDelta <= 1) {
            return true
        }

        return false
    },
    queenMove: function (fromPosition, toPosition, chessBoard) {
        let y = toPosition[0]
        let x = toPosition[1]

        // return true
        //straight
        if (fromPosition.includes(x) || fromPosition.includes(y)) {
            // return isRookMoveBlocked(fromPosition, toPosition, chessBoard)
            return isRookMoveBlocked(fromPosition, toPosition, chessBoard)
        }
        //diagonal
        if (bishopMove(fromPosition, toPosition, chessBoard)) {
            return isBishopMoveBlocked(fromPosition, toPosition, chessBoard)
        }
    },
    pawnMove: function (piece, toPosition, chessBoard, removedPieces, setRemovedPieces) {
        let id = null
        let yValue = piece.position[1]
        let yDelta = piece.side == "white" ? toPosition[1] - yValue : yValue - toPosition[1]
        let moveValue = piece.side == "white" ? 1 : -1
        let toPositionNumber = convertLetterToNumber(toPosition)
        let fromPositionNumber = convertLetterToNumber(piece.position)

        if (!piece.hasMoved && yDelta <= 2 && yDelta > 0 || yDelta < 2 && yDelta > 0) {
            let piecePositions = getAllPiecePositions(chessBoard)
            let toTheLeft = convertNumberToLetter(fromPositionNumber[0] - 1, parseInt(toPosition[1]))
            let toTheRight = convertNumberToLetter(fromPositionNumber[0] + 1, parseInt(toPosition[1]))
            let inFront = convertNumberToLetter(toPositionNumber[0], parseInt(toPositionNumber[1]) - moveValue)
            let getPieceInFront = findPieceOnPosition(inFront, chessBoard)

            piece.passantable = yDelta === 2 ? true : false
            if (getPieceInFront !== null && getPieceInFront.id !== piece.id && piecePositions.indexOf(toPosition) === -1) {
                //remove the pawn
                removedPieces.push(getPieceInFront)
                setRemovedPieces(removedPieces)
                return [getPieceInFront.passantable, piece.id]
            }

            if (piecePositions.indexOf(toTheLeft) !== -1 && toPosition == toTheLeft || piecePositions.indexOf(toTheRight) !== -1 && toPosition == toTheRight) {
                //take piece
                return [piecePositions.indexOf(toPosition) == -1 ? false : true, id]
            } else if (yDelta <= 2 && piece.position[0] == toPosition[0]) {
                //move forward
                return [piecePositions.indexOf(toPosition) == -1 ? true : false, piece.id]
            }
        }
        return [false, id]
    },
    pieceOnSquare: function (X, Y, chessBoard) {
        // false a piece is     on the square
        // true  a piece is not on the square
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
    },
    clearEnPassantable(chessBoard, id=null) {
        for (let i = 0; i < chessBoard.length; i++) {
            if (chessBoard[i].id !== id && chessBoard[i].piece === "pawn") {
                chessBoard[i].passantable = false 
            }
        }
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
export const pawnMove = chesslogic.pawnMove
export const clearEnPassantable = chesslogic.clearEnPassantable
export const queenMove = chesslogic.queenMove
