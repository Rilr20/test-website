import React from 'react'
import BishopSVG from './pieces/bishopsvg'
import KingSVG from './pieces/kingsvg'
import KnightSVG from './pieces/knightsvg'
import PawnSVG from './pieces/pawnsvg'
import QueenSVG from './pieces/queensvg'
import RookSVG from './pieces/rooksvg'

PieceSVG.defaultProps = {
    size: "45px",
    className: ""
}

export default function PieceSVG(props) {
    switch (props.piece.toLowerCase()) {
        case "knight":
            return (
                <KnightSVG className={props.className} size={props.size} colour={props.colour}/>
            )
        case "rook":
            return (
                <RookSVG className={props.className} size={props.size} colour={props.colour}/>
            )
        case "bishop":
            return (
                <BishopSVG className={props.className} size={props.size} colour={props.colour}/>
            )
        case "queen":
            return (
                <QueenSVG className={props.className} size={props.size} colour={props.colour}/>
            )
        case "king":
            return (
                <KingSVG className={props.className} size={props.size} colour={props.colour}/>
            )
        case "pawn":
            return (
                <PawnSVG className={props.className} size={props.size} colour={props.colour}/>
            )
    }

}
