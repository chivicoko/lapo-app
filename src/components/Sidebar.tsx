'use client';

import { useNavTab } from '@/context/NavigationContext';
import { menuItems } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import ButtonNeutral from './button/ButtonNeutral';

interface SidebarProps {
    show?: string;
    closeSidebar?: () => void;
}
  
const Sidebar: React.FC<SidebarProps> = ({ show = 'hidden', closeSidebar = () => {} }) => {
    const {currentData, handleCurrentTab} = useNavTab();
    
    return (
        <nav className={`${show === 'block' ? 'fixed lg:hidden' : 'hidden'} border-r border-customGray px-3 lg:block top-0 left-0 z-50 lg:z-auto w-4/6 sm:w-3/6 lg:w-[21%] xl:w-1/6 h-fit min-h-full     bg-white`}>
            <div className={`overflow-y-scroll custom-scrollbar2 w-full h-full flex flex-col justify-start items-start px-1`}>
                <button className='self-end mr-3 md:mr-8 mt-2 text-3xl lg:hidden' onClick={closeSidebar}>&times;</button>
                <div className="flex flex-col justify-start items-start gap-8 lg:gap-12 pb-6 lg:py-6">
                    <Link href="/" className="relative w-[138.32px] h-[45px] px-3">
                        <Image
                            src="/images/LAPO_Logo_2022-removebg-preview 1.svg"
                            alt="Lapo's Logo"
                            fill
                            priority
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </Link>
                    
                    <div className="w-full">
                        {menuItems.slice(0, 1).map(item =>
                            <ButtonNeutral
                                key={item.id}
                                onClick={() => handleCurrentTab(currentData, item.ref, item.icon)}
                                btnText1={item.title}
                                classes={`${currentData.currentTab === item.ref ? "text-primary bg-[#F6F6F6] border-customGray" : "text-textGray bg-transparent border-transparent"} focus:ring-transparent flex items-center gap-3 w-full hover:text-primary hover:bg-[#F6F6F6] border hover:border-customGray py-2 px-3 rounded-radius-8 text-sm transition-all duration-300 ease-in-out`}
                                icon1={<div className="relative size-[16px]"><Image src={`/icons/${item.icon}`} fill alt={`${item.title} icon`} title={`Go to ${item.title} page`} className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
                            />
                        )}

                        <h3 className='uppercase text-textGray text-sm py-4 pt-10 px-4'>Main menu</h3>

                        <ul className="flex flex-col items-start justify-start gap-3 w-full">
                            {menuItems.slice(1, menuItems.length - 1).map(item =>
                                <li key={item.id} className='w-full'>
                                    <ButtonNeutral
                                        onClick={() => handleCurrentTab(currentData, item.ref, item.icon)}
                                        key={item.id}
                                        btnText1={item.title}
                                        classes={`${currentData.currentTab === item.ref ? "text-primary bg-[#F6F6F6] border-customGray" : "text-textGray bg-transparent border-transparent"} focus:ring-transparent flex-1 flex items-center gap-3 w-full hover:text-primary hover:bg-[#F6F6F6] border hover:border-customGray py-2 px-3 rounded-radius-8 text-sm transition-all duration-300 ease-in-out`}
                                        icon1={<div className="relative size-[16px]"><Image src={`/icons/${item.icon}`} fill alt={`${item.title} icon`} title={`Go to ${item.title} page`} className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
                                    />
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="w-full p-3 mt-6 md:mt-20">
                        {menuItems.slice(menuItems.length - 1, menuItems.length).map(item =>
                            <ButtonNeutral
                                key={item.id}
                                btnText1={item.title}
                                classes={`focus:ring-transparent flex items-center gap-3 w-full text-gray-800 bg-transparent border-transparent hover:text-primary hover:bg-[#F6F6F6] border hover:border-customGray py-2 px-3 rounded-radius-8 text-sm transition-all duration-300 ease-in-out`}
                                icon1={<div className="relative size-[16px]"><Image src={`/icons/${item.icon}`} fill alt={`${item.title} icon`} title={`Go to ${item.title} page`} className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
                            />
                        )}
                        
                        <div className="w-full flex items-center justify-center md:hidden pt-6">
                            <button className="relative size-[20px]">
                                <Image
                                    src="/icons/bell-01.svg"
                                    alt="bell icon"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </button>
            
                            <button className="relative size-[32px] ml-2 md:ml-0">
                                <Image
                                    src="/icons/Avatar.svg"
                                    alt="User placeholder image"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </button>
                        </div>

                        <div className="pl-3 mt-10">
                            <p className='uppercase text-[9px] text-textGray py-[4px]'>powered by</p>
                            <div className="relative w-[93px] h-[42px]">
                                <Image
                                    src="/images/cardinfra logo 1.svg"
                                    alt="bell icon"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Sidebar;
