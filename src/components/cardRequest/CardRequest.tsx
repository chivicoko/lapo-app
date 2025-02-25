'use client';

import Image from 'next/image';
import CardRequestList from './CardRequestList';
import { useState } from 'react';
import { cardRequests } from '@/utils/data';


const CardRequest = () => {
  const [searchText, setSearchText] = useState<string>('');
  
  // Search function
  const filteredCards = cardRequests.filter((card) => {
    if (card.branch) {
      return (card.branch.toLowerCase().includes(searchText.toLowerCase()));
    }
  });

  return (
    <div className="py-2">
      <div className="flex flex-col text-textGrayDarker gap-1 py-2">
        <h2 className='font-semibold'>Card Request</h2>
        <p className='text-xs'>View and attend to card requests here.</p>
      </div>

      <div className="py-2 border-y-2 border-customGray flex items-center justify-between gap-4">
        <div className="w-80 px-1 bg-white border border-customGray flex items-center justify-between rounded-radius-8 focus-within:ring-1 focus-within:ring-primary hover:ring-primary">
          <button className="relative size-[16px] ml-1">
            <Image
              src="/icons/search-md.svg"
              alt="bell icon"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </button>
          <input
            type="text"
            placeholder="Search by branch"
            name="searchText"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="bg-transparent w-full py-2 px-1 border-0 text-xs focus:outline-0 focus:ring-0 text-[#666666]"
          />
        </div>

        <div></div>
      </div>

      <CardRequestList newCardRequests={filteredCards || cardRequests} />
    </div>
  )
}

export default CardRequest;