import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    "getPost",
    async function(info,{dispatch}){
        const response= await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        dispatch(getPosts(data))
    }
)

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        title: "title",
        posts: []
    },
    reducers:{
        changeTitle:(state, action)=>{
            state.title = "new title"
        },
        changeTitleParams:(state,action)=>{
            state.title = action.payload
        },
        getPosts:(state,action)=>{
            state.posts = action.payload
        }
    }
})
export const {changeTitle, changeTitleParams, getPosts} = postSlice.actions
export default postSlice.reducer