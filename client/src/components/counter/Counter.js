import React,{Fragment,useState} from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import "./Counter.css"

const Counter = ({ className, ...rest }) => {

    const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <Fragment>
{/* 

className = { transitionNavbar ? "navbar active":"navbar"}

const [transitionNavbar, setTransitionNavbar] = useState(false)

   const changeBackground = ()=>{
   if(window.scrollY >= 150){
    setTransitionNavbar(true)
   }else{
    setTransitionNavbar(false)
   }
  }
  window.addEventListener("scroll",changeBackground)
  

.navbar.active{
    position: fixed;
    width: 100%;
    top: -70px;
    left: 0;
    right: 0;
    z-index: 990;
    box-shadow: 0 3px 16px 0 rgb(0 0 0 / 10%);
    background-color: #2c2a2f;
    transform: translateY(70px);
    transition: transform 1s ease;
}
.navbar.active{
    display: none;
}

 */}
    <section className="counter">

    <div className="counter-container">
        <div className="counter-row">
{/* Column 1 */}
        <div className="counter-column">
            <strong>
            <CountUp {...rest} start ={viewPortEntered ? null : 0} end={305} >
            {({ countUpRef }) => {
                return(
                    <VisibilitySensor
                    active={!viewPortEntered}
                    onChange = {isVisible => { 
                        if(isVisible){
                            setViewPortEntered(true);
                        }
                    }}
                    delayedCall
                    >
                    <span className='counter-number' ref={countUpRef} />
                    </VisibilitySensor>
                )
            }}
            </CountUp>          
            </strong>
            <span>Area <br /> population</span>
        </div>

        {/* Column 2 */}
        <div className="counter-column">
            <strong>
            <CountUp {...rest} start ={viewPortEntered ? null : 0} end={1024} >
            {({ countUpRef }) => {
                return(
                    <VisibilitySensor
                    active={!viewPortEntered}
                    onChange = {isVisible => { 
                        if(isVisible){
                            setViewPortEntered(true);
                        }
                    }}
                    delayedCall
                    >
                    <span className='counter-number' ref={countUpRef} />
                    </VisibilitySensor>
                )
            }}
            </CountUp>          
            </strong>
            <span>  Total <br /> Properties </span>
        </div>

        {/* Column 3 */}
            <div className="counter-column">
            <strong>
            <CountUp {...rest} start ={viewPortEntered ? null : 0} end={206} >
            {({ countUpRef }) => {
                return(
                    <VisibilitySensor
                    active={!viewPortEntered}
                    onChange = {isVisible => { 
                        if(isVisible){
                            setViewPortEntered(true);
                        }
                    }}
                    delayedCall
                    >
                    <span className='counter-number' ref={countUpRef} />
                    </VisibilitySensor>
                )
            }}
            </CountUp>          
            </strong>
            <span> Average <br /> House </span>
        </div>

        {/* Column 4 */}
            <div className="counter-column">
            <strong>
            <CountUp {...rest} start ={viewPortEntered ? null : 0} end={27} >
            {({ countUpRef }) => {
                return(
                    <VisibilitySensor
                    active={!viewPortEntered}
                    onChange = {isVisible => { 
                        if(isVisible){
                            setViewPortEntered(true);
                        }
                    }}
                    delayedCall
                    >
                    <span className='counter-number' ref={countUpRef} />
                    </VisibilitySensor>
                )
            }}
            </CountUp>          
            </strong>
            <span> Total <br /> Branches </span>
        </div>

        </div>
    </div>
    </section>
    
    </Fragment>
  )
}

export default Counter