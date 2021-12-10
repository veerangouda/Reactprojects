import React, { useEffect, useState } from 'react'
import "./style.css"


const UseEffect = () => {
    const [myNum, setmyNum] = React.useState(0)
    console.log(myNum);

    useEffect(() => {
        document.title =`My Chats(${myNum})`
    })

    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <div class="button2" onClick={() => setmyNum(myNum + 1)}>
                    INCR
                </div>
            </div>
        </>
    )
}

export default UseEffect
