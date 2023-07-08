import React from 'react'
import { Component } from "react";
import './description.scss'

class DescriptionData extends Component {
    render() {
      return (
          <div className={this.props.cName}>
             <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
             </div>
                  <div className="image1">
                      <img alt="img" src={this.props.img1} />
                      <img alt="img" src={this.props.img2}/>
                  </div>
         </div>
      );
    }
  }

export default DescriptionData