'use client';

import Image from 'next/image';
import { cardRequestActionBtns } from '@/utils/data';
import { useState } from 'react';
import CardRequestSuccessModal from './CardRequestSuccessModal';
import InputOne from '@/components/inputs/InputOne';
import ButtonNeutral from '@/components/button/ButtonNeutral';

const CardRequestForm = () => {
    const [currentStatus, setCurrentStatus] = useState<string>('Pending');
    const [currentBtn, setCurrentBtn] = useState<string>('Download for production');
    const [nextBtn, setNextBtn] = useState<string>('Download for production');
    const [isDispatched, setIsDispatched] = useState<boolean>(false);
    const [isDownloaded, setIsDownloaded] = useState<boolean>(false);

    const handleActionBtns = (action: string | null) => {
        cardRequestActionBtns.forEach((btn, index) => {
            if (action === btn.text) {
                if (btn.text === 'Download for production') {
                    setCurrentBtn('Download for production');
                    setIsDownloaded(true);
                }
                if (btn.text === 'Send to Dispatch') {
                    setCurrentBtn('Send to Dispatch');
                    setIsDispatched(true);
                }
                if (btn.text !== 'Download for production' && btn.text !== 'Send to Dispatch') {
                    const btnTextArray = btn.text.split(' ').map(item => item.trim());
                    const newStatus = btnTextArray.slice(2, btnTextArray.length).join(' ');                    
                    setCurrentStatus(newStatus);
                }
                if (btn.text === 'Mark as Acknowledged') {
                    setNextBtn('');
                } else {
                    setNextBtn(cardRequestActionBtns[index+1].text);
                }
            }
        });
    };

    const handleSuccessModalClose = () => {
        if (currentBtn === "Download for production") {
            setIsDownloaded(false);
        }
        if (currentBtn === "Send to Dispatch") {
            setIsDispatched(false);
        }
    };

  return (
    <div className="py-2 space-y-5">

        <div className="py-3 px-4 bg-white border border-customGray rounded-radius-8">
            <h4 className='pb-4'>Card Request Details</h4>
            <div className="w-full space-y-4">
                <form className="w-full md:w-5/6 space-y-4">
                    <div className="w-full flex items-center gap-2 sm:gap-16 md:gap-32">
                        <div className="w-1/2">
                            <InputOne label='Branch Name' value='Corporate' name="branchName" placeholderText="Enter branch name" />
                        </div>
                        <div className="w-1/2">
                            <InputOne label='Initiator' value='RootUser' name="initiator" placeholderText="RootUser" />
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-2 sm:gap-16 md:gap-32">
                        <div className="w-1/2">
                            <InputOne label='Card Type' value='Classic Debit' name="cardType" placeholderText="Classic Debit" />
                        </div>
                        <div className="w-1/2">
                            <InputOne label='Card Charges' value='₦1,500' name="cardCharges" placeholderText="₦1,500" />
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-2 sm:gap-16 md:gap-32">
                        <div className="w-1/2">
                            <InputOne label='Quantity' value='10' name="quantity" placeholderText="10" />
                        </div>
                        <div className="w-1/2">
                            <InputOne label='Batch' value='095783489' name="batch" placeholderText="095783489" />
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-2 sm:gap-16 md:gap-32">
                        <div className="w-1/2 space-y-1">
                            <label htmlFor="quantity" className="text-sm text-neutral-700">Date Requested</label>
                            <div className="w-full">
                                <p>11/14/2024  10:27:43</p>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col items-end md:items-start gap-2">
                            <label htmlFor="batch" className="text-sm text-neutral-700">Status</label>
                            <div className="">
                                {/* <span className={`${currentStatus === 'Ready' ? 'text-green-700 border-green-300 bg-green-100' : item.status === 'In Progress' ? 'text-orange-700 border-orange-300 bg-orange-100' : item.status === 'Acknowledged' ? 'text-blue-700 border-blue-300 bg-blue-100' : 'text-gray-700 border-gray-300 bg-gray-100'} px-4 py-[4px] border rounded-full`}>
                                    {item.status}
                                </span> */}
                                <span className={`${currentStatus === 'Ready' ? 'text-green-700 border-green-300 bg-green-100' : currentStatus === 'In Progress' ? 'text-orange-700 border-orange-300 bg-orange-100' : currentStatus === 'Acknowledged' ? 'text-blue-700 border-blue-300 bg-blue-100' : 'text-gray-700 border-gray-300 bg-gray-100'} px-4 py-[4px] border rounded-full`}>
                                    {currentStatus}
                                </span>
                            </div>
                        </div>
                    </div>

                </form>

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

            </div>
        </div>

        {isDownloaded && currentBtn === "Download for production" ?
        <CardRequestSuccessModal handleModalToggle={handleSuccessModalClose} currentBtn={currentBtn} />
        : null}

        {isDispatched && currentBtn === "Send to Dispatch" ?
        <CardRequestSuccessModal handleModalToggle={handleSuccessModalClose} currentBtn={currentBtn} />
        : null}
    </div>
  )
}

export default CardRequestForm;