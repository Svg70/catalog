import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import './nominalInfo.css';


const NominalInfo = ({
  isOpen, onCancel, onSubmit, thisNominal, thisYear, info
}) => {

  let nominalsArr = []
  info.map(item => { 
    for(let i = 0; i < item.row.length; i++){
      nominalsArr = nominalsArr.concat(item.row[i].nominals)
    
  }})
  let determineCellsArray = []
  for(let i = 0; i < nominalsArr.length; i++){
    determineCellsArray = determineCellsArray.concat(nominalsArr[i].state)}
  console.log(determineCellsArray)
  let totalYearNominalItemsCount = 0
  for(let i =0; i < determineCellsArray.length; i++){
  if(determineCellsArray[i].year === thisYear && determineCellsArray[i].nominal === thisNominal){
    totalYearNominalItemsCount = totalYearNominalItemsCount+determineCellsArray[i].numbers.length
  } }
  console.log(totalYearNominalItemsCount)
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
      <div>Известно {totalYearNominalItemsCount} коллекционных позиций</div>

              </div>
              <div className="modalFooter">
                <Button onClick={onCancel} invert>Закрыть</Button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};



export default NominalInfo;
