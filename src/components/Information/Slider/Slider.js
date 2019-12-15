import React from 'react';
import Slider from 'infinite-react-carousel';
import styles from './Slider.module.css'
import NoPhoto from '../../../images/NoPhoto.png'

export const SimpleSlider = (props) => {
  let srcOne = props.photos.photo1?props.photos.photo1:NoPhoto
  let srcSecond = props.photos.photo2?props.photos.photo2:NoPhoto
  return<Slider props={props} dots>
    <div >
      <img  className = {styles.center}  src ={srcOne}/>
    </div>
    <div >
      <img className = {styles.center}   src ={srcSecond}/>
    </div>
    
  </Slider>
};