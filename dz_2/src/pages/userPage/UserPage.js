import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUserAction, changeInputValueAction, deleteUsersAction} from "../../redux/actions";
import User from "../../components/User";


const UserPage = () => {
    const {users,value} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const changeInput = (event) =>{
        dispatch(changeInputValueAction(event.target.value))
    }
    const addUser = () =>{
        dispatch(addUserAction(value))
    }
    const deleteUsers = () =>{
        dispatch(deleteUsersAction())
    }
    return (
        <div>
            <input value={value} onChange={changeInput} type="text" placeholder={"name"}/>
            <button onClick={addUser} >add</button>
            <button onClick={deleteUsers}>delete</button>
            {users.map((users,idx) => <User key={idx} name={users}/>)}
        </div>
    );
};

export default UserPage;