import React from 'react'
import './Widget.scss'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const Widget = ({ type }) => {

    const amount = 1000;
    let data;
    switch (type) {
        case "customer":
            data = {
                title: "CUSTOMERS",
                isMoney: false,
                link: "View all customers",
                icon: <PersonOutlinedIcon className = "icon" style = {{color: "blue", backgroundColor: "rgba(0, 128, 255, 0.2)"}}/>,
            };
            break;
        case "order":
            data ={
                 title: "ORDERS",
                 isMoney: false,
                 link: "View all orders",
                 icon: <LocalGroceryStoreIcon className = "icon" style = {{color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)"}}/>,
            };
            break;
        case "earnings":
            data = {
                title: "earnings",
                isMoney: true,
                link: "View all earnings",
                icon: <MonetizationOnOutlinedIcon className = "icon" style = {{color: "red", backgroundColor: "rgba(255, 0, 0, 0.2)"}}/>,
            };
            break;
        case "balance":
            data = {
                title: "balance",
                isMoney: true,
                link: "View balance",
                icon: <CreditCardIcon className = "icon" style = {{color: "silver", backgroundColor: "rgba(128, 128, 128, 0.2)"}}/>,
            };
            break;
        default:
            break;
    }
  return (
    <div className = "widget">
        <div className = "left">
            <span className = "title">{data.title}</span>
            <span className = "counter">{data.isMoney ? "R" : ""} {amount}</span>
            <span className = "link">{data.link}</span>
        </div>
        <div className = "right">
            <div className = "percentage negative">
                <KeyboardArrowUpRoundedIcon className = "icon"/>
                20%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget