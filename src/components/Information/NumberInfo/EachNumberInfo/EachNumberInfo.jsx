import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../../portal/Portal';
import Button from '@material-ui/core/Button';
import './EachNumberInfo.css';
import { SimpleSlider } from '../../Slider/Slider';
import BigImageSliderContainer from '../../CommonWindow/BigImageSlider/EachNumberInfoContainer.js';
import Krutilka from './../../../../images/preloader.gif'
import { useSelector, useDispatch } from 'react-redux';
import AddingFormSandbox from '../../AddingForm/AddingFormSandbox';



const EachNumberInfo = ({
  isOpen, onCancel, item, numberDelete, description
}) => {

  const adminIsAuth = useSelector(store => store.loginPage.adminIsAuth)
  const buttonDisable = useSelector(store => store.AdminCatalog.buttonDisable)
  const userIsAuth = useSelector(store => store.loginPage.userIsAuth)
  const approved = useSelector(store => store.loginPage.approved)


  const numberDeleteSend = () => {
    numberDelete(item.number)
  }

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle"></div>
                <b>{item.number}</b>
              </div>
              <div className="modalInfoBody">
              <SimpleSlider photos={item.photos} />
              <BigImageSliderContainer item = {item}/>
              <div className="modalBody">
                <div><b>Информация:</b>{" "}{item.info}</div>
                </div>
              </div>
              <div className="modalFooter">
              {buttonDisable && <div><img src={Krutilka} /></div>}
              {adminIsAuth && <Button variant="contained" color="primary" onClick = {numberDeleteSend}>Удалить номер</Button>}
              {approved && userIsAuth && !adminIsAuth && <AddingFormSandbox description={description} sign ={<Button variant="contained" color="primary">Добавить в каталог</Button>} />}
                <Button variant="contained" color="primary" onClick={onCancel} invert>Закрыть</Button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

EachNumberInfo.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

EachNumberInfo.defaultProps = {
  
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};

export default EachNumberInfo;
