import React, { useState } from 'react'

export default function Home() {

    let [counter,setCounter] = useState(10) // destructuring
    let [counter2,setCounter2] = useState(20)

    const counterHandle = () => {
        setCounter(counter + 1)
        setCounter2(counter2 + 1)
    }

    return (
        <div>
            {counter}
            <br />
            {counter2}
            <br />
            <button onClick={() => counterHandle()}>Click</button>
        </div>
    )
}
