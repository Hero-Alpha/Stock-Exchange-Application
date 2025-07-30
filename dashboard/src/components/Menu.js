import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {

  const[isSelectedMenu , setIsSelectedMenu] = useState(0);
  const[isProfileDropdownOn , setIsProfileDropdownOn] = useState(false);

  const handleMenuClick = (index) =>{
    setIsSelectedMenu(index);
  }

  const handleProfileClick = () =>{
    setIsProfileDropdownOn(!isProfileDropdownOn);
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Kite Logo" style={{width:'5%'}} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to={"/"} onClick={()=>handleMenuClick(0)}>
              <p className={isSelectedMenu===0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
              <Link style={{textDecoration:"none"}} to={"/orders"} onClick={()=>handleMenuClick(1)}>
              <p className={isSelectedMenu===1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
              <Link style={{textDecoration:"none"}} to={"/holdings"} onClick={()=>handleMenuClick(2)}>
              <p className={isSelectedMenu===2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
              <Link style={{textDecoration:"none"}} to={"/positions"} onClick={()=>handleMenuClick(3)}>
              <p className={isSelectedMenu===3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
              <Link style={{textDecoration:"none"}} to={"/funds"} onClick={()=>handleMenuClick(4)}>
              <p className={isSelectedMenu===4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
              <Link style={{textDecoration:"none"}} to={"/apps"} onClick={()=>handleMenuClick(6)}>
              <p className={isSelectedMenu===6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        {isProfileDropdownOn}
      </div>
    </div>
  );
};

export default Menu;