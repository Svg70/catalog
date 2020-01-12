import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import './yearInfo.css';
import SimpleExample, { MyCarousel, SimpleSlider } from '../Slider/Slider';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalYearCountThunk, getTotalYearCount } from '../../../redux/statistics-reducer';

const YearInfo = ({
  isOpen, onCancel, onSubmit, info, thisYear
}) => {
 const totalYearCount = useSelector(store => store.statistics.totalYearCount)
 const dispatch = useDispatch()

 const getData = () => {
  dispatch(getTotalYearCountThunk(thisYear))
 }
 const onClose = () => {
  dispatch(getTotalYearCount(null))
  onCancel()
 }
 useEffect(()=>{
  
}, [totalYearCount])
// let nominalsArr = []
// info.map(item => { 
//   for(let i = 0; i < item.row.length; i++){
//     nominalsArr = nominalsArr.concat(item.row[i].nominals)
  
// }})
// let determineCellsArray = []
// for(let i = 0; i < nominalsArr.length; i++){
//   determineCellsArray = determineCellsArray.concat(nominalsArr[i].state)}

// let totalYearItemsCount = 0
// for(let i =0; i < determineCellsArray.length; i++){
// if(determineCellsArray[i].year === thisYear){
//       totalYearItemsCount = totalYearItemsCount+determineCellsArray[i].numbers.length
// } }



  return (
    <>
      {isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">Статистика по {thisYear} году</div>
                <Icon name="times" onClick={onCancel} />
              </div>
              <div className="modalBody">
                    <div>В {thisYear} зафиксировано {totalYearCount} коллекционных позиций</div>

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

YearInfo.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

YearInfo.defaultProps = {
  title: 'Modal title',

  isOpen: true,
  onCancel: () => { },
  onSubmit: () => { },
  children: null,
};

export default YearInfo;
