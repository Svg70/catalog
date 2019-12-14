import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import './Modal.css';
import SimpleExample, { MyCarousel, SimpleSlider } from '../Slider/Slider';
import { NavLink } from 'react-router-dom';

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
                <div className="modalTitle">{description.nominal} {description.nominal === 1 && 'рубль'}{description.nominal === 3 && 'рублей'}{description.nominal === 5 && 'рублей'}
                  {description.nominal === 10 && 'рублей'}{description.nominal === 25 && 'рублей'}{description.nominal === 50 && 'рублей'}{description.nominal === 100 && 'рублей'} {description.year} года {description.upravl}-{description.kassir}-{description.director}</div>
                <Icon name="times" onClick={onCancel} />
              </div>
              <div className="modalBody">
                <SimpleSlider photos={description.photos} />
                <div>Описание:{description.common}</div>
                <div>Разновидности:{description.varieties}</div>
                <div><NavLink to='/numbers'>Номера:</NavLink>{description.numbers}</div>
                <div>Ориентировочная стоимость:{description.astimation}</div>
                <div>Дополнительная информация:{description.addInfo}</div>
                <div><NavLink to='/sourses'>Источники/ссылки:</NavLink>{description.sourses}</div>
              </div>
              <div className="modalFooter">
                <Button onClick={onCancel} invert>Cancel</Button>

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
