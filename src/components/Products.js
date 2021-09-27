/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect } from 'react'
import {UserContext} from '../contexts/UserContext'
import AddProduct from './AddProduct';

const stateInitialize = {
    listProducts: [],
    counter: 0
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD_PRODUCT':{
            return{
                ...state,
                listProducts: [...state.listProducts, action.payload]

            }
        }

        case 'INCREMENT':{
            return{
                ...state,
                counter: state.counter + 1
            }
        }

        case 'DECREMENT':{
            return{
                ...state,
                counter: state.counter - 1
            }
        }
        default: {
            return state
        }
    }

}

const Products = () => {
    const [state, dispatch] = useReducer(reducer, stateInitialize)

    // const [listProducts, setListProducts] = useState([])
    // const [counter, setCounter] = useState(0)

    // useEffect(() => {
    //     setListProducts([
    //     {"id":1, "name":"Iphone 13","price":"1200$"},
    //     {"id":2, "name":"Huwaei Nova","price":"1100$"},
    //     {"id":3, "name":"Samsung Note Galaxy","price":"1300$"},
    //     {"id":4, "name":"Xaomi Redmi Note","price":"1000$"}
    // ])   
    // },[setListProducts])


    // const addNewProduct = (newProduct) => {
    //     setListProducts([newProduct, ...listProducts])

    // }

    const addNewProduct = (newProduct) => {
        dispatch({type: 'ADD_PRODUCT', payload: newProduct})

    }

    // const increment = () =>{
    //     setCounter(counter + 1);
    // }

    const increment = () =>{
        dispatch({type: 'INCREMENT' })
    }

    const decrement = () =>{
        dispatch({type: 'DECREMENT' })
    }
    return (
        <div>

             <UserContext.Consumer>
                 {loggedIn => console.log("Products",loggedIn)}
             </UserContext.Consumer>
            <div className="text-center">
                <h3>{state.counter}</h3>
                <button onClick={increment} className="btn-success mr-3">Incrementer</button>
                <button onClick={decrement} className="btn-success ml-3">Decrementer</button>
            </div>

        <AddProduct addNewProduct={addNewProduct} />

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name of product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {state.listProducts.map(product =>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>

                    ))}
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default Products
