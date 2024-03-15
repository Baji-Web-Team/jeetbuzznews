import React from 'react'
import Details from "@/components/livescore/LiveScoreFixture"

const section66 = ({ searchParams }) => {
  return (
    <section className='lg:basis-2/3 flex flex-col top-0'>
        <Details searchParams={searchParams}/>
    </section>
  )
}

export default section66