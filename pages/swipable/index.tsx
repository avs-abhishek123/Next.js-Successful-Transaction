// It is imported for theme mode
import React, { useState, useEffect } from 'react';

// for creating the card, we impoert this module.css(It can be accessed from anywhere 
// unlike global.css that can be accessed once it is imported in _app.tsx)
import styles from '/styles/card.module.css'

// as the image stored locally in images folder, so we use Image from next/image
import tick from '/public/images/tick.jpeg'
import Image from 'next/image'

// using this to make go to home button clickable and direct to home page
import Link from 'next/link'

function Success_card() {
  // for theme mode
  const [theme, setTheme] = useState('dark'); // by default it is in dark mode
  const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      }
      else {
        setTheme('light');
      }
    };
  useEffect(() => {
    document.body.className = theme;
    }, [theme]);

  return (
  <div>
      <br/>
      <div>

        <div className={styles.card_black}>
          <h2 className = {styles.success}>Successfully Transferred</h2>
          <hr />
          <center>
            <br/>
            <Image src= {tick} alt="Tick"/>
              <h2 className={styles.enjoy}>Enjoy your crypto</h2>
              <h3 className={styles.enjoy2}>
                Your amount is transferred in crypto wallet.<br /> Start purchasing or playing now
              </h3>
              <button className={styles.button}>
                <Link href="/">
                  <b>Go to Home</b>
                </Link>
              </button>
          </center>
        </div>
        <br/>

        <div>
          Powered by <p className={styles.company_name}>Alt Business AS</p>
        </div>

        {/* For the toggle button */}
        <div>
          Mode:<br/>
          <label className='switch'>
            <input type="checkbox" />
              <span className="slider round" onClick={toggleTheme}></span>
          </label>
        </div>

      </div>

  </div>
  )
}

export default Success_card
