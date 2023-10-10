import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    but: {
        backgroundColor: '#F7bc59', fontSize: '15px', padding: "10px 20px",
        textDecoration: 'none', color: 'white', borderRadius: '8px 8px 8px 8px', boxShadow: 'none',
        marginRight: "50px",
    },
    cardStyles :{
        width: '350px',  // Set your desired width
        height: '650px', // Set your desired height
    }
}

const CardComponent = ({ price, svg, imageUrl, title, description, members, link }) => {
    return (
        <div className="col-md-4 my-2">
            <div className="card" style={styles.cardStyles} >
                <p>Price: {price} <span>Free</span> </p>
                <img className="card-img-top" src={imageUrl} alt={title}  />
                <div className="card-body" style={{ alignItems: 'center', textAlign: 'center' }}>
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'right' }} >
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 60  }} >
                            <p style={{ marginRight: 25, fontWeight: 'bold', fontSize: "21px", marginBottom: '0px' }} >{members}</p>
                            <p style={{ fontSize: '16px',  }} >Members:</p>
                        </div>
                        <Link to={link} role="button" style={styles.but}>Join Now</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardComponent;
