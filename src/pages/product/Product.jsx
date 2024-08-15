import React from 'react'
import './Product.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import ProductTable from '../../components/producttable/ProductTable'
import {Link} from 'react-router-dom'
const Product = () => {
  return (
    <div className = "product">
      <Sidebar/>
      <div className = "productContainer">
        <Navbar/>
        <div className="productList">
          <div className="datatableTitle">
            <span>Add New Product</span>
            <Link to = "/product/productId/new" style = {{textDecoration: "none"}}>
              <span className = "link">Add New</span>
            </Link>
          </div>
          <ProductTable/>
        </div>
      </div>
    </div>
  )
}

export default Product