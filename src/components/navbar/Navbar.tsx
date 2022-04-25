import React from 'react';
import './navbar.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className="navSearch">
          {/* <input type="text" placeholder="Search..." /> */}
          {/* <SearchOutlinedIcon  className="navSearchIcon"/> */}
        </div>
        <div className="navItems">
          <div className="navItem">
            <AccountCircleOutlinedIcon className="navIcon" />
            <span>Profile</span>
          </div>
          <div className="navItem">
            <ExitToAppOutlinedIcon className="navIcon" />
            <span>Logout</span>
          </div>
          <div className="navItem">
            <img 
              src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?cs=srgb&dl=pexels-mateus-souza-3586798.jpg&fm=jpg" 
              alt="user-image" 
              className="navAvatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;