import React, { useEffect, useState } from 'react'
import LayoutBase from "../../src/template/layoutbase";
import BasicLayout from "../../src/template/basiclayout";
import { Box, Button, Container, Typography } from '@mui/material';
import Chessboard from '../../src/components/chessboard';
import {setUpGameBoard} from '../../src/components/chesslogic'

Chess.PageTitle = 'Chess | Website'
export default function Chess() {
    const [chessBoard, setChessBoard] = useState([])
    const [removedPieces, setRemovedPieces] = useState([])
    useEffect(() => {
        setChessBoard(setUpGameBoard())
    }, []);
    return (
        <Container sx={{ width: "96%", height: "100%", pt: 2, mt: 0.3, }}>
            <Box sx={{ m: "auto", width: "400px", height: "100%", backgroundColor:"orange"}}>
                {/* <PieceSVG piece="king" colour="white" size="55" />
                <PieceSVG piece="king" colour="black" size="55" />
                <PieceSVG piece="knight" colour="white" size="55" />
                <PieceSVG piece="knight" colour="black" size="55" />
                <PieceSVG piece="rook" colour="white" size="55" />
                <PieceSVG piece="rook" colour="black" size="55" />
                <PieceSVG piece="bishop" colour="white" size="55" />
                <PieceSVG piece="bishop" colour="black" size="55" />
                <PieceSVG piece="pawn" colour="white" size="55" />
                <PieceSVG piece="pawn" colour="black" size="55" />
                <PieceSVG piece="queen" colour="white" size="55" />
                <PieceSVG piece="queen" colour="black" size="55" /> */}
                <Chessboard width="45px" colour="white" pieceSize="55" chessBoard={chessBoard} setChessBoard={setChessBoard} removedPieces={removedPieces} setRemovedPieces={setRemovedPieces} />
            </Box>
        </Container>
    )
}
Chess.getLayout = function getLayout(page) {
    return (
        <LayoutBase>
            <BasicLayout>
                {page}
            </BasicLayout>
        </LayoutBase>
    )
}