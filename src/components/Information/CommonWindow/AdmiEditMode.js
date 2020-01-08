import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import { useDispatch } from 'react-redux';
import { changeDescriptionCells } from '../../../redux/admin-catalog-reducer';


const AdminEditMode = ({ description }) => {

  const dispatch = useDispatch()
  const deactivateEditModeRequest = () => {
    dispatch(changeDescriptionCells(description.id, description.year, description.nominal, description.number, common,varieties,astimation,kassirInfo,sourses,status, image1,image2 ))
  }

  let [status, setNewStatus] = useState(description.status)
  const onStatusChange = (e) => {
      setNewStatus(e.currentTarget.checked)
  }

  let [common, setNewCommon] = useState(description.common)
  const onCommonChange = (e) => {
    setNewCommon(e.currentTarget.value)
  }

  let [varieties, setNewVarieties] = useState(description.varieties)
  const onVarietiesChange = (e) => {
    setNewVarieties(e.currentTarget.value)
  }

  let [astimation, setNewAstimation] = useState(description.astimation)
  const onAstimationChange = (e) => {
    setNewAstimation(e.currentTarget.value)
  }

  let [kassirInfo, setNewAddInfo] = useState(description.kassirInfo)
  const onAddInfoChange = (e) => {
    setNewAddInfo(e.currentTarget.value)
  }


  let [sourses, setNewSourses] = useState(description.sourses)
  const onSoursesChange = (e) => {
    setNewSourses(e.currentTarget.value)
  }
  // Загрузка изображений start
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [loading, setLoading] = useState(false)
  
  const uploadImage1 = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'jh7fsjhx')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/drkhbnvbo/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    setImage1(file.secure_url)
    setLoading(false)
  }

  const uploadImage2 = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'jh7fsjhx')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/drkhbnvbo/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    setImage2(file.secure_url)
    setLoading(false)
  }
  //загрузка изображений end

  return <div >
    <div><input type = "checkbox"  value ={status} onChange = {onStatusChange}/> Статус записи</div>
    Описание: <textarea style={{ width: '90%' }} autoFocus={true} onChange={onCommonChange}
      value={common} />
    Разновидности: <textarea style={{ width: '90%' }} autoFocus={true} onChange={onVarietiesChange}
      value={varieties} />
    Ориентировочная стоимость: <textarea style={{ width: '90%' }} autoFocus={true} onChange={onAstimationChange}
      value={astimation} />
    Дополнительная информация: <textarea style={{ width: '90%' }} autoFocus={true} onChange={onAddInfoChange}
      value={kassirInfo} />
    Источники/ссылки: <textarea style={{ width: '90%' }} autoFocus={true} onChange={onSoursesChange}
      value={sourses} />

{/* Загрузка изображений */}
    <div>
      <div>Загрузите фото 1</div>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage1}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
          <img src={image1} style={{ width: '100px' }} />
        )}
    </div>
    <div>
      <div>Загрузите фото 2</div>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage2}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
          <img src={image2} style={{ width: '100px' }} />
        )}
    </div>
{/* Загрузка изображений */}

    <Button onClick={deactivateEditModeRequest}>Внести изменения</Button>

  </div>
}
export default AdminEditMode