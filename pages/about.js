import React from 'react'
import { LayoutOne } from './template/layout'
import LayoutBase from "./template/layoutbase";
import Layout from "./template/layout";

About.PageTitle = 'About | Website'

export default function About() {
  return (
      <div>About</div>
  )
}

About.getLayout = function getLayout(page) {
    return (
        <LayoutBase>
            <Layout>
                {page}
            </Layout>
        </LayoutBase>
    )
}