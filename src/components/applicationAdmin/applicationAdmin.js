import React, { useEffect } from 'react'
import styles from './applicationAdmin.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { gettingListOfApplications } from '../../redux/applications-reducer';
import { SimpleSlider } from '../Information/Slider/Slider';
import BigImageSliderContainer from '../Information/CommonWindow/BigImageSlider/EachNumberInfoContainer.js';
import Krutilka from './../../images/preloader.gif'

const ApplicationAdmin = React.memo((props) => {
    const preloader = useSelector(store => store.applications.buttonDisable)
    const dispatch = useDispatch()
    const listOfApplications = useSelector(store => store.applications.listOfApplications)

const applicationsArray = listOfApplications.map(i => <div key ={i._id} style = {{display: 'flex'}}>
  <div style = {{display: 'flex', flexDirection: 'column', border: '1px solid', width: '300px', margin: '10px'}}>
  <div style ={{display: 'flex', justifyContent: 'start', paddingLeft: '5px', textAlign: 'left', backgroundColor: 'grey'}}><b>Имя заявки:{` `} {i.name}</b></div>
  <div style ={{display: 'flex', justifyContent: 'start', paddingLeft: '5px', textAlign: 'left'}}><b>Описание: </b> {i.description}</div>
  <div style ={{display: 'flex', justifyContent: 'start', marginLeft: '5px', textAlign: 'left'}}><b>Дата подачи: </b> {i.date}</div>
  
                <div ><SimpleSlider photos={{photo1:i.photo1, photo2: i.photo2, 
                  photo3:i.photo3}} /></div>
                <BigImageSliderContainer item = {{photos: {photo1:i.photo1, photo2: i.photo2, 
                  photo3:i.photo3}}}/>
                  </div>
</div>)
    useEffect(() => {
      dispatch(gettingListOfApplications())
    },[])
    
    return <div style ={{display: 'flex', flexDirection: 'column', width: '90vw'}}>
      <div><h1>Запросы на добавление в каталог</h1></div>
      {preloader ? <img src={Krutilka} style ={{width: '200px', marginLeft: 'auto', marginRight: 'auto', padding: '20px'}} />:
      <div style= {{display: 'flex',  flexWrap: 'wrap', justifyContent: 'space-around'}}>{applicationsArray}</div>}
      
    </div>
  });

export default ApplicationAdmin