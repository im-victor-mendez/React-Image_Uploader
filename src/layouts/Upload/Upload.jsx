import './Upload.scss'

import React, { useState } from 'react'
import IMAGE from '../../assets/image.svg'
import { ref, uploadBytes } from '@firebase/storage'
import { storage } from '../../firebase'
import Card from '../../components/Card/Card'
import { Button } from '../../components/Button/Button'
import { useLayout } from '../../contexts/layoutContext'
import { useImage } from '../../contexts/imageContext'

function Upload() {
    const [error, setError] = useState(false)

    const { changeLayout, changeLoading } = useLayout()
    const { changeImage } = useImage()

    const preventDefault = event => event.preventDefault()

    async function uploadImage(image) {
        if (!image.type.includes('image/')) return setError(true)

        changeImage(image)
        changeLoading(true)

        const fileRef = ref(storage, `images/${image.name}`)
        await uploadBytes(fileRef, image)
        .finally(() => {
            setError(false)
            changeLoading(false)
            changeLayout('Uploaded')
        })
        .catch(error => setError(error))
    }
    

    async function handleDrop(event) {
        preventDefault(event)

        const image = event.dataTransfer.files[0]
        uploadImage(image)
    }
    
    function imageHandler(event) {
        preventDefault(event)

        const image = event.target.files[0]
        uploadImage(image)
    }

    function chooseFile() {
        document.getElementById('upload-input').click()
    }

  return (
    <Card id='upload'>
        <h1>Upload your image</h1>
        <p className={`${error ? 'error' : ''}`}>{error ? `Error, file should be Jpeg, Png, ... or Firebase service doesn't available now` : 'File should be Jpeg, Png, ...'}</p>
        <div className='dropzone'
        onDragOver={preventDefault}
        onDragEnter={preventDefault}
        onDragLeave={preventDefault}
        onDrag={preventDefault}
        onDrop={handleDrop}
        >
            <img src={IMAGE} alt="" />
            <p>Drag & Drop your image here</p>
        </div>
        <p>Or</p>
        <input type="file" accept='image/*' onChange={imageHandler} id="upload-input" style={{ display: 'none' }} />
        <Button onClick={chooseFile}>Choose a file</Button>
    </Card>
  )
}

export default Upload