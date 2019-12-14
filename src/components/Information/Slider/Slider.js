import React from 'react';
import Slider from 'infinite-react-carousel';
import styles from './Slider.module.css'
export const SimpleSlider = (props) => (
  <Slider props={props} dots>
    <div >
      <img  className = {styles.center}  src ={props.photos.photo1}/>
    </div>
    <div >
      <img className = {styles.center}   src ={props.photos.photo2}/>
    </div>
    
  </Slider>
);