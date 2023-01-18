import './Uploaded.scss'

import { getDownloadURL, ref } from '@firebase/storage'
import React, { useState } from 'react'
import { Button } from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import { useImage } from '../../contexts/imageContext'
import { storage } from '../../firebase'

function Uploaded() {
  const [imageUrl, setImageUrl] = useState(null)

  const { image } = useImage()

  const imageReference = ref(storage, `images/${image.name}`)
  getDownloadURL(imageReference).then(url => setImageUrl(url))

  async function copyLink() {
    await navigator.clipboard.writeText(imageUrl)
  }

  return (
    <Card id='uploaded'>
        <div className='done-div'>
            <i className='material-symbols-outlined'>Done</i>
            <h1>Uploaded Successfully!</h1>
        </div>

        <img src={imageUrl} alt="" />

        <div className='image-link'>
          <div className='image-link-text'>
            <p className='image-url'>{imageUrl}</p>
            <p className='image-suspense'>...</p>
          </div>
          <Button onClick={copyLink}>Copy Link</Button>
        </div>
    </Card>
  )
}

export default Uploaded