/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import AddProduct from './AddProduct';

const Products = () => {
    const [listProducts, setListProducts] = useState([
        {"id":1, "name":"Iphone 13","price":"1200$"},
        {"id":2, "name":"Huwaei Nova","price":"1100$"},
        {"id":3, "name":"Samsung Note Galaxy","price":"1300$"},
        {"id":4, "name":"Xaomi Redmi Note","price":"1000$"}
    ])

    const addNewProduct = (newProduct) =>{
        setListProducts([newProduct, ...listProducts])

    }
    return (
        <div>

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
                    {listProducts.map(product =>(
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
