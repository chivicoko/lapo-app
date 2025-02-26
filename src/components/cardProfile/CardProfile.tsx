'use client';

import Image from 'next/image';
import CardList from './CardList';
import ButtonNeutral from '../button/ButtonNeutral';
import ButtonLinkOne from '../button/ButtonLinkOne';
import { useCallback, useState } from 'react';
import { recentCardInfoProps } from '@/utils/types';
import { cardProfiles } from '@/utils/data';
import Search from '../Search';


const CardProfile = () => {
  const [newCardProfiles, setNewCardProfiles] = useState<recentCardInfoProps[]>(cardProfiles);
  const [cards, setCards] = useState<recentCardInfoProps[]>(cardProfiles);
  

  const handleSearch = useCallback((text: string) => {
    const filteredCards = cardProfiles.filter((card) => {
      if (card.cardName) {
        return (card.cardName.toLowerCase().includes(text.toLowerCase()));
      }
    });

    setCards(filteredCards);
  }, []);
  
  
  const deleteCard = (id: number) => {
    const updateCardProfiles = newCardProfiles.filter(item => item.id !== id)
    setNewCardProfiles(updateCardProfiles);
  }

  return (
    <div className="py-2">
      <div className="flex flex-col text-textGrayDarker gap-1 py-2">
        <h2 className='font-semibold'>Card Profile</h2>
        <p className='text-xs'>Create, view and edit card profiles here.</p>
      </div>

      <div className="py-2 border-y-2 border-customGray flex items-center justify-between gap-3 flex-wrap">
        <div className="w-60 md:w-80 px-1 bg-white border border-customGray flex items-center justify-between rounded-radius-8 focus-within:ring-1 focus-within:ring-primary hover:ring-primary">          
          <ButtonNeutral classes='p-0 ml-1 rounded-full' icon1={<div className='relative size-[16px]'><Image src="/icons/search-md.svg" fill alt="search icon" className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>} />
          <Search onChange={handleSearch} />
        </div>

        <ButtonLinkOne href='/card-profile/2' classes='py-[2px] md:py-1 px-2 md:px-4' btnText1='Add Profile' btnText2='+' btnText1Classes='text-sm md:text-base' btnText2Classes='text-lg md:text-2xl' />
      </div>

      <CardList deleteCard={deleteCard} newCardProfiles={cards} />
    </div>
  )
}

export default CardProfile