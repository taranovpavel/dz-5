import React, {useState} from 'react';
import Container from "../../components/Container";
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";
import {useDispatch} from "react-redux";
import {getPost} from "../../redux/MainSlice";

const MainPage = () => {
    const dispatch = useDispatch()
    const [Class , setClass] = useState({
        variant: "delete",
        isOK: false
    })
    const [data, setData] = useState({
        number: "",
        email:"",
        password:""
    })
    const formValue = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
        if ((data.password.length < 6) || (data.email.length< 6) || (data.number.length< 6)){
            setClass({
                ...Class,
                variant: "delete",
                isOK: false
            })
            console.log(data)
        }else{
            setClass({
                ...Class,
                variant: "primary",
                isOK: true
            })
        }
    }

    return (
        <Container variant={"small"}>
            <div style={{display: "flex"}}>
                <Input
                    onChange={formValue}
                    label="введите пароль"
                    placeholder="password"
                    name='password'
                    type="password"
                ></Input>
                <Input
                    onChange={formValue}
                    name='email'
                    label="введите почту"
                ></Input>
                <Input
                    name='number'
                    onChange={formValue}
                    label="введите номер"
                ></Input>
            </div>
            <Button oonClick={Class.isOK?()=>dispatch(getPost()):""} variant={Class.variant}>signup</Button>
        </Container>
    );
};

export default MainPage;