import React from 'react'
import './Single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/list/List'
const Single = () => {
  return (
    <div className = "single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <span className="editButton">Edit</span>
            <div className="item">
              <img src = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "" className="itemImg"/>
            <div className="details">
              <h1 className="itemtitle">Bob Vance</h1>
              <div className="detailItem">
                <span className="itemkey">Email: </span>
                <span className="itemvalue">bobvance2gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemkey">Phone: </span>
                <span className="itemvalue">0820001234</span>
              </div>
              <div className="detailItem">
                <span className="itemkey">Address: </span>
                <span className="itemvalue">commisioner str, Gauteng</span>
              </div>
              <div className="detailItem">
                <span className="itemkey">Country: </span>
                <span className="itemvalue">South Africa</span>
              </div>
            </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1}/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single