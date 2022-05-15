import React from 'react'
import { LayoutOne } from './template/Layout'
import LayoutBase from "./template/base";
import Layout from "./template/Layout";

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