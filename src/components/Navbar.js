import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavStyle.css'

export default function Navbar() {
    const [isLine, setLine] = useState(true);
    const handleIconClick = () => {
        setLine((prevState) => !prevState);
    };

    const logoStyle = {
        height: "38px",
        width: "auto"
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <div className="slide-in-container d-flex me-5">
                        <div className="d-inline-block slide-in-container animated ms-5 ps-3 me-5" data-anim-type="slide-in-up">
                            <Link className="navbar-brand me-5" to="/" rel="home">
                                <img src="http://www.mentorsity.com/wp-content/uploads/2021/04/150-e1618507145769.png" alt="Mentorsity" style={{logoStyle}} />
                            </Link>
                        </div>
                    </div>
                        { isLine && <span className='vertical-line'></span>}
                    <button className="navbar-toggler" onClick={handleIconClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        { isLine ? (<> <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span> </>) : (<>
                                <span className="navbar-toggler-line-1"></span>
                                <span className="navbar-toggler-line-2"></span> </>
                        )}
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="menu-item menu-item-type-custom nav-item dropdown d-md-flex ms-4">
                                <Link title="About-Us" className="text-body-default font-weight-bold nav-link  fade-in" to="/AboutUs"  >
                                    <span className="pix-dropdown-title text-sm pix-header-text">About-Us</span>
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link title="Attend" className="text-body-default font-weight-bold dropdown-toggle nav-link  fade-in"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >
                                    <span className="pix-dropdown-title text-sm pix-header-text">Attend</span>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-14230" role="menu">
                                    <div className="submenu-box pix-default-menu bg-white">
                                        <div className="container">
                                            <div className="menu-item menu-item-type-custom nav-item dropdown d-md-flex w-100">
                                                <Link title="MIND" className="text-body-default font-weight-bold dropdown-item" to="/" >
                                                    <span className="pix-dropdown-title text-body-default text-sm">MIND</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link title="Our Product" className="nav-link dropdown-toggle text-body-default font-weight-bold nav-link fade-in" 
                                    data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                    <span className="pix-dropdown-title text-sm  pix-header-text text-body-default">Our Product</span>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-19004" role="menu">
                                    <div className="submenu-box pix-default-menu bg-white">
                                        <div className="container">
                                            <div className="menu-item menu-item-type-custom nav-item dropdown d-md-flex w-100">
                                                <Link title="HiKi" className="text-body-default font-weight-bold dropdown-item" to="/" >
                                                    <span className="pix-dropdown-title text-sm text-body-default">HiKi</span>
                                                </Link>
                                            </div>
                                            <div className="menu-item menu-item-type-custom nav-item dropdown d-md-flex w-100">
                                                <Link title="KYC" className="text-body-default font-weight-bold dropdown-item" to="/" >
                                                    <span className="pix-dropdown-title text-sm text-body-default ">KYC</span>
                                                </Link>
                                            </div>
                                            <div className="menu-item menu-item-type-custom nav-item dropdown d-md-flex w-100">
                                                <Link title="Prepattern" className="text-body-default font-weight-bold dropdown-item" to="/" >
                                                    <span className="pix-dropdown-title text-sm text-body-default ">Prepattern</span>
                                                </Link>
                                            </div>
                                            <div className="menu-item menu-item-type-custom nav-item dropdown d-md-flex w-100">
                                                <Link title="PuPa" className="text-body-default font-weight-bold dropdown-item" to="/" >
                                                    <span className="pix-dropdown-title text-sm text-body-default">PuPa</span>
                                                </Link>
                                            </div>
                                            <div className="menu-item menu-item-type-custom nav-item dropdown d-md-flex w-100">
                                                <Link title="Mentoring" className="text-body-default font-weight-bold dropdown-item" to="/" >
                                                    <span className="pix-dropdown-title text-sm text-body-default">Mentoring</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-custom nav-item dropdown d-md-flex">
                                <Link title="College" className="text-body-default font-weight-bold nav-link fade-in" to="/collage" >
                                    <span className="pix-dropdown-title text-sm pix-header-text">College</span>
                                </Link>
                            </li>
                            <li className="menu-item menu-item-type-custom nav-item dropdown d-md-flex">
                                <Link title="Corporate" className="text-body-default font-weight-bold nav-link fade-in" to="/" >
                                    <span className="pix-dropdown-title text-sm pix-header-text">Corporate</span>
                                </Link>
                            </li>
                            <li className="menu-item menu-item-type-custom nav-item dropdown d-md-flex">
                                <Link title="Browse Mentor" className="text-body-default font-weight-bold nav-link fade-in" to="/" >
                                    <span className="pix-dropdown-title text-sm pix-header-text">Browse Mentor</span>
                                </Link>
                            </li>
                            <li className="menu-item menu-item-type-custom nav-item dropdown d-md-flex">
                                <Link title="Community" className="text-body-default font-weight-bold nav-link fade-in" to="/Community" >
                                    <span className="pix-dropdown-title text-sm pix-header-text">Community</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="d-inline-flex  d-inline-block2 text-sm ">
                            <Link data-anim-type="disabled" className="btn btn-orange btn-rounded btn-sm font-weight-bold d-flex " to="/">
                                <span>Login</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
