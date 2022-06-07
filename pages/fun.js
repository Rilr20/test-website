import LayoutBase from "../src/template/layoutbase";
import BasicLayout from "../src/template/basiclayout";

import React from 'react'
Fun.PageTitle = 'Fun | Website'

export default function Fun() {
    return (
        <div>
            Fun Stuff incoming
            <div className="circle large">
                <div className="circle small"></div>
                <div className="circle small"></div>
                <div className="circle small"></div>
            </div>
        </div>
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