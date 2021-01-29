import Head from 'next/head'
import { useState } from "react"
import styles from '../styles/Home.module.css'

import Cursor from "../public/components/cursor"

let handleScroll = (e) => {
  console.log(document.getElementById("__next").scrollTop, document.getElementsByClassName(styles.caseHead)[0].scrollHeight)
  
  if(e.target.scrollTop >= document.getElementsByClassName(styles.caseHead)[0].scrollHeight) {
    document.getElementsByClassName(styles.caseHead)[0].classList.add(styles.fixedHeader);
  }
}

export default function Home() {
  let [ scrollBarPercentage, setScrollBarPercentage ] = useState(0);
  let [ activePosition, setActivePosition ] = useState(1);

  if(process.browser) window.document.body.addEventListener('scroll', handleScroll);

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

      <main >
        <div className={styles.caseStudy}>
            <div className={styles.caseHead}>
              <div>{"<"}</div>
              <h1>Learn to Code</h1>
              <h2>2021 - TYPESCRIPT + NEXTJS</h2>
            </div>
            
            <div className={styles.caseContent}>
              <h3>The Brief</h3>
              <p>
                Learn to Code, is an education initiative to teach people how to code, from scratch - from little to no experience, to proficent in a variety of languages and skills, such as problem solving, optimisation, and more.

                <br/>
                <br/>

                I decided to create this online tool for my school as I was engaging in teaching fellow students and decided I needed a tool to set tasks and prepare lessons, this, later venturing out into what the program has become today - a free tool to learn the basic and intermediate states of programming, providing a indepth understanding of code execution, integration and more.
              </p>

              <br/>
              <h3>My Audiance</h3>

              <p>
                As I was introducing this program to a school of children, most around the ages of 15, 16 and 17 - I needed to both make the tool easily accessable, easy to use and most of all - fun, interesting and engaging; This meant, ensuring homework and other task setting activities felt more like an achievement, and less like a chore.

                <br/>
                <br/>

                Henseforth, I started by creating the authentication page, in which I attempted to set the colour theme for the design. This was a combination of a dark theme, with vibrant colours, indicating fun but also professionalism.
              </p>

              <br/>
              <h3>I NEED FILLER CONTENT</h3>

              <p>
                As I was introducing this program to a school of children, most around the ages of 15, 16 and 17 - I needed to both make the tool easily accessable, easy to use and most of all - fun, interesting and engaging; This meant, ensuring homework and other task setting activities felt more like an achievement, and less like a chore.

                <br/>
                <br/>

                Henseforth, I started by creating the authentication page, in which I attempted to set the colour theme for the design. This was a combination of a dark theme, with vibrant colours, indicating fun but also professionalism.
              </p>

              <br/>
              <h3>My Audiance</h3>

              <p>
                As I was introducing this program to a school of children, most around the ages of 15, 16 and 17 - I needed to both make the tool easily accessable, easy to use and most of all - fun, interesting and engaging; This meant, ensuring homework and other task setting activities felt more like an achievement, and less like a chore.

                <br/>
                <br/>

                Henseforth, I started by creating the authentication page, in which I attempted to set the colour theme for the design. This was a combination of a dark theme, with vibrant colours, indicating fun but also professionalism.
              </p>
              
              <img src="" alt=""/>
              <img src="./public/content/learn-to-code/authentication.PNG" alt=""/>
            </div>
            
        </div>
      </main>
    </div>
  )
}
