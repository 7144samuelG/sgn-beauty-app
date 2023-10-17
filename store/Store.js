/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { createContext,useReducer } from 'react'
import Cookies from 'js-cookie';
export const Store=createContext();
const initialState={
    cart:Cookies.get('cart')?JSON.parse(Cookies.get('cart')):{cartItems:[],shippingAddress:{}}
}
function reducer(state,action){
    switch(action.type){
        case 'ADD_TO_CART':{
            const newItem=action.payload;
            const existItem=state.cart.cartItems.find((item)=>(
                item.name===newItem.name
            ))
            const cartItems=existItem?state.cart.cartItems.map((item)=>
                item.name===existItem.name?newItem:item
            ):[...state.cart.cartItems,newItem];
            Cookies.set('cart',JSON.stringify({...state.cart,cartItems}))
            return {...state,cart:{...state.cart,cartItems}};
        }
        case 'REMOVE_CART_ITEM':{
            const cartItems=state.cart.cartItems.filter((item)=>
            item.name!==action.payload.name
            );
            Cookies.set('cart',JSON.stringify({...state.cart,cartItems}))
            return{...state,cart:{...state.cart,cartItems}}
        }
        case 'CART_RESET':{
            return{
                ...state,
                cart:{
                    cartItems:[],
                    shippingAddress:{location:{}},
                    paymentMethod:''
                }
            }
        }
        case 'SHIPPING_ADDRESS':{
            return{
                ...state,
                cart:{
                    ...state.cart,
                    shippingAddress:{
                        ...state.cart.shippingAddress,
                        ...action.payload
                    }
                }
            }
        }
        case 'CART_ITEMS':
      return { ...state, cart: { ...state.cart, cartItems: [] } };

        case 'PAYMENT_METHOD':{
            return{
                ...state,
                cart:{
                    ...state.cart,
                    paymentMethod:action.payload
                }
            }

        };
        
        default:
            return state;
    }
}
export function StoreProvider({children}){
    const[state,dispatch]=useReducer(reducer,initialState)
    const value={state,dispatch}
    return <Store.Provider value={value}>{children}</Store.Provider>
}