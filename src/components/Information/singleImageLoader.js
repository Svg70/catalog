import React, { useState } from 'react'

const SingleImageLoader = ({imageReturnFunc, numberName}) =>{
    const [image, setimage] = useState('')
    const [loading, setLoading] = useState(false)
    const uploadimage = async e => {
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
      
        await setimage(file.secure_url)
        setLoading(false)
        imageReturnFunc(file.secure_url)
    }
      return     <div>
    <div>Загрузите фото {numberName}</div>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadimage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
          <img src={image} style={{ width: '100px' }} />
        )}
    </div>
      
      
}

export default SingleImageLoader