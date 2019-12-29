import React, { useState } from 'react'
import { changeDescriptionPhotos } from '../redux/admin-catalog-reducer'
import { useDispatch } from 'react-redux'



function ImageLoader({description}) {
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
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

  const sendPutRequest = () => {
     dispatch(changeDescriptionPhotos(description.id, description.year, description.nominal, description.number, image1, image2))
  }

  return (
    <div className="App">
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
      <button onClick ={sendPutRequest}>Отправить на сервер</button>
    </div>
  )
}

export default  ImageLoader