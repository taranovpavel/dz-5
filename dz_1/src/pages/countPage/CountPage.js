import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from "./CountPage.module.css";
const CountPage = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const minusTen = () =>{
        if (count >= 10) {
            dispatch({
                type: "MINUS_10",
                payload: count-10
            })
        } else {
            dispatch({
                type: "MINUS_10",
                payload: 0
            })
        }
    }
    const minusOne = () =>{
        if (count >= 1) {
            dispatch({
                type: "MINUS_1",
                payload: count-1
            })
        }
    }
    const plusOne = () =>{
        dispatch({
            type: "PLUS_1",
            payload: count+1
        })
    }
    const plusTen = () =>{
        dispatch({
            type: "PLUS_10",
            payload: count+10
        })
    }
    const reset = () =>{
        dispatch({
            type: "RESET",
            payload: 0
        })
    }
    return (
        <>
            <h1>{count}</h1>
            <div className={classes.buttons}>
                <button onClick={minusTen}>-10</button>
                <button onClick={minusOne}>-1</button>
                <button onClick={reset}>reset</button>
                <button onClick={plusOne}>+1</button>
                <button onClick={plusTen}>+10</button>
            </div>
        </>
    );
};

export default CountPage;