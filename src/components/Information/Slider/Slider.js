import React from 'react';
import Slider from 'infinite-react-carousel';
import styles from './Slider.module.css'
import NoPhoto from '../../../images/NoPhoto.png'

export const SimpleSlider = (props) => {
  let srcOne = props.photos.photo1?props.photos.photo1:NoPhoto
  let srcSecond = props.photos.photo2?props.photos.photo2:NoPhoto
  let srcThird = props.photos.photo3?props.photos.photo3:NoPhoto
  return <Slider props={props} dots>
    <div >
      <div className= {styles.imageInfo}>
      <img  className = {styles.center}  src ={srcOne}/>
      </div>
    </div>
    <div >
      <img className = {styles.center}   src ={srcSecond}/>
    </div>   
    {props.photos.photo3 &&
    <div >
      <img className = {styles.center}   src ={srcThird}/>
</div>   }
  </Slider>
};