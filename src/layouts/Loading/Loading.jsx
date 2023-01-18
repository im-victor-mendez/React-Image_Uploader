import React from 'react'
import Card from '../../components/Card/Card'

function Loading() {
  return (
    <Card id='loading'>
        <h1>Uploading...</h1>

        <div className='loading_bar-base'>
            <div className='loading_bar-line'></div>
        </div>
    </Card>
  )
}

export default Loading