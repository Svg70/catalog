import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import './AddingForm.css';
import SimpleExample, { MyCarousel, SimpleSlider } from '../Slider/Slider';
import { NavLink } from 'react-router-dom';

const AddingForm = ({
  isOpen, onCancel, onSubmit,description
}) => {

  return (
    <>
      {isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">Форма добавления позиции в каталог</div>
                <Icon name="times" onClick={onCancel} />
              </div>
              <div className="modalBody">
              <div className="modalTitle">Внести в каталог позицию {description.nominal} {description.nominal === 1 && 'рубль'}{description.nominal === 3 && 'рубля'}{description.nominal === 5 && 'рублей'}
                  {description.nominal === 10 && 'рублей'}{description.nominal === 25 && 'рублей'}{description.nominal === 50 && 'рублей'}{description.nominal === 100 && 'рублей'} {description.year} года {description.upravl}-{description.director}-{description.kassir}</div>
                <div>Опишите Ваш экземпляр</div>
                <div><textarea></textarea></div>
                <Button onClick={onSubmit} >Прикрепить файлы</Button>

              </div>
              <div className="modalFooter">
                <Button onClick={onCancel} invert>Закрыть</Button>
                <Button onClick={onSubmit} >Отправить</Button>

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
