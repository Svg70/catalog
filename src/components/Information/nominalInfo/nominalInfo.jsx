import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import './nominalInfo.css';


const NominalInfo = ({
  isOpen, onCancel, onSubmit, i
}) => {

  return (
    <>
      {isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
      <div className="modalTitle">Статистика по {i} рубль 1855 годa</div>
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

NominalInfo.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

NominalInfo.defaultProps = {
  title: 'Modal title',

  isOpen: true,
  onCancel: () => { },
  onSubmit: () => { },
  children: null,
};

export default NominalInfo;
