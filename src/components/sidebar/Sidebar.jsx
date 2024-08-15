import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className = "sidebar">
        <div className = "top">
            <Link to = "/" style={{ textDecoration: "none" }}>
                <span className = "logo">Admin Dashboard</span>
            </Link>
        </div>
        <div className = "bottom">
           <ul>
            <p className = "title">MAIN</p>
            <Link to = "/" style={{ textDecoration: "none" }}>
                <li>
                    <DashboardIcon className = "icon"/>
                    <span>Dashboard</span>
                </li>
            </Link>
            <p className = "title">LISTS</p>
            <Link to = "/customers" style={{ textDecoration: "none" }}>
                <li>
                    <PersonIcon className = "icon"/>
                    <span>Users</span>
                </li>
            </Link>
            <Link to = "/product" style={{ textDecoration: "none" }}>
                <li>
                    <LocalGroceryStoreIcon className = "icon"/>
                    <span>Products</span>
                </li>
            </Link>
            <li>
                <CreditCardIcon className = "icon"/>
                <span>Orders</span>
            </li>   
            <p className = "title">USEFUL</p>
            <li>
                <InsertChartOutlinedIcon className = "icon"/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsActiveOutlinedIcon className = "icon"/>
                <span>Notifications</span>
            </li>
            <p className = "title">SERVICE</p>
            <li>
                <DnsOutlinedIcon className = "icon"/>
                <span>System Health</span>
            </li>
            <li>
                <SettingsOutlinedIcon className = "icon"/>
                <span>Settings</span>
            </li>
            <p className = "title">USER</p>
            <li>
                <ManageAccountsOutlinedIcon className = "icon"/>
                <span>Profile</span>
            </li>
            <li>
                <LogoutOutlinedIcon className = "icon"/>
                <span>Logout</span>
            </li>
           </ul>
        </div>
    </div>
  )
}

export default Sidebar