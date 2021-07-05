import React, { useState } from 'react'

import Counter from './pages/Counter'
import Album from './pages/Album'
import Users from './pages/Users'
import Template from './templates/Template'

const pages = {
    Album: {
        text: 'Album',
        component: Album,
    },
    Counter: {
        text: 'Counter',
        component: Counter,
    },
    Users: {
        text: 'Users',
        component: Users,
    },
}

const defaultPage = 'Counter'

function App() {
    const [page, setPage] = useState(defaultPage)

    const handleOnChangePage = (page) => {
        setPage(page)
    } 
    /* const Page = page === 'Album' ? Album : Counter (Uma maneira de realizar a navegaçao de paginas)*/
    const Page = pages[page].component
    
    return (
        <Template pages={pages} activePage={page} onChangePage={handleOnChangePage}>
            { Page && <Page />}
        </Template>
    )
}

export default App;