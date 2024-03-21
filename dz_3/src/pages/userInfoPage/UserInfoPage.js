import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserInfoAction} from "../../redux/actions";
import classes from "./UserInfoPage.module.css";

const UserInfoPage = () => {
    const {id} = useParams()
    const {user} = useSelector(state => state.userInfoReducer)
    const dispatch = useDispatch()
    const [ loading, setLoading ] = useState(false);
    useEffect(() => {
        dispatch(fetchUserInfoAction(id))
    }, []);
    console.log(user)
    return (
        <div className={classes.user}>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt={user.name}/>
            <div>
                <p>Name: {user?.name}</p>
                <p>Username: {user?.username}</p>
                <p>Email: {user?.email}</p>
                <p>Address: {user?.address?.city} {user?.address?.street} {user?.address?.suite}</p>
                <p>Phone Number: {user?.phone}</p>
                <p>Website: {user?.website}</p>
                <p>Company Name: {user?.company?.name}</p>
                <p>Company Catch Phrase: {user?.company?.catchPhrase}</p>
                <p>Company Bs: {user?.company?.bs}</p>
            </div>
        </div>
    );
};

export default UserInfoPage;