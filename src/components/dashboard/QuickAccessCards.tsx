import { dashboardQuickAccess } from '@/utils/data';
import React from 'react'
import Image from 'next/image';
import ButtonLinkNeutral from '../button/ButtonLinkNeutral';

const QuickAccessCards = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap ">
        {dashboardQuickAccess.map(item => (                              
            <ButtonLinkNeutral
              href={item.url}
              key={item.id}
              btnText1={item.text}
              classes="flex-1 flex items-center gap-3 rounded-radius-4 py-2 px-4 bg-secondary_light whitespace-nowrap"
              icon1={<div className="p-2 w-fit bg-primary rounded-full"><div className="relative size-[16px]"><Image src={`/icons/${item.icon}`} fill alt={`${item.text} icon`} className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div></div>}
              icon2={<div className="relative size-[14px]"><Image src="/icons/chevron-right.svg" fill alt='tab icon' className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
            />
        ))}
    </div>
  )
}

export default QuickAccessCards;