import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className ="header">
         <NavLink to="/home"   activeStyle={{
                fontWeight: "bold",
                color: "red"
           }}  >Home
        </NavLink>

       <NavLink to="/friends"    activeStyle={{
              fontWeight: "bold",
                 color: "red"
            }}>Friends
         </NavLink>

       <NavLink to="/about"   activeStyle={{
        fontWeight: "bold",
            color: "red"
          }}>About
    </NavLink> 
       <NavLink to="/about/culture"   activeStyle={{
        fontWeight: "bold",
            color: "red"
          }}>Culture
    </NavLink> 

        </div>
    );
};

export default Header;