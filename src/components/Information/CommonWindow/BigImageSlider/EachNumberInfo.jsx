import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../../portal/Portal';
import Button from '../../button/Button';
import exit from './../../../../images/exit.png'
import './EachNumberInfo.css';
import { SimpleSliderBig } from '../../SliderBig/Slider';

const BigImageSlider = ({
  isOpen, onCancel, item
}) => {
  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle"></div>
                <div onClick={onCancel}><img src={exit} /></div>
              </div>
              <div className="modalInfoBody">
              <SimpleSliderBig photos={item.photos} />
              <div className="modalBody">
                
                </div>
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

BigImageSlider.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

BigImageSlider.defaultProps = {
  
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};

export default BigImageSlider;
