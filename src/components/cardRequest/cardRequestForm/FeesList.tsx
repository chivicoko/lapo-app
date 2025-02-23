'use client';

import { fees, feesTableHead } from '@/utils/data';
import React, { useState } from 'react'
import CardProfileFormModal from './CardRequestSuccessModal';

const FeesList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(prev => !prev);
    };

  return (
    <div className="py-3 px-4 bg-white border border-customGray rounded-radius-8">
        <h4 className='pb-4'>Fees</h4>
        <div className="w-full">
            <button onClick={handleModalToggle} className='py-1 px-4 text-white hover:text-primary bg-primary hover:bg-transparent border border-transparent hover:border-primary rounded-radius-4 flex items-center gap-2'>
                <span className='text-xl'>+</span>
                <span className="text-sm">Add Fee</span> 
            </button>
            
            <div className="flex items-center justify-between gap-6 pt-4 pb-4">
                <div className="w-full overflow-x-scroll custom-scrollbar">
                    <table className="min-w-full custom-scrollbar">
                        <thead className="bg-transparent border border-customGray">
                        <tr className="bg-neutral-100 divide-x divide-customGray">
                            {feesTableHead.map(item => (
                            <th key={item.id} className={`py-[10px] text-[12px] text-center text-textGray capitalize tracking-wider`}>{item.title}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-customGray border border-customGray">
                        {fees.map(item => (
                            <tr
                            key={item.id}
                            className="my-2 divide-x divide-customGray"
                            >
                                <td className={`relative py-[11px] text-[10px] text-center whitespace-nowrap w-2`}>{item.name}</td>
                                <td className={`relative py-[11px] text-[10px] text-center whitespace-nowrap w-2`}>{item.value}</td>
                                <td className={`relative py-[11px] text-[10px] text-center whitespace-nowrap w-2`}>{item.frequency}</td>
                                <td className={`relative py-[11px] text-[10px] text-center whitespace-nowrap w-2`}>{item.currency}</td>
                                <td className={`relative py-[11px] text-[10px] text-center whitespace-nowrap w-2`}>{item.time}</td>
                                <td className={`relative py-[11px] text-[10px] text-center whitespace-nowrap w-2`}>{item.accountPad}</td>
                                <td className={`relative py-[11px] text-[10px] text-center whitespace-nowrap w-2`}>{item.account}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        {isModalOpen && <CardProfileFormModal currentBtn={''} handleModalToggle={handleModalToggle} />}
    </div>
  )
}

export default FeesList;