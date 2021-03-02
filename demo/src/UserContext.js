import React, { useState,createContext } from 'react'
import Appbar from './Appbar';

export const UserContext = createContext();

export const UserProvider = props => {

    const [userId,setUSerId] = useState(localStorage.getItem('userId'))


    return (
        <UserContext.Provider value={[userId,setUSerId]}>
           {props.children}
        </UserContext.Provider>
    )
}
