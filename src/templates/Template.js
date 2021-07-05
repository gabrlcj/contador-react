import React from 'react'

import Header from '../partials/Header'
import Nav from '../partials/Nav'

const Template = ({ children, onChangePage, pages, activePage }) => {
    const title = pages[activePage].text

    return (
        <>
            <Header title={title} />
            <Nav pages={pages} onChangePage={onChangePage}/>
            {children}
        </>
    )
}

export default Template