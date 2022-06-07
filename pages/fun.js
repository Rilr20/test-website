import React from 'react'
import Link from "next/link";
import LayoutBase from "../src/template/layoutbase";
import BasicLayout from "../src/template/basiclayout";
import { Card, Container } from "@mui/material";

Fun.PageTitle = 'Fun | Website'

export default function Fun() {
    return (
        <Container sx={{ width: "96%", height: "100%", pt: 2, mt: 0.3}}>
            <Link href="fun/dicegame">DiceGame</Link><br />
            <Link href="fun/bowling">Bowling</Link>
        </Container>
    )
}
Fun.getLayout = function getLayout(page) {
    return (
        <LayoutBase>
            <BasicLayout>
                {page}
            </BasicLayout>
        </LayoutBase>
    )
}
