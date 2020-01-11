import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import styles from './AddingForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import AdminEditMode from '../CommonWindow/AdmiEditMode';
import SingleImageLoader from '../singleImageLoader';
import { sendApplication, sendMessageAC } from '../../../redux/applications-reducer';



const AddingForm = ({
  isOpen, onCancel, onSubmit, description
}) => {
  const userIsAuth = useSelector(store => store.loginPage.userIsAuth)
  const adminIsAuth = useSelector(store => store.loginPage.adminIsAuth)
  const approved = useSelector(store => store.loginPage.approved)
  const message = useSelector(store => store.applications.message)
  const buttonDisable = useSelector(store => store.applications.buttonDisable)
  const dispatch = useDispatch()
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  
  const imageReturnFunc1 = (imageLink) =>{
    setImage1(imageLink)
  }
  const imageReturnFunc2 = (imageLink) =>{
    setImage2(imageLink)
  }
  const imageReturnFunc3 = (imageLink) =>{
    setImage3(imageLink)
  }
  const [addingItemDescription, setAddingItemDescription] = useState('')
  const onDescriptionChange = (e) =>{
    setAddingItemDescription(e.currentTarget.value)
  }
  const name = `${description.nominal} руб. ${description.year} года ${description.upravl}-${description.director}-${description.kassir}`

  const newApplicationCreation = () => {
    console.log(name,  addingItemDescription, image1, image2, image3)
    dispatch(sendApplication(name,  addingItemDescription, image1, image2, image3))
  }

  const deleteUserMessage = () => {
    onCancel()
    dispatch(sendMessageAC(null))
  }


  return (
    <>
      {isOpen &&
        <Portal>
          <div className={styles.modalOverlay}>
            <div className={styles.modalWindow}>
              <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>Форма добавления позиции в каталог</div>
                <Icon name="times" onClick={onCancel} />
              </div>
              <div className={styles.modalBody}>
                <div className={styles.modalTitle}>Внести в каталог позицию {description.nominal} {description.nominal === 1 && 'рубль'}{description.nominal === 3 && 'рубля'}{description.nominal === 5 && 'рублей'}
                  {description.nominal === 10 && 'рублей'}{description.nominal === 25 && 'рублей'}{description.nominal === 50 && 'рублей'}{description.nominal === 100 && 'рублей'} {description.year} года {description.upravl}-{description.director}-{description.kassir}
                </div>

                {!userIsAuth && !adminIsAuth && <div>Авторизируйтесь в системе, чтобы вносить позиции в каталог</div>}

                {userIsAuth && !adminIsAuth && !approved &&<div>дождитесь подтверждения вашей регистрации</div>}

                {approved && userIsAuth && !adminIsAuth &&
                  <div>
                    <div>Каталог сайта Perekupi.ru позволяет посетитеям вносить информацию
                      о своих коллекционных экземплярах.
                      Подобное взаимодействие между коллекционерами позволит быстро и эффективно собрать статистику и популяризировать тему.
                  <br /><b>Для внесения информации опишите провенанс вашего экземпляра:</b>
                    </div>
                    <div><textarea style={{ width: '80%', marginTop: '10px', border: '1px solid black', height: '60px' }} value = {addingItemDescription} onChange ={onDescriptionChange}></textarea></div>
                    <div style={{ marginTop: '10px', marginBottom: '10px' }}>Прикрепите фото вашего экземпляра. Наиболее оптимальный вариант 3 фотографии:
                      аверс, реверс и на просвет.
                </div>
                    <SingleImageLoader imageReturnFunc = {imageReturnFunc1} numberName ={1}/>
                    <SingleImageLoader imageReturnFunc = {imageReturnFunc2} numberName ={2}/>
                    <SingleImageLoader imageReturnFunc = {imageReturnFunc3} numberName ={3}/>
                    <Button onClick={newApplicationCreation} disabled={buttonDisable}>Отправить</Button>
                    <div>{message}</div>
                  </div>}

                {adminIsAuth &&
                  <div>

                    <AdminEditMode description={description} />

                  </div>}
              </div>
              <div className={styles.modalFooter}>
                <Button onClick={deleteUserMessage} invert>Закрыть</Button>


              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

AddingForm.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

AddingForm.defaultProps = {
  title: 'Modal title',

  isOpen: true,
  onCancel: () => { },
  onSubmit: () => { },
  children: null,
};

export default AddingForm;
