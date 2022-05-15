import React from 'react'
import Navbar from '../../src/components/navbar';
import Head from 'next/head'

export default function Layout({ children }) {
    const PageTitle = children.type.PageTitle

    return (
        <>
            {PageTitle ? (<Head><title>{PageTitle}</title></Head>) : ''}
            <Navbar />
            <div>{children}</div>
        </>
    )
}
