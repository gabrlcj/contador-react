import React from 'react'

import './Nav.css'

const Nav = ({ onChangePage, pages }) => {
    const pageNames = Object.keys(pages)

    return (
        <nav className="nav-bar">
            {
                pageNames.map(page => <button onClick={() => onChangePage(page)}>{pages[page].text}</button>)
            }
        </nav>
    )
}

export default Nav