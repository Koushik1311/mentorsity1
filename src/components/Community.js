import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import {FaTwitter} from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin} from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5';

const styles = {
  mainContainer: {
    backgroundColor: "#f8f9fa",
    width: "100%",
    paddingTop: 5,
    height: 40,
  },
  icons:{
    color: 'black',
    marginRight: 20,
    textDecoration: 'none'
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', // Align icons to the right
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Space between "India" and icons
    alignItems: 'center', // Center vertically
  },
  number:{
    color:'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: 20,
    alignItems: 'center',
  }
}

export default function Community() {

  return (
    <>
      <Navbar />
      <div
        style = {styles.mainContainer}
       >
        <div className="container">
          <div className="container" style={styles.contentContainer}>
            <div >
              <div>
                <IoLocationOutline />
                {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-location-dot" /> */}
                India
              </div>
            </div>
            <div style={styles.iconContainer}>
              <Link to="tel:+919582073315" style={styles.number} > +919582073315</Link>
              
              <div>
                <Link target="_self" to="https://www.facebook.com/Mentorsity" title="Facebook" style={styles.icons}> <FaFacebook size={18} /> </Link>
                <Link target="_self" to="https://twitter.com/mentorsity1" title="twitter" style={styles.icons} > <FaTwitter size={18} /></Link>
                <Link target="_self" to="https://www.youtube.com/c/Mentorsity" title="youtube" style={styles.icons}> <FaYoutube size={18} /> </Link>
                <Link target="_self" to="https://www.linkedin.com/company/mentotorsity" title="linkedin" style={styles.icons}> <FaLinkedin size={18} /> </Link>
                <Link target="_self" to="https://www.instagram.com/mentorsity/" title="instagram" style={styles.icons}><FaInstagram size={18} /> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
