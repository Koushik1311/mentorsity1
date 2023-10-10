import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Community2 from './Community2'
import Community3 from './Community3'
import Community4 from './Community4'



const styles = {
  title: {
    fontSize: "36px", fontWeight: "700", textTransform: 'capitalize',
    fontStyle: 'normal', lineHeight: "48px", fontFamily: 'nunito, sans-serif',
    letterSpacing: '- 0.02rem',
  },
  h2Title: {
    margin: '0px 0', alignItem: 'left'
  },
  div3Title: {
    marginBottom: '50px', display: 'block', marginTop: 70,
  },
  mainContainer: {
    fontFamily: 'nunito, sans-serif', widht: "100%",
    border: '1px solid white', backgroundColor: "#f8f9f1"
  },
}

export default function Community() {

  return (
    <>
      <Navbar />
      <Community2 />
      <Community3 />

      <div style={styles.mainContainer} >
        <div style={styles.div3Title} >
          <h2 class="title" style={styles.h2Title} >
            <span style={{ ...styles.title, color: '#f7bc59', marginRight: 10 }} >Mentorsity</span>
            <span style={{ ...styles.title, color: '#003777' }}>Community</span>
          </h2>
        </div>
        <Community4 />
      </div>
    </>
  )
}
