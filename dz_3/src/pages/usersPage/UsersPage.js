import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserAction} from "../../redux/actions";
import User from "../../components/User";
import classes from "./UsersPage.module.css";
const UsersPage = () => {
    const {users} = useSelector(state => state.usersReducer)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUserAction())
    }, []);
    console.log(users)
    return (
        <div className={classes.users}>
            {users.map((users,idx) => <User key={idx} userInfo={users}/>)}
        </div>
    );
};

export default UsersPage;