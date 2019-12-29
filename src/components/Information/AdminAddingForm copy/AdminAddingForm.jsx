import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import './AdminAddingForm.css';

const AdminAddingForm = ({
  isOpen, onCancel, onSubmit, description, number, changeDataBaseCeilInfo
}) => {

  let [editMode, setEditMode] = useState(false);
  let [commonInfo, setCommon] = useState(description.common);

  useEffect( () => {
    setCommon(description.common);
}, [description.common] );

  const onCommonChange = (e) => {
    setCommon(e.currentTarget.value);
}


let [varieties, setVarieties] = useState(description.varieties);

useEffect( () => {
  setCommon(description.varieties);
}, [description.varieties] );

const onVarietiesChange = (e) => {

  setVarieties(e.currentTarget.value);
}

const setFormSubmit = () => {

  changeDataBaseCeilInfo( description.nominal, number, commonInfo, varieties)
}

  return (
    <>
      {isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">Внести позицию в каталог</div>
                <Icon name="times" onClick={onCancel} />
              </div>
              <div className="modalBody">
              <div className="modalTitle">Внести в каталог позицию {description.nominal} {description.nominal === 1 && 'рубль'}{description.nominal === 3 && 'рубля'}{description.nominal === 5 && 'рублей'}
                  {description.nominal === 10 && 'рублей'}{description.nominal === 25 && 'рублей'}{description.nominal === 50 && 'рублей'}{description.nominal === 100 && 'рублей'} {description.year} года {description.upravl}-{description.director}-{description.kassir}</div>
                <div>Внести следующую информацию в базу данных</div>
                <div>Описание:<input value = {commonInfo} onChange = {onCommonChange}></input></div>
                <div>Разновидности:<input value = {varieties} onChange = {onVarietiesChange}></input></div>
                <div><button>Внести номера</button></div>
                <div>Ориентировочная стоимость: <input value = {description.astimation}></input></div>
                <div>Дополнительная информация: <input value = {description.akassirInfo}></input></div>
                <div>Источники/Ссылки: <input value = {description.sourses}></input></div>
                <Button onClick={onSubmit}>Прикрепить файлы</Button>
              </div>
              <div className="modalFooter">
                <Button onClick={onCancel} invert>Закрыть</Button>
                <Button onClick={setFormSubmit} >Отправить</Button>

              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

AdminAddingForm.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  children: PropTypes.node,
};

AdminAddingForm.defaultProps = {
  title: 'Modal title',
  isOpen: true,
  onCancel: () => { },
  children: null,
};

export default AdminAddingForm;
