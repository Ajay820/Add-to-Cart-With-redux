import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartList:[],
        total:0
    },
    reducers:{
        add(state,action){
            const product = state.cartList.concat(action.payload)
            const total = state.total + action.payload.price
           return {...state,cartList: product,total: total}
        },
        remove(state,action){
            const product = state.cartList.filter((item)=>(item.id !== action.payload.id))
            const total = state.total - action.payload.price
            return {...state,cartList: product, total: total}
        }
    }
})


export const {add,remove} = cartSlice.actions

export const cartReducer = cartSlice.reducer



