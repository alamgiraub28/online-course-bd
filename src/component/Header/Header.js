import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
        <div className="logo">
        <img src={logo} alt=""/>
        </div>
        <div className="main-nav bg-success">
        <div className="container">
            <nav className="nav-bar">
                <a href="courseDetails/">All Courses</a>
                <a href="review/">Review Course</a>
                <a href="product/">Course Details</a>
            </nav>
        </div>
        </div>
        </div>
    );
};

export default Header;