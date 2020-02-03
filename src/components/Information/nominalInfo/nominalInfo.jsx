import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import './nominalInfo.css';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalYearNominalCountThunk, getTotalYearNominalCount } from '../../../redux/statistics-reducer';


const NominalInfo = ({
  isOpen, onCancel, onSubmit, thisNominal, thisYear, info, thisUpravl
}) => {
  const totalYearNominalCount = useSelector(store => store.statistics.totalYearNominalCount)
  const dispatch = useDispatch()
 
  const getData = () => {
   dispatch(getTotalYearNominalCountThunk(thisYear, thisNominal, thisUpravl))
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
            <div className="modalWindowWW">
              <div className="modalHeader">
      <div className="modalTitle">Статистика по {thisNominal} руб. {thisYear} годa</div>
                <Icon name="times" onClick={onCancel} />
              </div>
              <div className="modalBody">
      <div>Зафиксировано {totalYearNominalCount} коллекционных позиций</div>

              </div>
              <div className="modalFooter">
              {/* <Button variant="contained" color="primary" onClick={getData} onClick = {getData}> Запросить данные</Button> */}
                <Button variant="contained" color="primary" onClick={getData} onClick={onClose} invert>Закрыть</Button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};



export default NominalInfo;
