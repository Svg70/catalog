import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import './yearInfo.css';
import SimpleExample, { MyCarousel, SimpleSlider } from '../Slider/Slider';
import { NavLink } from 'react-router-dom';

const YearInfo = ({
  isOpen, onCancel, onSubmit
}) => {

  return (
    <>
      {isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">Статистика по 1855 году</div>
                <Icon name="times" onClick={onCancel} />
              </div>
              <div className="modalBody">
                <div>Статистика</div>

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

YearInfo.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

YearInfo.defaultProps = {
  title: 'Modal title',

  isOpen: true,
  onCancel: () => { },
  onSubmit: () => { },
  children: null,
};

export default YearInfo;
