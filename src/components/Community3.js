import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
    secondContainer: {
        fontFamily: 'nunito, sans-serif', widht: "100%", alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', padding: '0% 20% 0% 20%',
        border: '1px solid white', marginBottom: 110
    },
    explore: {
        backgroundColor: '#F7bc59', color: 'white', padding: '15px 30px',
        borderRadius: "10px 10px 10px 10px", textDecoration: 'none', boxShadow: 'none',
        width: 'auto', boxSizing: 'border-box', 
    },
    title: {
        fontSize: "40px", fontWeight: "500", textTransform: 'capitalize',
        fontStyle: 'normal', lineHeight: "49px", fontFamily: 'nunito, sans-serif',
        letterSpacing: '- 0.02rem',
    },
    desc: {
        fontWeight: "400", fontSize: 18, fontFamily: 'nunito, sans-serif',
        lineHeight: "30px",
    },
}

export default function Community3() {
  return (
      <div style={styles.secondContainer} >
          <div style={{ marginTop: 50 }} >
              <div data-element_type="widget" >
                  <div >
                      <div style={{ marginBottom: 16 }} >
                          <h2 class="title" style={{ flexWrap: 'wrap' }}  >
                              <span style={{ ...styles.title, color: '#f7bc59'}}  >Mentorsity  </span>

                              <span style={{ ...styles.title, color: '#003777' }}>Community</span>
                          </h2>
                      </div>
                  </div>
              </div>
              <div style={{ marginBottom: 30 }} >
                  <div >
                      <div >
                          <p>
                              <span style={styles.desc}>Looking for like-minded people? </span>
                              <span style={styles.desc}>Gain skills, make connections and broaden your
                                  knowledge. Be a well-rounded individual.
                                  <strong>JOIN OUR STUDENT COMMUNITY NOW!!
                                  </strong>
                              </span>
                          </p>
                      </div>
                  </div>
              </div>
              <div data-element_type="widget" >
                  <div >
                      <div >
                          <Link to="#Explore" style={styles.explore} role="button">
                              <span >
                                  <span >Explore Community</span>
                              </span>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  )
}
