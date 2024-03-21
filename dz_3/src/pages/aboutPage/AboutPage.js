import React from 'react';
import {useDispatch} from 'react-redux'
import {asyncFunctionAction} from "../../redux/actions";
const AboutPage = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() =>dispatch(asyncFunctionAction())}>say hello</button>
    );
};

export default AboutPage;