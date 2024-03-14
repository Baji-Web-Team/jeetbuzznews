'use client'

import React from 'react'
import LiveMatch from '../matches/LiveMatch'

const section66 = ({ searchParams }) => {
  console.log({searchParams})

  return (
    <div className='!lg:basis-2/3 flex flex-col top-0 !overflow-hidden !object-contain'>
        <LiveMatch />
    </div>
  )
}

export default section66