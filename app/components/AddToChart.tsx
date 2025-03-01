'use client'
import React from 'react'

const AddToChart = () => {
  return (
    <div className='p-4 my-4 bg-sky-600 text-white text-xl hover:bg-sky-700'>
      <button className='btn btn-primary' onClick={() => console.log('add to chart')}>Add to chart</button>
    </div>
  )
}

export default AddToChart
