import React from "react"

class Cursor extends React.Component<{window: Window}, {mouseY: number, mouseX: number, width: string | number, height: string | number, opacity: number}> {
    constructor(props) {
        super(props);

        this.state = { 
            mouseY: this.props.window.screenY, 
            mouseX: this.props.window.screenY,
            width: "normal",
            height: "normal",
            opacity: 0.8
        };

        this.changeCursorPosition = this.changeCursorPosition.bind(this);
        this.props.window.onmousemove = this.changeCursorPosition;
    }

    changeCursorPosition(e) {
        setTimeout(() => {
            // if(e.target.tagName == "H1") {
            //     this.setState({  
            //         mouseY: e.target.offsetTop - 40, 
            //         mouseX: e.target.offsetLeft - 2,

            //         width: e.target.scrollWidth,
            //         height: e.target.scrollWidth,

            //         opacity: 0.35
            //     }); 
            // }else 
            if(e.target.tagName == "H5") {
                this.setState({  
                    mouseY: e.target.offsetTop - 9, 
                    mouseX: e.target.offsetLeft - 2,

                    width: e.target.scrollWidth,
                    height: e.target.scrollWidth,

                    opacity: 0.35
                }); 
            }else {
                this.setState({
                    mouseY: e.screenY - 120, 
                    mouseX: e.screenX - 20,
                    width: "normal",
                    height: "normal",
                    opacity: 1
                })
            }
        }, 100)
    }

    render() {
        return (
            <div style={
                { 
                    position: "absolute", 
                    transition: '.3s ease-out all',
                
                    left: `${this.state.mouseX}px`, 
                    top: `${this.state.mouseY}px`,

                    opacity: this.state.opacity,

                    width: (this.state.width == "normal") ? "40px" : this.state.width,
                    height: (this.state.height == "normal") ? "40px" : this.state.height
                }
            } className="circle">
            </div>
        )
    }
}

export default Cursor