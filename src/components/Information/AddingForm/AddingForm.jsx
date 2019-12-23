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
