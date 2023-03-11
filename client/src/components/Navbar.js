import React from 'react'
import { NavLink } from "react-router-dom";

import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { RiNotification2Line } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
const Navbar = () => {
    return (
        <>
            <div className="navbar-section">
                <div className="logo">
                    <h2>Recipes <span> App</span></h2>
                </div>
                <div className="navbar">
                    <ul>
                        <li><NavLink to='/' className='navlink'> Home</NavLink></li>
                        <li><NavLink to='/create-recipes' className='navlink'> Create Recipes </NavLink></li>
                        <li><NavLink to='/recipes-list' className='navlink'> Recipes List </NavLink></li>
                        <li><NavLink to='/sds' className='navlink'> Saved Recipes </NavLink></li>
                      
                    </ul>

                </div>
                <div className="navbar-icon">
                    <AiOutlineSearch size={25} />
                    <Badge color="secondary" badgeContent={99}>
                        <RiNotification2Line color="action" size={25} />
                    </Badge>

                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 50, height: 50 }}
                    />


                </div>
            </div>


        </>
    )
}

export default Navbar