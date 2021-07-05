import React, { useState, useEffect } from 'react'

import './Album.css'

import Loading from '../components/Loading'

const Album = () => {
    const [loading, setLoading] = useState(false)
    const [albums, setAlbum] = useState([])

    useEffect(() => {
        setLoading(true)

        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => {
            setAlbum(data)
            setLoading(false)
        })
    }, [])

    return (
        <>
            <Loading visible={loading} />
            {
            albums.map(album => {
                return (
                    <div className="album">id: {album.id} - {album.title}</div>
                )
            }) 
            }
        </>
    )
}

export default Album