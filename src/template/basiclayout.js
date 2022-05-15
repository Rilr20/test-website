import React from 'react'
import Navbar from '../components/navbar';
import Head from 'next/head'

export default function BasicLayout({ children }) {
    const PageTitle = children.type.PageTitle

    return (
        <>
            {PageTitle ? (<Head><title>{PageTitle}</title></Head>) : ''}
            <Navbar />
            <div>{children}</div>
        </>
    )
}
