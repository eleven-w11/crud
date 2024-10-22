import React from 'react';

const Page = () => {
  return (
    <div className='sd-inputs'>
      <div className='ssd-input'>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Roll No.' />
        <input type="text" placeholder='Contact' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Password' />
        <button>Send</button>
      </div>
    </div>
  )
}

export default Page