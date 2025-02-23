'use client';

import { fees, feesTableHead } from '@/utils/data';
import React, { useState } from 'react'
import CardProfileFormModal from './CardProfileFormModal';
import { Toaster, toast } from 'react-hot-toast';
import ButtonOne from '@/components/button/ButtonOne';

const FeesList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(prev => !prev);
    };
          
    const addFee = (e: React.FormEvent<HTMLFormElement>) => {        
        e.preventDefault();
        handleModalToggle();
        
        toast.success(`Fee has been added successfully!`, {
            className: 'bounce-toast custom-toast react-hot-toast-icon w-fit',
            icon: '✅',
            duration: 3000,
        });
    }

  return (
    <div className="py-3 px-4 bg-white border border-customGray rounded-radius-8">
        <Toaster position="bottom-center" reverseOrder={false} />
        <h4 className='pb-4'>Fees</h4>
        <div className="w-full">
            <ButtonOne onClick={handleModalToggle} classes='py-1 px-4' btnText1='Add Fee' btnText2='+' btnText1Classes='text-sm' btnText2Classes='text-xl' />
            
            <div className="flex items-center justify-between gap-6 pt-4 pb-4">
                <div className="w-full overflow-x-scroll custom-scrollbar">
                    <table className="min-w-full custom-scrollbar">
                        <thead className="bg-transparent border border-customGray">
                        <tr className="bg-neutral-100 divide-x divide-customGray">
                            {feesTableHead.map(item => (
                            <th key={item.id} className={`py-[10px] px-2 text-[13px] text-center whitespace-nowrap text-textGray capitalize tracking-wider`}>{item.title}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-customGray border border-customGray">
                        {fees.map(item => (
                            <tr
                            key={item.id}
                            className="my-2 divide-x divide-customGray"
                            >
                                <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.name}</td>
                                <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.value}</td>
                                <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.frequency}</td>
                                <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.currency}</td>
                                <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.time}</td>
                                <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.accountPad}</td>
                                <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.account}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        {isModalOpen && <CardProfileFormModal handleModalToggle={handleModalToggle} addFee={addFee} />}
    </div>
  )
}

export default FeesList;