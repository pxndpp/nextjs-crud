'use client'
import React from 'react'

export default function page() {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.fname.value)
        const data = {
            "fname": event.target.fname.value,
            "lname": event.target.lname.value,
            "username": event.target.username.value,
            "password": "1234",
            "email": event.target.username.value,
            "avatar": "https://www.melivecode.com/users/cat.png"
        }
        fetch('https://www.melivecode.com/api/users/create',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            alert(result.message)
            if(result.status === 'ok'){
                window.location.href = '/users'
            }
        })
    }
    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        placeholder='First Name'
                        id='fname'
                        name='fname'
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Last Name'
                        id='lname'
                        name='lname'
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Username'
                        id='username'
                        name='username'
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
