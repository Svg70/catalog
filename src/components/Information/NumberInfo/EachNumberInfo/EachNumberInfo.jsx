import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../../portal/Portal';
import Button from '../../button/Button';

import './EachNumberInfo.css';
import { SimpleSlider } from '../../Slider/Slider';

const EachNumberInfo = ({
  isOpen, onCancel, onSubmit, item
}) => {
debugger
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
                <div><b>Информация:</b>{" "}{item.info}</div>
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
