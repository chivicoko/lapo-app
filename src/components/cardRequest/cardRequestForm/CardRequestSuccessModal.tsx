import ButtonOne from '@/components/button/ButtonOne';
import Image from 'next/image';
import React from 'react'

const CardRequestSuccessModal = ({handleModalToggle, currentBtn}: {handleModalToggle: () => void, currentBtn: string}) => {
  return (
    <section className="fixed inset-0 -top-5 bg-gray-800 bg-opacity-80 flex justify-center items-center p-2 z-[999999]">
        <div className="bg-white w-[27rem] rounded-radius-12 shadow-lg flex flex-col justify-center items-center">
            <div className="w-full p-6 flex flex-col items-start justify-between gap-4 rounded-radius-12">
                <div className='rounded-radius-12 size-10 border border-gray-200 flex items-center justify-center'>
                    <div className="relative size-[24px]">
                        <Image
                            src="/icons/check-circle.svg"
                            alt="check-circle icon"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            
                <div className='pt-3 pb-5'>
                    <h3 className='text-textGrayDarker text-2xl'>Successful</h3>
                    {currentBtn === 'Download for production' && <p>Production file has been downloaded.</p>}
                    {currentBtn === 'Send to Dispatch' && <p>Card batch successfully sent to dispatch.</p>}
                </div>
                
                <ButtonOne onClick={handleModalToggle} classes='py-2 px-8 text-sm' btnText1='Continue' />
            </div>
        </div>
    </section>
  )
}

export default CardRequestSuccessModal;