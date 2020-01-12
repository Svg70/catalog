import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import './nominalInfo.css';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalYearNominalCountThunk, getTotalYearNominalCount } from '../../../redux/statistics-reducer';


const NominalInfo = ({
  isOpen, onCancel, onSubmit, thisNominal, thisYear, info
}) => {
  const totalYearNominalCount = useSelector(store => store.statistics.totalYearNominalCount)
  const dispatch = useDispatch()
 
  const getData = () => {
   dispatch(getTotalYearNominalCountThunk(thisYear, thisNominal))
  }
  const onClose = () => {
   dispatch(getTotalYearNominalCount(null))
   onCancel()
  }
  useEffect(()=>{
   
 }, [totalYearNominalCount])
  // let nominalsArr = []
  // info.map(item => { 
  //   for(let i = 0; i < item.row.length; i++){
  //     nominalsArr = nominalsArr.concat(item.row[i].nominals)
    
  // }})
  // let determineCellsArray = []
  // for(let i = 0; i < nominalsArr.length; i++){
  //   determineCellsArray = determineCellsArray.concat(nominalsArr[i].state)}
  
  // let totalYearNominalItemsCount = 0
  // for(let i =0; i < determineCellsArray.length; i++){
  // if(determineCellsArray[i].year === thisYear && determineCellsArray[i].nominal === thisNominal){
  //   totalYearNominalItemsCount = totalYearNominalItemsCount+determineCellsArray[i].numbers.length
  // } }
  
  return (
    <>
      {isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
      <div className="modalTitle">Статистика по {thisNominal} рубль {thisYear} годa</div>
                <Icon name="times" onClick={onCancel} />
              </div>
              <div className="modalBody">
      <div>Известно {totalYearNominalCount} коллекционных позиций</div>

              </div>
              <div className="modalFooter">
              <Button onClick = {getData}> Запросить данные</Button>
                <Button onClick={onClose} invert>Закрыть</Button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};



export default NominalInfo;
