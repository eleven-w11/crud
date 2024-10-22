import React from 'react'
import style from './page.module.css';

const Page = () => {
  return (
    <>
      <div className='ssd-input'>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Roll No.' />
        <input type="text" placeholder='Contact' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Password' />
        <button>Send</button>
      </div>
      <div>
        <input type="text" placeholder='Roll No.'/>
      </div>
    </>
  )
}

export default Page