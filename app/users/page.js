'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Page() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://www.melivecode.com/api/users')
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setUsers(result)
            })
    }, [])

    const handleDelete = (id) =>{
        // alert(id)
        fetch('https://www.melivecode.com/api/users/delete',{
            method:'DELETE',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                id:id
            })
        })
            .then(res => res.json())
            .then(result => {
                alert(result.message)
                window.location.reload()
            })
    }

    return (
        <div>
            <Link href='/users/create'>Create User</Link>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <img src={user.avatar} height={50} alt={user.username} />
                        {user.username} {user.fname} {user.lname}
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                        <Link href={'/users/edit/'+user.id}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
