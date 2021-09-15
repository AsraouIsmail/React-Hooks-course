/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function AddProduct({addNewProduct}) {
    const [product, setProduct] = useState({name: '', price: 0})
    const handleForm = (e) => {
        setProduct({...product,[e.target.name]: e.target.value})
    }

    const submitForm = (e) =>{
        e.preventDefault();
        if (product.name === '' || product.price === 0) return
        addNewProduct(product)
    }
    return (
        <div>
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

               {JSON.stringify(product)}
           </form>
        </div>
    )
}

export default AddProduct
