import React from 'react'
import { LayoutOne } from '../src/template/basiclayout'
import LayoutBase from "../src/template/layoutbase";
import BasicLayout from "../src/template/basiclayout";

About.PageTitle = 'About | Website'

export default function About() {
    return (
        <div>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
        </div>
    )
}

About.getLayout = function getLayout(page) {
    return (
        <LayoutBase>
            <BasicLayout>
                {page}
            </BasicLayout>
        </LayoutBase>
    )
}