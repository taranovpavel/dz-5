import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    "getPost",
    async function(info,{dispatch}){
        const response= await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        dispatch(getPosts(data))
    }
)

const MainSlice = createSlice({
    name: "postSlice",
    initialState: {
        title: "title",
        posts: []
    },
    reducers:{
        getPosts:(state,action)=>{
            state.posts = action.payload
        }
    }
})
export const {getPosts} = MainSlice.actions
export default MainSlice.reducer