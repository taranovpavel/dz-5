import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeTitle, changeTitleParams, getPost} from "../../redux/PostSlice";

function PostPage () {
    const dispatch = useDispatch()
    const {title, posts} = useSelector(state => state.postReducer)
    const changeTitlePost = () => {
        dispatch(changeTitle())
    }
    console.log(posts)
    return(
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitlePost}>change title</button>
            <button onClick={()=>dispatch(changeTitleParams("hello geeks"))}>change title with params</button>
            <button onClick={()=>dispatch(getPost())}>get post</button>
            <button>delete all</button>
        </div>
    )
}

export default PostPage;