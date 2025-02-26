'use client';

import { cardRequestActionBtns, cardRequests } from '@/utils/data';
import { useState } from 'react';
import CardRequestSuccessModal from './CardRequestSuccessModal';
import InputOne from '@/components/inputs/InputOne';
import { useParams, usePathname } from 'next/navigation';
import { recentCardInfoProps } from '@/utils/types';
import CardRequestActions from './CardRequestActions';

const CardRequestForm = () => {
    const [newCardRequest, setNewCardRequest] = useState<recentCardInfoProps | null>(null);
    const [currentStatus, setCurrentStatus] = useState<string>('Pending');
    const [currentBtn, setCurrentBtn] = useState<string>('Download for production');
    const [isDispatched, setIsDispatched] = useState<boolean>(false);
    const [isDownloaded, setIsDownloaded] = useState<boolean>(false);

    const pathName = usePathname();
    const {id} = useParams();
    const PathNameArray = pathName.split('/').map(item => item.trim()).filter(item => item !== '');

    const [nextBtn, setNextBtn] = useState<string>(() => {
        if (id) {
            const existingCardRequest = cardRequests.find(item => item.id === parseInt(PathNameArray[PathNameArray.length - 1], 10))

            if (existingCardRequest) {
                setNewCardRequest(existingCardRequest);
                return existingCardRequest.status === 'Pending' ? 'Download for production' :
                    existingCardRequest.status === 'In Progress' ? 'Mark as Ready' :
                    existingCardRequest.status === 'Ready' ? 'Send to Dispatch' : '';
            }
        }

        if (newCardRequest?.status === 'Pending') {
            return 'Download for production';
        } else if (newCardRequest?.status === 'In Progress') {
            return 'Mark as Ready';
        } else if (newCardRequest?.status === 'Ready') {
            return 'Send to Dispatch';
        } else if (newCardRequest?.status === 'Acknowledged') {
            return '';
        } else {
            return 'Download for production';
        }
    });

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
                    
                    if (newCardRequest) {
                        newCardRequest.status = newStatus;
                    }
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
            setNextBtn('Mark as In Progress');
        }
        if (currentBtn === "Send to Dispatch") {
            setIsDispatched(false);
            setNextBtn('Mark as Acknowledged');
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
                            <InputOne label='Branch Name' value={newCardRequest?.branch} name="branchName" placeholderText="Enter branch name" />
                        </div>
                        <div className="w-1/2">
                            <InputOne label='Initiator' value={newCardRequest?.initiator} name="initiator" placeholderText="RootUser" />
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-2 sm:gap-16 md:gap-32">
                        <div className="w-1/2">
                            <InputOne label='Card Type' value={newCardRequest?.cardType} name="cardType" placeholderText="Classic Debit" />
                        </div>
                        <div className="w-1/2">
                            <InputOne label='Card Charges' value={newCardRequest?.cardCharges} name="cardCharges" placeholderText="₦1,500" />
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-2 sm:gap-16 md:gap-32">
                        <div className="w-1/2">
                            <InputOne label='Quantity' value={newCardRequest?.quantity} name="quantity" placeholderText="10" />
                        </div>
                        <div className="w-1/2">
                            <InputOne label='Batch' value={newCardRequest?.batch} name="batch" placeholderText="095783489" />
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-2 sm:gap-16 md:gap-32">
                        <div className="w-1/2 space-y-1">
                            <label htmlFor="quantity" className="text-sm text-neutral-700">Date Requested</label>
                            <div className="w-full">
                                <p>{newCardRequest?.dateRequested}</p>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col items-end md:items-start gap-2">
                            <label htmlFor="batch" className="text-sm text-neutral-700">Status</label>
                            <div className="">
                                <span className={`${newCardRequest?.status === 'Ready' ? 'text-green-700 border-green-300 bg-green-100' : newCardRequest?.status === 'In Progress' ? 'text-orange-700 border-orange-300 bg-orange-100' : newCardRequest?.status === 'Acknowledged' ? 'text-blue-700 border-blue-300 bg-blue-100' : 'text-gray-700 border-gray-300 bg-gray-100'} px-4 py-[4px] border rounded-full`}>
                                    {newCardRequest?.status || currentStatus}
                                </span>
                            </div>
                        </div>
                    </div>
                </form>

                <CardRequestActions handleActionBtns={handleActionBtns} nextBtn={nextBtn} />
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