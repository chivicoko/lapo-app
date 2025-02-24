import CardRequestForm from '@/components/cardRequest/cardRequestForm/CardRequestForm';
import React from 'react'

const page = () => {
  return (
    <div className='px-5 pb-5 bg-[#f8fbff] h-full'>
        <div className="flex flex-col text-textGrayDarker gap-1 py-2">
            <h2 className='font-semibold'>Request Details</h2>
            <p className='text-xs'>Perform predetermined actions on card requests here.</p>
        </div>
        <CardRequestForm />
    </div>
  )
}

export default page;