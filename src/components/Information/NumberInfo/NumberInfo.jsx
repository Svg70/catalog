import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';
import Button from '../button/Button';
import './NumberInfo.css';
import  {SimpleSlider } from '../Slider/Slider';
import { NavLink } from 'react-router-dom';
import exit from './../../../images/exit.png'

const NumberInfo = ({
  isOpen, onCancel, description
}) => {

  return (
    <>
      {isOpen &&
        <Portal>
          <div className="modalOverlay">
          <div className="modalWindow">
              <div className="modalHeader">

                <div className="modalTitle">{description.nominal} {description.nominal === 1 && 'рубль'}{description.nominal === 3 && 'рубля'}{description.nominal === 5 && 'рублей'}
                  {description.nominal === 10 && 'рублей'}{description.nominal === 25 && 'рублей'}{description.nominal === 50 && 'рублей'}{description.nominal === 100 && 'рублей'} {description.year} года {description.upravl}-{description.director}-{description.kassir}</div>
                <div onClick={onCancel}><img src={exit}/></div> 
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
