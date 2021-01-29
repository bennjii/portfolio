import React from "react"
import styles from '../../styles/Home.module.css'
import Router from "next/router"

class VerticalCarousel extends React.Component<{window: Window, scrollBarChange: Function}, {scrollBarPercentage: number, activePosition: number}> {
    constructor(props) {
        super(props);

        this.state = { 
            scrollBarPercentage: 0, 
            activePosition: 1
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    redirectTo(location) {
        Router.push(location)
    }

    handleScroll(e) {
        let active = e.target.querySelector("#active");
        
        let newScrollBarPercentage = (e.target.scrollTop / (e.target.scrollHeight * 0.64)) * 100;
        
        console.log(e.target.scrollTop, e.target.scrollHeight)
        let sbr = Math.ceil((newScrollBarPercentage / 25))
        
        if(sbr == 5) sbr = 4;
        if(sbr == 0) sbr = 1;

        this.setState({ activePosition: sbr });
        
        // if(newScrollBarPercentage > this.state.scrollBarPercentage) {
        //     // DOWN
        //     this.setState({ activePosition: (sbr < 4) ? sbr + 1 : sbr });
        // }else {
        //     // UP
        //     this.setState({ activePosition: (sbr > 1) ? sbr - 1 : sbr });
        // }

        console.log(e.target.querySelectorAll("[sectional-data='alm']")[sbr - 1])
        //  document.getElementsByClassName(styles.active)[0].scrollIntoView();

        // e.target.scroll(0, (e.target.scrollHeight / 4) * sbr);
        
        e.target.querySelectorAll("[sectional-data='alm']").forEach((element, index) => {
            // console.log(element, sbr - 1, index);
        
            if(sbr - 1 == index) { 
                element.id == "active"
                console.log("CHANGED", sbr - 1)
            }
            else element.id == ""
        });
        
        this.setState({ scrollBarPercentage: newScrollBarPercentage });
        this.props.scrollBarChange(newScrollBarPercentage) 
    }

    render() {
        return (
            <div className={styles.rotatingCycle} onScroll={this.handleScroll}>
                <div sectional-data="alm" onClick={() => this.redirectTo("/learn-to-code")}  className={this.state.activePosition == 1 ? styles.active : ''}>
                    <h2>LEARN TO CODE</h2>
                    <p>A website in which you can learn how to code, from scratch, with interactve, fun and encouraging examples to excel growth</p>
                    <h6>TYPESCRIPT + NEXTJS</h6>
                    

                    <img src="" alt=""/>

                    <div className={styles.hNo} style={{transform: "translate3d(0px, 0%, 0px)" }}>
                    <div className={styles.bar}></div>
                    <div className={styles.hNoOver}></div>
                    </div>
                </div> 

                <div sectional-data="alm" onClick={() => this.redirectTo("/robotoc")} className={this.state.activePosition == 2 ? styles.active : ''}>
                    <h2>ROBOTOC</h2>
                    <p>An Arduino Library for controlling robots using a simplified yet vast PID system.</p>
                    <h6>CPP + ARDUINO</h6>
                    
                    <img src="" alt=""/>

                    <div className={styles.hNo} style={{transform: "translate3d(0px, 0%, 0px)" }}>
                    <div className={styles.bar}></div>
                    <div className={styles.hNoOver}></div>
                    </div>
                </div>

                <div sectional-data="alm" onClick={() => this.redirectTo("/unusual-classes")} className={this.state.activePosition == 3 ? styles.active : ''}>
                    <h2>Unusual Classes</h2>
                    <p>DND Online Remasted ~ Custom Format</p>
                    <h6>REACT + JSX</h6>
                    

                    <img src="" alt=""/>

                    <div className={styles.hNo} style={{transform: "translate3d(0px, 0%, 0px)" }}>
                    <div className={styles.bar}></div>
                    <div className={styles.hNoOver}></div>
                    </div>
                </div>

                <div sectional-data="alm" onClick={() => this.redirectTo("/machine-learning")} className={this.state.activePosition == 4 ? styles.active : ''}>
                    <h2>Auckland House Crisis</h2>
                    <p>A online tool to estimate house prices for first home buyers in Auckland</p>
                    <h6>TENSORFLOW + &nbsp;PYTHON &nbsp; &amp; &nbsp; NODEJS</h6>
                    

                    <img src="" alt=""/>

                    <div className={styles.hNo} style={{transform: "translate3d(0px, 0%, 0px)" }}>
                    <div className={styles.bar}></div>
                    <div className={styles.hNoOver}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VerticalCarousel