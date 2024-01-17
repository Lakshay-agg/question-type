import React from 'react';

import './Navbar.css';

const Navbar = () => {

    return (

        <div className="navbar">

            <div className="logo">Company Logo</div>

            <div className="options">

                <div className="option">Language</div>

                <div className="option">Bell-Icon</div>

                <div className="option">

                  <img className="profile-pic" src="https://via.placeholder.com/50" alt="User" />

                </div>

            </div>



        </div>



    );



};







export default Navbar;