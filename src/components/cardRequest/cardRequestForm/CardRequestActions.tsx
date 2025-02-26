import ButtonNeutral from '@/components/button/ButtonNeutral'
import { cardRequestActionBtns } from '@/utils/data'
import Image from 'next/image';
import React from 'react'

interface ActionBtnProps {
    handleActionBtns: (text: string) => void;
    nextBtn: string;
}

const CardRequestActions = ({handleActionBtns, nextBtn}: ActionBtnProps) => {
  return (
    <div className="w-full space-y-2 py-3">
        <h3 className="text-sm font-semibold text-neutral-700">Actions</h3>
        <div className="w-full flex items-center gap-y-3 md:gap-y-6 gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-12 flex-wrap">
            {cardRequestActionBtns.map(item => (
                <ButtonNeutral
                    onClick={() => handleActionBtns(item.text)}
                    key={item.id}
                    btnText1={item.text}
                    bgColor={item.bg}
                    disabled={nextBtn !== item.text ? true : false}
                    classes={`${item.bg === 'orange' ? 'bg-orange-700 hover:bg-orange-600 focus:ring-orange-700' : item.bg === 'green' ? 'bg-green-800 hover:bg-green-700 focus:ring-green-800' : item.bg === 'purple' ? 'bg-purple-700 hover:bg-purple-600 focus:ring-purple-700' : item.bg === 'blue' ? 'bg-blue-800 hover:bg-blue-700 focus:ring-blue-800' : 'bg-gray-800 hover:bg-gray-700 focus:ring-gray-800'} ${nextBtn !== item.text ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'} flex items-center gap-2 text-white whitespace-nowrap py-2 px-3 rounded-[4px] text-sm`}
                    icon1={<div className="relative size-[20px] ml-1"><Image src={`/icons/${item.icon}`} fill alt={`${item.text} icon`} className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
                />
            ))}
        </div>
    </div>
  )
}

export default CardRequestActions;