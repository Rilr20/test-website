import React from 'react'
import BishopSVG from './pieces/bishopsvg'
import KingSVG from './pieces/kingsvg'
import KnightSVG from './pieces/knightsvg'
import PawnSVG from './pieces/pawnsvg'
import QueenSVG from './pieces/queensvg'
import RookSVG from './pieces/rooksvg'

PieceSVG.defaultProps = {
    size: "45px"
}

export default function PieceSVG(props) {
    switch (props.piece.toLowerCase()) {
        case "knight":
            return (
                <KnightSVG size={props.size} colour={props.colour}/>
            )
        case "rook":
            return (
                <RookSVG size={props.size} colour={props.colour}/>
            )
        case "bishop":
            return (
                <BishopSVG size={props.size} colour={props.colour}/>
            )
        case "queen":
            return (
                <QueenSVG size={props.size} colour={props.colour}/>
            )
        case "king":
            return (
                <KingSVG size={props.size} colour={props.colour}/>
            )
        case "pawn":
            return (
                <PawnSVG size={props.size} colour={props.colour}/>
            )
    }

}
