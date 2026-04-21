import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const Api = `http://localhost:3000/user`

const initialState={
    user:{},
    isAuth:false,
    isLoading:true,
    isError:null,
    rol:null,
}

const AuthSlice = createSlice( {
  name:"auth",
  Api,
  initialState,
  reducers:{
    setInitialData: (state,action) => {
        const {rol} = action.payload;
        state.user = action.payload;
        state.isAuth=true;
        state.rol = rol;
    },
    setLoading: (state,action)=>{
        state.isLoading = action.payload;
    },
    logOut:(state)=>{
        state.user=null;
        state.isAuth = false;
        state.isLoading = false;
        state.isError = null;
        state.rol = null;
    },
    logIn:(state,action)=>{
        const {rol} = action.payload;
        state.user = action.payload;
        state.isAuth = true;
        state.rol = rol;
    }
  }

})
export const {setLoading, logIn, logOut,setInitialData} = AuthSlice.actions
export default AuthSlice