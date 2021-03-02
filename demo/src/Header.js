import React from 'react'
import { Link } from 'react-router-dom'
import Home from './home'

export default function Header({name,age}) {
    const navStyle = {
        display: 'inline',
        float: 'right',
        marginLeft : '20px',
        marginRight : '20px'
    }
    const ulStyle = {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        backgroundColor: '#333'
    }

    return (
        <div>
            {name} {age}
            <ul style={{ulStyle}}>
                <li style={navStyle}>
                    <Link to='/' >Home </Link>
                </li>
                <li style={navStyle}>Header</li>
                <li style={navStyle}>
                    <Link to='/footer' >Footer </Link>
                    </li>
                
            </ul>

        </div>
    )
}
