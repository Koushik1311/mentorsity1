import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gif from '../assets/red-cross.gif'

const styles = {
    but: {
        backgroundColor: '#F7bc59', fontSize: '15px', padding: "10px 20px",
        textDecoration: 'none', color: 'white', borderRadius: '8px 8px 8px 8px', boxShadow: 'none',
        marginRight: "50px",
    },
    cardStyles: {
        maxWidth: '350px', maxHeight: '650px', border: '0', boxShadow: 'none',
        margin: 0, marginRight: 0, borderRadius: 10, transition: 'box-shadow 0.3s',
    },
    cardStylesHover: {
        boxShadow: '-8px 0 8px rgba(0, 0, 0, 0.4), 0 8px 8px rgba(0, 0, 0, 0.4)',
    },
    cardTitle: {
        alignItems: 'center', textAlign: 'center'
    },
    cardFooter: {
        display: 'flex', justifyContent: 'center'
    },
    column: {
        display: 'flex', justifyContent: 'center', marginRight: 10, marginLeft: 10,
        cursor: 'pointer',
    },
    svgStyle: {
        position: 'absolute', left: -45, top: -8, color: 'black'
    }
}

const CardComponent = ({ price, svg, imageUrl, title, description, members, link }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="col-md-3 my-3" style={styles.column} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <div className="card" style={{ ...styles.cardStyles, ...(isHovered ? styles.cardStylesHover : {}) }} >
                <div className="card-body">
                    <div className='align-items-center'>
                        <h3 style={{ fontSize: '20px', marginLeft: '35px', position: 'relative', }} >
                            <span >
                                {price}
                                <img src={gif} alt="" height='35' width='110' style={styles.svgStyle} />
                            </span>
                            <span style={{ color: '#FF9900', }} >  Free</span>
                        </h3>
                        <img className="card-img-top" src={imageUrl} alt={title} />
                        <div style={styles.cardTitle} >
                            <h3 className="card-title">{title}</h3>
                            <p className="card-text">{description}</p>
                            <div className="d-flex align-items-center" style={styles.cardFooter} >
                                <div >
                                    <p style={{ marginRight: 25, fontWeight: 'bold', fontSize: "21px", marginBottom: '0px' }} >{members}</p>
                                    <p style={{ fontSize: '16px', }} >Members:</p>
                                </div>
                                <span style={{ width: 30 }} ></span>
                                <Link to={link} role="button" style={styles.but}>Join Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardComponent;
