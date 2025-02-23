import { dashboardMetrics } from '@/utils/data';
import Image from 'next/image';
import React from 'react'

const Metrics = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
        {dashboardMetrics.map(item => (
            <div key={item.id} className="flex-1 flex flex-col items-start gap-1 rounded-radius-8 py-2 px-3 bg-white border border-customGray">

                <div className="relative size-[16px]">
                    <Image
                        src={`/icons/${item.icon}`}
                        alt={`${item.metricText} icon`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                <p className='text-textGray whitespace-nowrap'>{item.metricText}</p>

                <div className="w-full flex items-center justify-between gap-x-8 py-2">
                    <p className='font-semibold text-2xl whitespace-nowrap'>{item.metricNumber}</p>

                    {item.percentage !== '' ?
                    <div className="flex items-center gap-2">
                        <div className='bg-[#EFFAF6] text-[#29A174] text-sm py-[3px] px-[6px] rounded-radius-4 flex items-center'>
                            <span className="relative size-[12px]">
                                <Image
                                    src="/icons/arrow-narrow-up-right.svg"
                                    alt="bell icon"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </span>
                            <span className='whitespace-nowrap'>{item.percentage}%</span>
                        </div>
                        <span className='text-textGray text-sm whitespace-nowrap'>{item.timeInfo}</span>
                    </div>
                    :
                    <div className='flex items-center gap-1'>
                        <span className="relative size-[12px]">
                            <Image
                                src="/icons/alert-circle.svg"
                                alt="alert icon"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </span>
                        <span className='text-[#E78020] text-sm whitespace-nowrap'>{item.timeInfo}</span>
                    </div>
                    }

                </div>
            </div>
        ))}
    </div>
  )
}

export default Metrics;