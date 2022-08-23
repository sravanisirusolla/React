import React, { useContext } from 'react';
import { createContext,useReducer} from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers';
const cart=createContext();
faker.seed(99)
const Context = ({children}) => {
    const a=[1,2,3,4,5]
    const b=[0,3,5,6,7]
    const products=[...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.image(),
        inStock:b[Math.floor(Math.random()*b.length)],
        fastDelivery:faker.datatype.boolean(),
        ratings:a[Math.floor(Math.random()*a.length)]
    }))
    const [state, dispatch] = useReducer(cartReducer,{products:products,cart:[]})
    return <cart.Provider value={{state,dispatch}}>{children}</cart.Provider>
}
export default Context;
export const CartState=()=>{
    return useContext(cart)
}