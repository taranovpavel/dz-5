import classes from "./User.module.css";
function User({userInfo}) {
    return (
        <div className={classes.card} onClick={()=> window.location.assign(`http://localhost:3000/${userInfo.id}`)}>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt="user"/>
            <div>
                <h1>{userInfo.name}</h1>
                <p>{userInfo.email}</p>
                <p>{userInfo.number}</p>
            </div>
        </div>
    )
}

export default User;