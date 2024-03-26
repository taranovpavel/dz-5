import React, {useState} from 'react';
import {Form, Button, Container, Spinner} from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {registerNewAccountAction} from "../../redux/actions";

const RegistrationPage = () => {
    const {preloader} = useSelector(state => state.registrationReducer)
    // const preloader = false
    const dispatch = useDispatch()
    const [data, setData] = useState({
        username: "",
        email:"",
        password:""
    })
    const [Class , setClass] = useState({
        username: "mb-3 border border-warning rounded",
        email: "mb-3 border border-warning rounded",
        password:"mb-3 border border-warning rounded"
    })
    const formValue = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
        if (event.target.value === ""){
            setClass({
                ...Class,
                [event.target.name]: "mb-3 border border-danger rounded"
            })
        }else{
            setClass({
                ...Class,
                [event.target.name]: "mb-3"
            })
        }
    }

    const registerNewAccount = (event) => {
        if (data.username === '' || data.email === '' || data.password === '') {
            alert("Fill in all the fields")
            event.preventDefault()
        }else{
            event.preventDefault()
            dispatch(registerNewAccountAction(data))
        }
    }
    console.log(data)
    console.log(Class)
    return (
        <Container  data-bs-theme="dark">
            <Form onSubmit={registerNewAccount}>
                <Form.Group className={Class.username} controlId="username">
                    <Form.Control
                        type="text"
                        placeholder='Enter username'
                        name='username'
                        onChange={formValue}
                    />
                </Form.Group>
                <Form.Group className={Class.email} controlId="email">
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name='email'
                        onChange={formValue} />
                </Form.Group>
                <Form.Group className={Class.password} controlId="password">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name='password'
                        onChange={formValue} />
                </Form.Group>
                <Button type='submit' variant='success' className='w-100'>
                    {preloader ?
                        <Spinner
                        animation="border"
                        variant="dark"
                        size="sm"
                        />:
                        "Register new account"
                    }
                </Button>
            </Form>
        </Container>
    );
};

export default RegistrationPage;