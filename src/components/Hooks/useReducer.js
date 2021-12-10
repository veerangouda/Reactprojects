import React, { useReducer } from 'react'
import "./style.css"

const reducer = (state, action) => {
    if (action.type === "INCR") {
        state = state + 1
    }
    if (state > 0 && action.type === "DECR") {
        state = state - 1;
    }
    return state;
}

const UseReducer = () => {
    const initialState = 0;
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
                    INCR
                </div>
                <div class="button2" onClick={() => dispatch({ type: "DECR" })} >
                    DECR
                </div>
            </div>
        </>
    )
}

export default UseReducer
