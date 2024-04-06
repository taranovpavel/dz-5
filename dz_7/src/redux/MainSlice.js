import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    "getPost",
    async function(info,{dispatch}){
        const response= await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        dispatch(getPosts(data))
        dispatch(AccountFalse())
    }
)
const MainSlice = createSlice({
    name: "MainSlice",
    initialState: {
        isFirsAccount: true,
        posts: []
    },
    reducers:{
        getPosts:(state,action)=>{
            state.posts = action.payload
        },
        AccountFalse:(state)=>{
            state.isFirsAccount = false
        }
    }
})
export const {getPosts, AccountFalse} = MainSlice.actions
export default MainSlice.reducer