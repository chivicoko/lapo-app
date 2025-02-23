'use client'

import ButtonNeutral from '@/components/button/ButtonNeutral';
import { useNavTab } from '@/context/NavigationContext';
import { recentCardInfo, recentCardRequestTableHead } from '@/utils/data';
import Image from 'next/image';
import React, { useState } from 'react'

const RecentCardRequestList = () => {
  const {currentData, navigateToRequestDetails} = useNavTab();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleChartExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`${isExpanded ? 'fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center p-2 z-50' : ''} pt-1 transition-all duration-300 ease-in-out`}>
      <div className={`${isExpanded ? 'bg-white w-[95%] h-[97%] md:w-[80%] md:h-[90%] p-4 sm:p-7 md:p-10 rounded-xl' : ''} `}>
        <div className="flex items-center justify-between gap-4">
          <h3 className='text-textGrayDarker'>Recent Card Requests</h3>
          {!isExpanded ?
            <ButtonNeutral
              classes='rounded-radius-4'
              onClick={toggleChartExpansion}
              icon1={<div className="relative size-[20px]"><Image src="/icons/maximize-2.svg" fill alt="expansion icon" className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
            />
            :
            <button onClick={toggleChartExpansion} title='Reduce to normal screen view' className="p-2 rounded-full text-3xl hover:text-red-700 hover:rotate-90 transition-all duration-300 ease-in-out">
              &times;
            </button>
          }
        </div>
      
        <div className="flex items-center justify-between gap-6 pt-4 pb-4">
          <div className="w-full overflow-x-scroll custom-scrollbar">
            <table className="min-w-full custom-scrollbar">
              <thead className="bg-transparent border border-customGray">
                <tr className="bg-secondary_light">
                  {recentCardRequestTableHead.map(item => (
                    <th key={item.id} className={`${isExpanded ? "py-[11px] text-[13px] sm:py-[14px] sm:text-[14px]" : "py-[10px] text-[13px]"} whitespace-nowrap px-2 text-center text-textGray capitalize tracking-wider`}>{item.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {recentCardInfo.map(item => (
                  <tr
                    key={item.id}
                    className="my-2"
                  >
                    <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[11px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>{item.branch}</td>
                    <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[11px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>{item.cardType}</td>
                    <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[11px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>{item.quantity}</td>
                    <td className={`relative ${isExpanded ? 'py-[11px] text-[12px] sm:py-[14px] sm:text-[15px]' : 'py-[11px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>
                      <span className={`${item.status === 'Ready' ? 'text-green-700 border-green-300 bg-green-100' : item.status === 'In Progress' ? 'text-orange-700 border-orange-300 bg-orange-100' : item.status === 'Acknowledged' ? 'text-blue-700 border-blue-300 bg-blue-100' : 'text-gray-700 border-gray-300 bg-gray-100'} ${isExpanded ? 'px-4 py-[4px]' : 'px-2 py-[2px]'} border rounded-full`}>{item.status}</span>
                    </td>
                    <td className={`relative ${isExpanded ? 'py-[5px] text-[12px] sm:py-[8px] sm:text-[15px]' : 'py-[5px] text-[12px]'} px-2 text-center whitespace-nowrap w-2`}>
                      <button onClick={() => navigateToRequestDetails(currentData)} className="text-primary font-semibold py-[5px] px-1">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentCardRequestList;