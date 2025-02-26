'use client';

import Image from 'next/image';
import CardRequestList from './CardRequestList';
import { useCallback, useState } from 'react';
import { cardRequests } from '@/utils/data';
import { recentCardInfoProps } from '@/utils/types';
import Search from '../Search';
import ButtonNeutral from '../button/ButtonNeutral';


const CardRequest = () => {
  const [cards, setCards] = useState<recentCardInfoProps[]>(cardRequests);
  
  const handleSearch = useCallback((text: string) => {
    const filteredCards = cardRequests.filter((card) => {
      if (card.branch) {
        return (card.branch.toLowerCase().includes(text.toLowerCase()));
      }
    });
    
    setCards(filteredCards);
  }, []);

  return (
    <div className="py-2">
      <div className="flex flex-col text-textGrayDarker gap-1 py-2">
        <h2 className='font-semibold'>Card Request</h2>
        <p className='text-xs'>View and attend to card requests here.</p>
      </div>

      <div className="py-2 border-y-2 border-customGray flex items-center justify-between gap-4">
        <div className="w-80 px-1 bg-white border border-customGray flex items-center justify-between rounded-radius-8 focus-within:ring-1 focus-within:ring-primary hover:ring-primary">
          <ButtonNeutral classes='p-0 ml-1 rounded-full' icon1={<div className='relative size-[16px]'><Image src="/icons/search-md.svg" fill alt="search icon" className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>} />
          <Search onChange={handleSearch} />
        </div>

        <div></div>
      </div>

      <CardRequestList newCardRequests={cards} />
    </div>
  )
}

export default CardRequest;