import CardProfileForm from '@/components/cardProfile/cardProfileForm/CardProfileForm'
import React from 'react'

const page = () => {
  return (
    <div className='px-5 pb-5 bg-[#f8fbff] h-full'>
        <div className="flex flex-col text-textGrayDarker gap-1 py-2">
            <h2 className='font-semibold'>Create Profile</h2>
            <p className='text-xs'>Fill in profile details and add card fee.</p>
        </div>
        <CardProfileForm />
    </div>
  )
}

export default page