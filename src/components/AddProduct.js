/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const AddProduct = ({addNewProduct}) =>  {
    const {loggedIn, setLoggedIn} = useContext(UserContext)
    const [product, setProduct] = useState({name: '', price: 0})

    const handleForm = e => {
        setProduct({...product, [e.target.name]: e.target.value})
    }


    const submitForm = e =>{
        e.preventDefault();
        if (product.name === '' || product.price === 0) return

        let newProduct = {
            id: Math.random() * 1000, ...product
        }
        addNewProduct(newProduct)
    }
    return (
        <div className="container-fluid">
            {/* <UserContext.Consumer>
                 {loggedIn => console.log("AddProduct",loggedIn)}
             </UserContext.Consumer> */}
             <h1>{loggedIn? "you're logged": "you're not logged!"}</h1>
             <button onClick={() => setLoggedIn(!loggedIn)} className="btn btn-success">Toggle</button>

           <h3>Create a product</h3> 
           <form onSubmit={submitForm}>
               <div className="form-group">
                   <label htmlFor=""></label>
                   <input onChange={handleForm}  value={product.name} placeholder="name of product" name="name" type="text" className="form-control" />
                   </div>
               <div className="form-group">
                   <label htmlFor=""></label>
                   <input onChange={handleForm} value={product.price}   placeholder="price of product" name="price" type="text" className="form-control" />
                   </div>
                   
               <button className="btn btn-block btn-primary">Add Product</button>

               {/* {JSON.stringify(product)} */}
           </form>
        </div>
    )
}

export default AddProduct
