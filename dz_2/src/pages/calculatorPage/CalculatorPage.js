import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeNumOneAction, changeNumTwoAction, makeResultAction} from "../../redux/actions";
import classes from "./CalculatorPage.module.css";
const CalculatorPage = () => {
    const {num_one, num_two, result} = useSelector(state => state.calculatorReducer)
    const dispatch = useDispatch()
    const changeNumOne = (event) =>{ dispatch(changeNumOneAction(event.target.value)) }
    const changeNumTwo = (event) =>{ dispatch(changeNumTwoAction(event.target.value)) }

    // if((num_one !== undefined)&&(num_two !== undefined)){} ( Проверка на пустой инпут не пригодилась так как он не позволяет сделать его пустым )
    const makeResult = (sign) => {
        if((num_one !== "")&&(num_two !== "")){
            if (sign === "+"){
                dispatch(makeResultAction(num_one + num_two))
            }else if (sign ==="-"){
                dispatch(makeResultAction(num_one - num_two))
            }else if (sign ==="*"){
                dispatch(makeResultAction(num_one * num_two))
            }else if (sign ==="/"){
                dispatch(makeResultAction(num_one / num_two))
            }
        }
    }
    return (
        <>
            <div className={classes.equation}>
                <input value={num_one} onChange={changeNumOne} type="number"/>
                <div className={classes.buttons}>
                    <button onClick={() => makeResult("/")}>÷</button>
                    <button onClick={() => makeResult("-")}>-</button>
                    <button onClick={() => makeResult("+")}>+</button>
                    <button onClick={() => makeResult("*")}>×</button>
                </div>
                <input value={num_two} onChange={changeNumTwo} type="number"/>
                <p>= {result}</p>
            </div>
        </>
    );
};

export default CalculatorPage;