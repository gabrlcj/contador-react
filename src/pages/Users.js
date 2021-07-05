import React, { useEffect, useState } from 'react'

import './Users.css'

import Loading from '../components/Loading'

const Users = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        setLoading(true)

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data)
            setLoading(false)
        })
    }, [])

    return (
        <>
            <Loading visible={loading} />
            {
                users.map(users => {
                    return (
                        <div className="users">
                            <b>Nome: {users.name}</b>
                            <b>Username: {users.username}</b>
                            <b>Website: {users.website}</b>
                            <b>Phone: {users.phone}</b><br /> <br />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Users