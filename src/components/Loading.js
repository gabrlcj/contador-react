import React from 'react'

const Loading = ({ visible }) => {
    return (
        <div> 
            {visible === true ? 'Carregando...' : ''}
        </div>
    )
}

export default Loading