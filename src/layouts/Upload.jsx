import React, { useState } from 'react'
import IMAGE from '../assets/image.svg'
import { ref, uploadBytes } from '@firebase/storage'
import { storage } from '../firebase'
import Card from '../components/Card/Card'
import { Button } from '../components/Button/Button'

function Upload() {
    const [error, setError] = useState(false)
    const preventDefault = event => event.preventDefault()

    async function handleDrop(event) {
        event.preventDefault()

        const image = event.dataTransfer.files[0]
        if (!image.type.includes('image/')) return setError(true)

        const fileRef = ref(storage, `images/${image.name}`)
        await uploadBytes(fileRef, image)
        .then(snapshot => {
            setError(false)
            console.log(snapshot, 'Uploaded image!')
        })
        .catch(error => setError(error))
    }

  return (
    <Card id='upload'>
        <h1>Upload your image</h1>
        <p className={`${error ? 'error' : ''}`}>File should be Jpeg, Png, ...</p>
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
        <Button>Choose a file</Button>
    </Card>
  )
}

export default Upload