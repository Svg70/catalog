import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import change from './../../../images/change.png'
import Portal from '../portal/Portal';
import Button from '../button/Button';
import styles from './Modal.module.css';
import { SimpleSlider } from '../Slider/Slider';
import { NavLink } from 'react-router-dom';
import exit from './../../../images/exit.png'
import photoIcon from './../../../images/photo.png'
import NumberInfoSandbox from '../NumberInfo/NumberInfoSandbox';
import { useSelector, useDispatch } from 'react-redux';
import { changeDescriptionCells } from '../../../redux/admin-catalog-reducer';
import ImageLoader from '../../imageLoader';
import AddingFormSandbox from '../AddingForm/AddingFormSandbox';


import BigImageSliderContainer from './BigImageSlider/EachNumberInfoContainer.js';

const Modal = ({
  isOpen, onCancel, description
}) => {

  const userIsAuth = useSelector(store => store.loginPage.userIsAuth)
  const adminIsAuth = useSelector(store => store.loginPage.adminIsAuth)
  const userName = useSelector(store => store.loginPage.userName)
  const approved = useSelector(store => store.loginPage.approved)
  const dispatch = useDispatch()

  let [editMode, setEditMode] = useState(false)

  useEffect(() => {
    // setNewStatus(description.status)
    setNewCommon(description.common)
    setNewVarieties(description.varieties)
    setNewAstimation(description.astimation)
    setNewAddInfo(description.kassirInfo)
    setNewSourses(description.sourses)
  }, [description.common, description.varieties, description.astimation, description.kassirInfo, description.sourses])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
  }

  const deactivateEditModeRequest = () => {
    debugger
    setEditMode(false)
    dispatch(changeDescriptionCells(description.id, description.year, description.nominal, description.number, common,varieties,astimation,kassirInfo,sourses, status))
  }

  let [status, setNewStatus] = useState(false)
  const onStatusChange = (e) => {
    setNewStatus(e.currentTarget.checked)
  }

  let [common, setNewCommon] = useState(description.common)
  const onCommonChange = (e) => {
    setNewCommon(e.currentTarget.value)
  }

  let [varieties, setNewVarieties] = useState(description.varieties)
  const onVarietiesChange = (e) => {
    setNewVarieties(e.currentTarget.value)
  }

  let [astimation, setNewAstimation] = useState(description.astimation)
  const onAstimationChange = (e) => {
    setNewAstimation(e.currentTarget.value)
  }

  let [kassirInfo, setNewAddInfo] = useState(description.kassirInfo)
  const onAddInfoChange = (e) => {
    setNewAddInfo(e.currentTarget.value)
  }


  let [sourses, setNewSourses] = useState(description.sourses)
  const onSoursesChange = (e) => {
    setNewSourses(e.currentTarget.value)
  }



  return (
    <>
      {isOpen &&
        <Portal>
          <div className={styles.modalOverlay}>
            <div className={styles.modalWindow}>
              <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>{description.nominal} {description.nominal === 1 && 'рубль'}{description.nominal === 3 && 'рубля'}{description.nominal === 5 && 'рублей'}
                  {description.nominal === 10 && 'рублей'}{description.nominal === 25 && 'рублей'}{description.nominal === 50 && 'рублей'}{description.nominal === 100 && 'рублей'} {description.year} года {description.upravl}-{description.director}-{description.kassir}</div>
                <div onClick={onCancel}><img src={exit} /></div>
              </div>
              <div className={styles.modalBody}>
                <SimpleSlider photos={description.photos} />
                <BigImageSliderContainer item = {description}/>
                  {!editMode &&
                  <div >
                    <div><b>Описание:{' '}</b>{description.common}</div>
                     <div><b>Разновидности:{' '}</b>{description.varieties}</div>
                     <div style = {{cursor: 'pointer', textDecoration: 'underline'}}><b><NumberInfoSandbox  description={description} name={"Известные номера"} /></b></div>
                     <div><b>Ориентировочная стоимость:{' '}</b>{description.astimation}</div>
                <div><b>Дополнительная информация:{' '}</b>{description.kassirInfo}</div>
                <div><b>Источники/ссылки:{' '}</b>{description.sourses}</div>
                {approved && userIsAuth && !adminIsAuth && <AddingFormSandbox description={description} sign ={<Button>Добавить в каталог</Button>} />}
                {adminIsAuth ? <div style = {{ display: 'flex', alignItems: 'center'}}><img src={change} style={{ width: '40px', cursor: 'pointer' }} onClick={activateEditMode} /> 
                                 
                              <ImageLoader description= {description}/>

                              </div>
                              : null}
                    
                     </div>

                  }
                  {editMode &&
                    <div >
                      <div><input type = "checkbox" checked={status} onChange = {onStatusChange}/> Статус записи</div>
                      Описание: <textarea style={{ width: '90%' }} autoFocus={true} onChange={onCommonChange}
                        value={common} />
                      Разновидности: <textarea style={{ width: '90%' }} autoFocus={true} onChange={onVarietiesChange}
                        value={varieties} />
                      Ориентировочная стоимость: <textarea style={{ width: '90%' }} autoFocus={true} onChange={onAstimationChange}
                        value={astimation} />
                      Дополнительная информация: <textarea style={{ width: '90%' }} autoFocus={true} onChange={onAddInfoChange}
                        value={kassirInfo} />
                      Источники/ссылки: <textarea style={{ width: '90%' }} autoFocus={true} onChange={onSoursesChange}
                        value={sourses} />
                      <button onClick={deactivateEditModeRequest}>Внести изменения</button>
                      <button onClick={deactivateEditMode}>Закрыть</button>
                    </div>
                    }

                
      
                
              </div>
              <div className={styles.modalFooter}>
                <Button onClick={onCancel}>Закрыть</Button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  isOpen: true,
  onCancel: () => { },
  onSubmit: () => { },
  children: null,
};

export default Modal;
