import React from 'react';
import './sidebar.css';
import { Logo } from '../../assets'

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className="sidebar">
        <div className="top">
            <img src={Logo} alt="logo" style={{ width: '100px' }} />
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">Main</p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>
                <p className="title">Lists</p>
                <li>
                    <PersonOutlineOutlinedIcon className="icon" />
                    <span>Users</span>
                </li>
                <li>
                    <StoreOutlinedIcon className="icon" />
                    <span>Products</span>
                </li>
                <li>
                    <CreditCardOutlinedIcon className="icon" />
                    <span>Orders</span>
                </li>
                <p className="title">Useful</p>
                <li>
                    <InsertChartOutlinedIcon className="icon" />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className="icon" />
                    <span>Notifications</span>
                </li>
                <p className="title">Service</p>
                <li>
                    <PsychologyOutlinedIcon className="icon" />
                    <span>Logs</span>
                </li>
            </ul>
        </div>
        {/* <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div> */}
    </div>
  )
}

export default Sidebar