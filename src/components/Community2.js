import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5';

const styles = {
    mainContainer: {
        backgroundColor: "#f8f9fa", width: "100%", paddingTop: 8,
        paddingBottom: 8,
    },
    icons: {
        color: 'black', marginRight: 10, textDecoration: 'none'
    },
    iconContainer: {
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
        marginRight: 90
    },
    contentContainer: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    },
    number: {
        color: '#2d2d2d', textDecoration: 'none', fontWeight: 'bold',
        marginRight: 15, alignItems: 'center', fontSize: '14px'
    },
    verticalLine: {
        borderLeft: '0.2px solid #e9e8e8', height: 22, marginLeft: 13
    },
    verticalLine2: {
        borderLeft: '0.2px solid #e9e8e8', height: 22, marginRight: 18
    },
}

export default function Community2() {
  return (
      <div
          style={styles.mainContainer}
      >
          <div >
              <div style={styles.contentContainer}>
                  <div style={{ display: 'flex' }} >
                      <IoLocationOutline size={20} style={{ marginLeft: 85 }} />
                      <div style={{ fontSize: 13, fontWeight: 'bold', marginTop: 1 }} >
                          India
                      </div>
                      <span style={styles.verticalLine} ></span>
                  </div>
                  <div style={styles.iconContainer}>
                      <FaPhoneAlt size={19} style={{ marginRight: 3 }} />
                      <Link to="tel:+919582073315" style={styles.number} > +919582073315</Link>
                      <span style={styles.verticalLine2} ></span>
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
  )
}

