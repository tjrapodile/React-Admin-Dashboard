import React from 'react'
import './Customers.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'

const Customers = () => {
  return (
    <div className = "customers">
      <Sidebar/>
      <div className="customersContainer">
        <Navbar/>
        <Datatable/>
      </div>
  
    </div>
  )
}

export default Customers