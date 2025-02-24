'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu } from '@mui/icons-material';
import Sidebar from './Sidebar';
import { useNavTab } from '@/context/CardContext';
import ButtonNeutral from './button/ButtonNeutral';
import { usePathname, useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const {currentData} = useNavTab();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const pathName = usePathname();
  console.log(pathName);

  const closeSidebar = () => setOpen(false);

  return (
    <>
      <nav className="flex items-center justify-between gap-3 z-30 py-1 md:py-2 pl-[2px] pr-3 sm:px-3 md:px-5 border-b border-customGray">
        <div className="w-full flex items-center justify-between">
          <Link href="/" className={`${pathName === '/' ? 'block' : 'hidden' } lg:hidden sm:mr-4 relative w-[138.32px] h-[45px]`}>
            <Image
              src="/images/LAPO_Logo_2022-removebg-preview 1.svg"
              alt="Lapo's Logo"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Link>

          <div className='md:w-full flex items-center justify-between'>
            {pathName === '/card-request' ?
            <div className="flex items-center gap-1 md:gap-2 text-textGray text-[12px] md:text-sm">
              <div className="relative size-[16px]">
                <Image
                  src="/icons/credit-card-accept.svg"
                  alt="Request icon"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className='whitespace-nowrap text-textGrayDarker'>Card Request</span>
            </div>
            : pathName === '/card-request/3' ?
            <div className="flex items-center gap-1 md:gap-2 text-textGray text-[12px] md:text-sm">
              <ButtonNeutral
                onClick={() => router.back()}
                btnText1='Back'
                classes='flex items-center gap-1 md:gap-2 pr-1'
                icon1={<div className="relative size-[20px]"><Image src="/icons/chevron-left.svg" fill alt='tab icon' className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
                icon2={<div className="relative size-[16px]"><Image src={`/icons/${currentData.currentTabImg}` || "/icons/home.svg"} fill alt={`tab icon`} className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
              />

              <span className="relative size-[16px]">
                <Image
                  src="/icons/chevron-right.svg"
                  alt="bell icon"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </span>

              <span className='whitespace-nowrap'>Card Request</span>

              <div className="relative size-[16px]">
                <Image
                  src="/icons/chevron-right.svg"
                  alt="bell icon"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className='whitespace-nowrap text-textGrayDarker'>Request Details</span>
            </div>
            :
            pathName === '/card-profile' ?
            <div className="flex items-center gap-1 md:gap-2 text-textGray text-[12px] md:text-sm">
              <div className="relative size-[16px]">
                <Image
                  src="/icons/credit-card-pos.svg"
                  alt="Request icon"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className='whitespace-nowrap text-textGrayDarker'>Card Profile</span>
            </div>
            : pathName === '/card-profile/2' ?
            <div className="flex items-center gap-1 md:gap-2 text-textGray text-[12px] md:text-sm">
              <ButtonNeutral
                onClick={() => router.back()}
                btnText1='Back'
                classes='flex items-center gap-1 md:gap-2 pr-1'
                icon1={<div className="relative size-[20px]"><Image src="/icons/chevron-left.svg" fill alt='tab icon' className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
                icon2={<div className="relative size-[16px]"><Image src={`/icons/${currentData.currentTabImg}` || "/icons/home.svg"} fill alt={`tab icon`} className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
              />

              <span className="relative size-[16px]">
                <Image
                  src="/icons/chevron-right.svg"
                  alt="bell icon"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </span>

              <span className='whitespace-nowrap'>Card Profile</span>

              <div className="relative size-[16px]">
                <Image
                  src="/icons/chevron-right.svg"
                  alt="bell icon"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className='whitespace-nowrap text-textGrayDarker'>Create Profile</span>
            </div>
            :
            <div className={`${pathName === '/' ? 'hidden md:flex' : 'flex'} px-2 items-center gap-2`}>
              <div className="relative size-[16px]">
                <Image
                  src={`/icons/${currentData.currentTabImg}` || "/icons/home.svg"}
                  alt="bell icon"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className='whitespace-nowrap' >{currentData.currentTab || 'Dashboard'}</span>
            </div>
            }

            <div className="md:w-full flex items-center justify-end gap-5">
              {pathName === '/' && 
              <div className="flex-1 md:flex-none px-1 bg-transparent border border-customGray flex items-center justify-between rounded-full focus-within:ring-1 focus-within:ring-primary hover:ring-primary">
                <ButtonNeutral classes='p-0 ml-1 rounded-full' icon1={<div className='relative size-[16px]'><Image src="/icons/search-md.svg" fill alt="search icon" className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>} />
                <input
                  type="text"
                  placeholder="Search"
                  name="searchText"
                  className="bg-transparent w-[110px] sm:w-[200px] min-w-full p-1 border-0 text-xs focus:outline-0 focus:ring-0 text-[#666666]"
                />
              </div>
              }

              <ButtonNeutral classes='hidden md:block relative size-[20px] rounded-full' icon1={<Image src="/icons/bell-01.svg" fill alt="bell icon" className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" />} />
              <ButtonNeutral classes='hidden md:block relative size-[32px] ml-2 md:ml-0 rounded-full' icon1={<Image src="/icons/Avatar.svg" fill alt="User placeholder image" className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" />} />
            </div>
          </div>
        </div>

        {/* Hamburger menu */}
        <ButtonNeutral onClick={() => setOpen(!open)} icon1={<Menu />} classes='lg:hidden text-gray-700 focus:outline-primary' />
      </nav>

      {open && (
        <>
          <Sidebar show="block" closeSidebar={closeSidebar} />

          <div
            onClick={closeSidebar}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          />
        </>
      )}
    </>
  );
};

export default Navbar;
