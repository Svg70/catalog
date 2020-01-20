import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Portal from '../portal/Portal';
import Button from '@material-ui/core/Button';
import styles from './NumberInfo.module.css';
import exit from './../../../images/exit.png';
import { numberEditRequest, numberDeleteRequest } from './../../../redux/admin-catalog-reducer'
import EachNumberInfoContainer from './EachNumberInfo/EachNumberInfoContainer.js';
import { useDispatch, useSelector } from 'react-redux';
import SingleImageLoader from '../singleImageLoader';
import Krutilka from './../../../images/preloader.gif'
// import EachNumberInfoContainer from './EachNumberInfo/EachNumberInfoContainer';

const NumberInfo = ({
  isOpen, onCancel, description
}) => {
  const [itemNumber, setItemNumber] = useState('')
  const [itemNumberInfo, setItemNumberInfo] = useState('')
  const dispatch = useDispatch()
  const adminIsAuth = useSelector(store => store.loginPage.adminIsAuth)
  const buttonDisable = useSelector(store => store.AdminCatalog.buttonDisable)

  const onItemNumberChange = (e) => {
    setItemNumber(e.currentTarget.value)
  }
  const onItemNumberInfoChange = (e) => {
    setItemNumberInfo(e.currentTarget.value)
  }


  const numberEdit = () => {
    dispatch(numberEditRequest(description.id, description.year, description.nominal, description.number,description.upravl, itemNumber, itemNumberInfo, image1, image2))
  }

  const numberDelete = (itemNumber) => {
    dispatch(numberDeleteRequest(description.id, description.year, description.nominal, description.number,description.upravl, itemNumber))
  }
  // Загрузка изображений start
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')

  const imageReturnFunc1 = (imageLink) =>{

    setImage1(imageLink)
  }
  const imageReturnFunc2 = (imageLink) =>{
    setImage2(imageLink)
  }
  const numbersArray = description.numbers.map((item, i) => <div style={{ display: 'flex', cursor: 'pointer' }}>
    <EachNumberInfoContainer item={item} key={i} numberDelete = {numberDelete} /> | </div>)
  return (
    <>
      {isOpen &&
        <Portal>
          <div className={styles.modalOverlay}>
            <div className={styles.modalWindow}>
              <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>Известные номера типа {description.nominal} {description.nominal === 1 && 'рубль'}{description.nominal === 3 && 'рубля'}{description.nominal === 5 && 'рублей'}
                  {description.nominal === 10 && 'рублей'}{description.nominal === 25 && 'рублей'}{description.nominal === 50 && 'рублей'}{description.nominal === 100 && 'рублей'} {description.year} года {description.upravl}-{description.director}-{description.kassir}</div>
                <div onClick={onCancel}><img src={exit} /></div>
              </div>
              <div className={styles.modalBody}>
              <div style={{ display: 'flex', cursor: 'pointer', flexWrap: 'wrap', width: '100%' }}>{numbersArray}</div>
              {adminIsAuth &&
                <>
                  <div>
                    Добавить номер в каталог
                  Номер: <textarea required = {true} style={{ width: '90%' }} autoFocus={true} onChange={onItemNumberChange}
                      value={itemNumber} />
                    Описание: <textarea style={{ width: '90%' }} autoFocus={true} onChange={onItemNumberInfoChange}
                      value={itemNumberInfo} />
                    <SingleImageLoader imageReturnFunc = {imageReturnFunc1} numberName ={1}/>
                    <SingleImageLoader imageReturnFunc = {imageReturnFunc2} numberName ={2}/>
                    {buttonDisable && <div><img src={Krutilka} /></div>}
                    <Button variant="contained" color="primary" onClick={numberEdit}>Внести изменения</Button>
                  </div>
                  
                </>}
                </div>
              <div className={styles.modalFooter}>
                <Button variant="contained" color="primary" onClick={onCancel} invert>Закрыть</Button>

              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

NumberInfo.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

NumberInfo.defaultProps = {
  title: 'Modal title',
  isOpen: true,
  onCancel: () => { },
  onSubmit: () => { },
  children: null,
};

export default NumberInfo;
