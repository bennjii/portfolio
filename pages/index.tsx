import Head from 'next/head'
import { useState } from "react"
import styles from '../styles/Home.module.css'

import Cursor from "../public/components/cursor"
import VerticalCarousel from "../public/components/vertical_carousel"


function handleScroll(e, scrollBarPercentage, activePosition, setActivePosition) {
  let active = e.target.querySelector("#active");

  let newScrollBarPercentage = (e.target.scrollTop / e.target.scrollHeight) * 2 * 100;

  let sbr = Math.round(scrollBarPercentage / 25)

  if(sbr == 5) sbr = 4;
  if(sbr == 0) sbr = 1;

  setActivePosition(sbr);

  // if(newScrollBarPercentage > scrollBarPercentage) {
  //   // DOWN
    
  // }else {
  //   // UP
  //   setActivePosition(sbr);
  // }

  e.target.querySelectorAll("[sectional-data='alm']").forEach((element, index) => {
    // console.log(element, sbr - 1, index);

    if(sbr - 1 == index) {  
      element.id == "active"
      console.log("CHANGED", sbr - 1)
    }
    else element.id == ""
  });

  return newScrollBarPercentage;
}

export default function Home() {
  let [ scrollBarPercentage, setScrollBarPercentage ] = useState(0);
  let [ activePosition, setActivePosition ] = useState(1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ben White</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        (process.browser) ?
        <div className={styles.cursorDiv}>
          <Cursor window={window}/> 
        </div>
       
        :
        <></>
      } 

      <main className={styles.main}>
        <div className={styles.splitAq}>
          <h1>Ben white</h1>

          <div className={styles.aboutDiv}>
            <h4>SOFTWARE ENGINEER</h4>
            <h3>AUCKLAND, NEW ZEALAND</h3>
          </div> 
        </div>
        
        {
          (process.browser) ?
          <VerticalCarousel window={window} scrollBarChange={setScrollBarPercentage} /> 
          :
          <div></div>
        }

        <div className={styles.splitAq}>
          <h5 className={styles.link}>Work</h5>

          <div className={styles.scrollBarCasing}>
            <div className={styles.scrollBar} style={{ height: `${scrollBarPercentage}%` }}></div>
          </div>

          <h5 className={styles.link}>About</h5>
        </div>
      </main>
    </div>
  )
}
