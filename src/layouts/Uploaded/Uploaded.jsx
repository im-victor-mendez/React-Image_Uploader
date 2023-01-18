import React from 'react'
import { Button } from '../../components/Button/Button'
import Card from '../../components/Card/Card'

function Uploaded() {
  return (
    <Card id='uploaded'>
        <div className='done-div'>
            <i className='done material-symbols-outlined'>Done</i>
            <h1>Uploaded Successfully!</h1>
        </div>

        <img src="" alt="" />

        <div className='image-link'>
            <p className='img-url'></p>
            <Button>Copy Link</Button>
        </div>
    </Card>
  )
}

export default Uploaded