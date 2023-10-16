import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavStyle.css'
import styled, { keyframes } from 'styled-components';

const navbarTogglerLineProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '4px',
    backgroundColor: '#101010',
    width: '30px',
    transform: 'translate(-50%, -50%)',
};

const slideInFromBottom = keyframes`
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    `;

const StickyNavbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const styles = {
    textsm: {
        fontSize: "13px",
        color: "#343434",
    },
    logoStyle: {
        height: "37px",
        width: "auto",
        marginTop: '3px',
        animationDelay: '0.5s'
    },
    weights: {
        fontWeight: 550, display: 'block', padding: '0.5rem 0.95rem',
        marginRight: '10px', textDecoration: 'none'
    },
    buttons: {
        textAlign: 'center',
        backgroundColor: 'none',
        marginRight: '160px',
        padding: '0.5625rem 1.125rem',
        lineHeight: '1.8',
        fontWeight: 550,
        border: '0 solid transparent',
        borderRadius: '2.125rem',
    },
    verticalLine: {
        borderLeft: '0.2px solid #e9e8e8',
        height: '50px',
        marginLeft: '-30px',
    },
    navbarTogglerLine: {
        display: 'block',
        width: '30px',
        height: '4px',
        backgroundColor: '#101010',
        margin: '4px 0',
        borderRadius: '3px',
    },
    navbarTogglerLine1: {
        ...navbarTogglerLineProperties,
        transform: 'translate(-50%, -50%) rotate(45deg)',
        margin: '4px 0',
    },
    navbarTogglerLine2: {
        ...navbarTogglerLineProperties,
        transform: 'translate(-50%, -50%) rotate(-45deg)', margin: '4px 0',
    },
    collapse: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: "10px",
    },
    icon: {
        marginLeft: '160px',padding: '0 15px',   paddingTop: '3px',
    },
}

const ImageWithAnimation = styled.img`
  animation: ${slideInFromBottom} 0.3s ease-in-out;
`;

const UlWithAnimation = styled.ul`
  animation: ${slideInFromBottom} 0.3s ease-in;
`;

export default function Navbar() {
    const [isLine, setLine] = useState(true);
    const handleIconClick = () => {
        setLine((prevState) => !prevState);
    };

    return (
            <StickyNavbar className="navbar navbar-expand-lg bg-white" width='100%'>
                <div className="container-fluid"  >
                    <div className="slide-in-container d-flex me-5" style={styles.icon}>
                        <div className="d-inline-block slide-in-container"  >
                            <Link className="navbar-brand me-5" to="/" rel="home">
                                <ImageWithAnimation src="http://www.mentorsity.com/wp-content/uploads/2021/04/150-e1618507145769.png" alt="Mentorsity" style={styles.logoStyle} />
                            </Link>
                        </div>
                        {isLine && <span style={{ ...styles.verticalLine }} ></span>}
                    </div>
                    <button className="navbar-toggler" onClick={handleIconClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {isLine ? (
                            <>
                                <span style={styles.navbarTogglerLine} ></span>
                                <span style={styles.navbarTogglerLine} ></span>
                                <span style={styles.navbarTogglerLine} ></span>
                            </>
                        ) : (
                            <>
                                <span style={styles.navbarTogglerLine1}></span>
                                <span style={styles.navbarTogglerLine2}></span>
                            </>
                        )}
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={styles.collapse} >
                        <ul className="navbar-nav">
                            <li className="menu-item" style={{ whiteSpace: 'nowrap' }}>
                                <Link title="About-Us" to="/AboutUs" style={styles.weights}>
                                    <span className="pix-header-text" style={styles.textsm}>About-Us</span>
                                </Link>
                            </li>

                            <li className=" dropdown" style={{ whiteSpace: 'nowrap' }}>
                                <Link title="Attend" className="dropdown-toggle "
                                    data-toggle="dropdown" style={styles.weights}  >
                                    <span className="pix-header-text" style={styles.textsm}>Attend</span>
                                </Link>
                                <UlWithAnimation className="dropdown-menu" >
                                    <div className="submenu-box pix-default-menu bg-white ">
                                        <div className="container"  >
                                            <div className="menu-item dropdown">
                                                <Link title="MIND" className="dropdown-item" to="/" style={{ ...styles.weights }} >
                                                    <span style={styles.textsm}>MIND</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </UlWithAnimation>
                            </li>

                            <li className=" dropdown" style={{ whiteSpace: 'nowrap' }}>
                                <Link title="Our Product" className="dropdown-toggle"
                                    data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" style={styles.weights} >
                                    <span className="pix-header-text " style={styles.textsm}>Our Product</span>
                                </Link>
                                <UlWithAnimation className="dropdown-menu" aria-labelledby="menu-item-dropdown-19004" role="menu">
                                    <div className="submenu-box pix-default-menu bg-white">
                                        <div className="container">
                                            <div className="menu-item  dropdown">
                                                <Link title="HiKi" className="dropdown-item" to="/" style={styles.weights}>
                                                    <span style={styles.textsm} >HiKi</span>
                                                </Link>
                                            </div>
                                            <div className="menu-item dropdown ">
                                                <Link title="KYC" className="  dropdown-item" to="/" style={styles.weights} >
                                                    <span style={styles.textsm}>KYC</span>
                                                </Link>
                                            </div>
                                            <div className="menu-item  dropdown ">
                                                <Link title="Prepattern" className="  dropdown-item" to="/" style={styles.weights} >
                                                    <span style={styles.textsm}>Prepattern</span>
                                                </Link>
                                            </div>
                                            <div className="menu-item  dropdown ">
                                                <Link title="PuPa" className="  dropdown-item" to="/" style={styles.weights} >
                                                    <span style={styles.textsm} >PuPa</span>
                                                </Link>
                                            </div>
                                            <div className="menu-item  dropdown ">
                                                <Link title="Mentoring" className=" dropdown-item" to="/" style={styles.weights} >
                                                    <span style={styles.textsm} >Mentoring</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </UlWithAnimation>
                            </li>
                            <li className="menu-item   dropdown " style={{ whiteSpace: 'nowrap' }}>
                                <Link title="College" to="/collage" style={styles.weights} >
                                    <span className="pix-header-text" style={styles.textsm} >College</span>
                                </Link>
                            </li>
                            <li className="menu-item   dropdown " style={{ whiteSpace: 'nowrap' }}>
                                <Link title="Corporate" to="/" style={styles.weights} >
                                    <span className="pix-header-text" style={styles.textsm} >Corporate</span>
                                </Link>
                            </li>
                            <li className="menu-item   dropdown " style={{ whiteSpace: 'nowrap' }}>
                                <Link title="Browse Mentor" to="/" style={styles.weights} >
                                    <span className="pix-header-text" style={styles.textsm} >Browse Mentor</span>
                                </Link>
                            </li>
                            <li className="menu-item   dropdown " style={{ whiteSpace: 'nowrap' }} >
                                <Link title="Community" to="/Community" style={styles.weights} >
                                    <span className="pix-header-text" style={styles.textsm} >Community</span>
                                </Link>
                            </li>
                        </ul>
                    <div >
                        <Link className="btn btn-orange btn-sm " to="/" style={styles.buttons} >
                            <span>Login</span>
                        </Link>
                    </div>
                    </div>
                </div>
            </StickyNavbar>
    )
}