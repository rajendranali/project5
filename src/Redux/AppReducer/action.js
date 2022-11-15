import * as types from "./actionTypes"
import axios from "axios"

export const getResturant=(params)=>(dispacth)=>{
   
    dispacth({type:types.GET_RESTURANT_REQUEST})
    return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${params}&limit=20`).then((r)=>{
       console.log(r.data)
        return dispacth({type:types.GET_RESTURANT_SUCCESS,payload:r.data})
    }).catch((err)=>dispacth({type:types.GET_RESTURANT_ERROR}))
    }

    export const addData=(id)=>dispacth=>{
   dispacth({type:types.ADD_REQUEST})
   return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`).then((r)=>{
    localStorage.setItem('restaurants', JSON.stringify(r.data));
    return dispacth({type:types.ADD_SUCCESS,payload:r.data})
   }).catch((err)=>dispacth({type:types.ADD_ERROR}))
    }

