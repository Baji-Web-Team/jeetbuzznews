import React from 'react'
import MatchDetails from '@/components/livescore/section66matches'
import AddDetails from '@/components/livescore/section33'

const page = () => {
  return (
    <main className='flex flex-col items-center min-h-screen'>
      <div className='container flex flex-col items-center xl:gap-x-12 px-6' >
        <div className='flex xl:flex-row md:flex-col flex-col items-center xl:gap-x-12 p-6'>
          <MatchDetails />
          <AddDetails />
        </div>
      </div>
    </main>
  )
}

export default page