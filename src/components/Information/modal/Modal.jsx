import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import './Modal.css';
import SimpleExample, { MyCarousel, SimpleSlider } from '../Slider/Slider';
import { NavLink } from 'react-router-dom';
import exit from './../../../images/exit.png'
import NumberInfoSandbox from '../NumberInfo/NumberInfoSandbox';

const Modal = ({
  isOpen, onCancel, description
}) => {

  return (
    <>
      {isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                {/* upravl: 'Ростовцев', director: 'Владимирцов', kassir: 'Веселовский', nominal: 1 */}
                <div className="modalTitle">{description.nominal} {description.nominal === 1 && 'рубль'}{description.nominal === 3 && 'рубля'}{description.nominal === 5 && 'рублей'}
                  {description.nominal === 10 && 'рублей'}{description.nominal === 25 && 'рублей'}{description.nominal === 50 && 'рублей'}{description.nominal === 100 && 'рублей'} {description.year} года {description.upravl}-{description.director}-{description.kassir}</div>
                <div onClick={onCancel}><img src={exit}/></div> 
              </div>
              <div className="modalBody">
                <SimpleSlider photos={description.photos} />
      <div><b>Описание:{' '}</b>{description.common}</div>
                <div><b>Разновидности:{' '}</b>{description.varieties}</div>
                <div><NumberInfoSandbox numbers= {description.numbers} description = {description} name = {"Известные номера"}/></div>
                <div><b>Ориентировочная стоимость:{' '}</b>{description.astimation}</div>
                <div><b>Дополнительная информация:{' '}</b>{description.addInfo}</div>
                <div><b>Источники/ссылки:{' '}</b>{description.sourses}</div>
              </div>
              <div className="modalFooter">
                <Button onClick={onCancel} invert>Закрыть</Button>
                <Button  >Внести дополнение в каталог</Button>
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
  title: 'Modal title',
  isOpen: true,
  onCancel: () => { },
  onSubmit: () => { },
  children: null,
};

export default Modal;
