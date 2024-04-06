import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../../redux/MainSlice";


const MainPage = () => {
    const dispatch = useDispatch()
    const {isFirsAccount} = useSelector(state => state.MainSlice)
    const [data, setData] = useState({
        password: "",
        username:"",
        repeatPassword:""
    })
    const formValue = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    const registerNewAccount = (event) => {
        if (data.password === ""|| data.repeatPassword === ""||data.username === ""){
            alert("Fill in all the fields")
            event.preventDefault()
        }else if(data.password !== data.repeatPassword){
            event.preventDefault()
            alert("Password mismatch")
        }else if(isFirsAccount === true){
            event.preventDefault()
            alert("You have successfully created a new account")
            dispatch(getPost())
        }else{
            event.preventDefault()
            alert("You have already created an account")
        }
    }
    return (
        <div>
            <input placeholder={"Username"} onChange={formValue} name="username" type="text"/>
            <input placeholder={"Password"} onChange={formValue} name="password" type="text"/>
            <input placeholder={"Repeat password"} onChange={formValue} name="repeatPassword" type="text"/>
            <button onClick={registerNewAccount}>Register New Account</button>
        </div>
    );
};
export default MainPage;