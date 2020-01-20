import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import './yearInfo.css';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalYearCountThunk, getTotalYearCount } from '../../../redux/statistics-reducer';
import Button from '@material-ui/core/Button';
import Krutilka from './../../../images/preloader.gif'

const YearInfo = ({
  isOpen, onCancel, onSubmit, info, thisYear, thisUpravl
}) => {
  const totalYearCount = useSelector(store => store.statistics.totalYearCount)
  const preloader = useSelector(store => store.statistics.preloader)
  const dispatch = useDispatch()

  const getData = () => {
    dispatch(getTotalYearCountThunk(thisYear, thisUpravl))
  }
  const onClose = () => {
    dispatch(getTotalYearCount(null))
    onCancel()
  }
  useEffect(() => {

  }, [totalYearCount,preloader ])
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
                {/* {preloader?<img style ={{width: '50px'}} src={Krutilka} />:{totalYearCount}} */}
              </div>
              <div className="modalFooter">
                {/* <Button variant="contained" color="primary" onClick={getData}> Запросить данные</Button> */}
                <Button variant="contained" color="primary" onClick={getData} onClick={onClose} invert>Закрыть</Button>
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
