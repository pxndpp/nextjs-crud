'use client'
import React, { useEffect, useState } from 'react'

export default function page({ params }) {
    const [user, setUser] = useState({
        "id": 0,
        "fname": "",
        "lname": "",
        "username": "",
        "email": "",
        "avatar": ""
    })
    useEffect(() => {
        fetch('https://www.melivecode.com/api/users/' + params.id)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setUser(result.user)
            })
    }, [])

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(user)
        fetch('https://www.melivecode.com/api/users/update',{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(user)
        })
        .then( res => res.json())
        .then(result =>{
            alert(result.message)
            window.location.href = '/users'
        })
    }
    return (
        <div>
            <h1>Edit</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        placeholder='First Name'
                        id='fname'
                        name='fname'
                        value={user.fname}
                        onChange={(event)=>{
                            setUser((user)=>({
                                ...user,
                                fname: event.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Last Name'
                        id='lname'
                        name='lname'
                        value={user.lname}
                        onChange={(event)=>{
                            setUser((user)=>({
                                ...user,
                                lname: event.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Username'
                        id='username'
                        name='username'
                        value={user.username}
                        onChange={(event)=>{
                            setUser((user)=>({
                                ...user,
                                username: event.target.value
                            }))
                        }}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
