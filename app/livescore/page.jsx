import React from 'react'
import MatchDetails from '@/components/livescore/section66'
import AddDetails from '@/components/livescore/section33'

const page = () => {
  return (
    <main className='flex flex-col items-center min-h-screen'>
      <div className='container flex flex-col items-center xl:gap-x-12 px-6' >
        <MatchDetails />
        <AddDetails />
      </div>
    </main>
  )
}

export default page