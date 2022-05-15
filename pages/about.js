import React from 'react'
import { LayoutOne } from './template/LayoutOne'
import LayoutBase from "./template/base";
import Layout from "./template/LayoutOne";

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