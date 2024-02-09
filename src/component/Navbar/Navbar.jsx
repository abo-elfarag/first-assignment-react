import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
render() {
    return (
        <>
            <nav style={{backgroundColor:'#2C3E50',}} className="navbar navbar-expand-lg w-100 position-fixed">
    <div  className="container py-2">
        <a  className="navbar-brand fw-bold fs-2 text-white" >START FRAMEWORK
        </a>
        <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul  className="navbar-nav ms-auto mb-2 mb-lg-0 me-4 ">
                <li  className="nav-item ms-5 ">
                    <Link  className=" nav-link text-white fs-4 active px-3 " aria-current="page" to="/about">About</Link>
                </li>
                <li className="nav-item ms-5">
                    <Link className="nav-link text-white fs-4 px-3" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item ms-5">
                    <Link className="nav-link text-white fs-4 px-3" to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
        </>
    )
}
}
