import React, { useEffect, useState } from 'react'
import UserItems from './UserItems';

export default function User() {

    const [users, setUsers] = useState([''])

    const getUser = async () => {
        try {
            const response = await fetch("https://api.github.com/users");
        setUsers(await response.json());
        } catch (error) {
            console.log("my error is" + error);
        }
    }
    useEffect(() => {
        getUser();
    }, [])

  return <UserItems users={users}/>

}
