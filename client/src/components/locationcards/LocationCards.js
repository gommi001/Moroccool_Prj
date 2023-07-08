import React from 'react'
import SwipeableViews from 'react-swipeable-views';

const LocationCards = (img1,img2,img3,img4,img5) => {
  return (
    <SwipeableViews enableMouseEvents>
        <div style={Object.assign({}, styles.slide)}> <img alt='' src={img1}/> </div>
        <div style={Object.assign({}, styles.slide)}> <img alt='' src={img2}/> </div>
        <div style={Object.assign({}, styles.slide)}> <img alt='' src={img3}/> </div>
        <div style={Object.assign({}, styles.slide)}> <img alt='' src={img4}/> </div>
        <div style={Object.assign({}, styles.slide)}> <img alt='' src={img5}/> </div>
    </SwipeableViews>
  )
}

const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: '#fff',
    },
    
}

export default LocationCards