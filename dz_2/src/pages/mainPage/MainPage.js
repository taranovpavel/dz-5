import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeTitleAction} from "../../redux/actions";
import {changeTitleWithParamsAction} from "../../redux/actions";

const MainPage = () => {
    const title = useSelector(state => state.titleReducer.title)
    const dispatch = useDispatch()
    const changeTitle = () =>{
        dispatch(changeTitleAction())
    }
    const changeTitleWithParams = () =>{
        dispatch(changeTitleWithParamsAction("allo"))
    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
            <button onClick={changeTitleWithParams}>change with params</button>
        </div>
    );
};

export default MainPage;