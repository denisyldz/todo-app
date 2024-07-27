import React from 'react'
import Dropdown from './Dropdown'

function Form() {
  return (
    <form>
      <div className='mb-4'>
        <label htmlFor='text'>Title</label>
        <input type='email' placeholder='Enter Title' className='form-control' />
      </div>
      <div className='mb-4'>
        <label htmlFor='text'>Description</label>
        <textarea style={{maxHeight: 90}} type='text' placeholder='Enter Description' className='form-control' />
      </div>
      <Dropdown />
    </form>
  )
}

export default Form