import React, { useState } from 'react'
import '../App.css'
const Counter = () => {
    const [number, setNumber] = useState(0)
    return (
        <div className='main'>
            <div className='box'>
                <center><h1><u> Counter App </u> </h1></center>
                <h1 className='number'>  Current Number:- {number} </h1>

                <div className='btn-group'>
                    <button onClick={() => {
                        setNumber(number + 1)
                    }} >Increase Counter</button>
                    <button onClick={() => {
                        setNumber(number > 0 ? number - 1 : 0)
                    }}  >Decrease Counter</button>
                </div>
            </div>
        </div>

    )
}

export default Counter;