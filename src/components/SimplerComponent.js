// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = () => {

    function handleClick(event){
        event.target.textContent == 'I am just happy'
            ? event.target.textContent = `I'M HAPPY OKAY!!`
            : event.target.textContent = 'I am just happy'
    }


    return (
        <div onClick={(event) => handleClick(event)}>I am just happy</div>
    )
}

export default SimplerComponent