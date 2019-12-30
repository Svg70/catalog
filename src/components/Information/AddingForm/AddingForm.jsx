import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import styles from'./AddingForm.module.css';
import { useSelector } from 'react-redux';
import AdminEditMode from '../CommonWindow/AdmiEditMode';



const AddingForm = ({
  isOpen, onCancel, onSubmit, description
}) => {
  const userIsAuth = useSelector(store => store.loginPage.userIsAuth)
  const adminIsAuth = useSelector(store => store.loginPage.adminIsAuth)
  const approved = useSelector(store => store.loginPage.approved)


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
                  
    { !userIsAuth && !adminIsAuth &&<div>Авторизируйтесь в системе, чтобы аносить позиции в каталог</div>}
                  
    { userIsAuth && !adminIsAuth && <div>дождитесь подтверждения вашей регистрации</div>}
                  
    { approved && userIsAuth && !adminIsAuth &&
                  <div>
                <div>Каталог сайта Perekupi.ru позволяет посетитеям вносить информацию 
                  о своих коллекционных экземплярах. 
                  Подобное взаимодействие между коллекционерами позволит быстро и эффективно собрать статистику и популяризировать тему.
                  <br/><b>Для внесения информации опишите провенанс вашего экземпляра:</b>
                </div>
                <div><textarea style={{width: '80%', marginTop: '10px', border: '1px solid black', height: '60px'}}></textarea></div>
                <div style={{ marginTop: '10px', marginBottom: '10px'}}>Прикрепите фото вашего экземпляра. Наиболее оптимальный вариант 3 фотографии: 
                  аверс, реверс и на просвет.
                </div>
                <Button onClick={onSubmit} >Прикрепить файлы</Button>
                <Button onClick={onSubmit} >Отправить</Button>
                      </div>}

    { adminIsAuth &&
                  <div>

                    <AdminEditMode description = {description}/>
                    
                      </div>}
              </div>
              <div className={styles.modalFooter}>
                <Button onClick={onCancel} invert>Закрыть</Button>
                

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
