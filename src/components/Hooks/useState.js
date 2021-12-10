import React from 'react'
import "./style.css"


const useState = () => {
    const [myNum, setmyNum] = React.useState(0)
    console.log(myNum);
    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <div class="button2" onClick = {() =>  setmyNum(myNum + 1)}>
                    INCR
                </div>
                <div class="button2" onClick = {() => (myNum > 0 ?  setmyNum(myNum - 1) : setmyNum(0))} >
                    DECR
                </div>
            </div>
        </>
    )
}

export default useState
