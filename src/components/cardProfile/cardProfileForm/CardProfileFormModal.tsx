'use client';

import ButtonNeutral from '@/components/button/ButtonNeutral';
import ButtonOne from '@/components/button/ButtonOne';
import InputOne from '@/components/inputs/InputOne';
import InputTwo from '@/components/inputs/InputTwo';
import { useNavTab } from '@/context/CardContext';
import { useState } from 'react';

interface CardProfileFormProps {
    handleModalToggle: () => void,
    modalFormToggle: () => void,
}
const CardProfileFormModal = ({handleModalToggle, modalFormToggle}: CardProfileFormProps) => {
    const {addFee} = useNavTab();

    const [name, setName] = useState<string | null>('');
    const [value, setValue] = useState<string | null>('');
    const [frequency, setFrequency] = useState<string | null>('');
    const [currency, setCurrency] = useState<string | null>('');
    const [feeImpact, setFeeImpact] = useState<string | null>('');
    const [accountPad, setAccountPad] = useState<string | null>('');
    const [account, setAccount] = useState<string | null>('');

    const addNewFee = () => {
        addFee({
            id: Math.random(),
            name: name,
            value: value,
            frequency: frequency,
            currency: currency || 'NGN',
            feeImpact: feeImpact,
            accountPad: accountPad,
            account: account,
        });

        modalFormToggle();
    };
    
  return (
    <section className="fixed inset-0 -top-5 bg-gray-800 bg-opacity-80 flex justify-center items-center p-2 z-[999999]">
        <div className="bg-white w-[27rem] rounded-radius-12 shadow-lg flex flex-col justify-center items-center">
            <div className="w-full py-4 px-4 flex items-start justify-between gap-4 rounded-radius-12">
                <div className="flex items-center gap-3">
                    <div className='rounded-radius-12 size-10 border border-gray-200 flex items-center justify-center'>
                        <div className='text-xl leading-tight size-4 rounded-radius-4 border border-textGray flex items-center justify-center pb-[5px] pl-[1px]'>+</div>
                    </div>
                    <div>
                        <h3 className='text-textGrayDarker'>Add Fee</h3>
                        <p className='text-sm text-textGray'>Fill in fee details</p>
                    </div>
                </div>
                
                <ButtonNeutral onClick={handleModalToggle} btnText1='&times;' title='Close modal' classes='px-2 rounded-full text-3xl text-textGray hover:text-red-700 hover:rotate-90 hover:translate-y-[3.5px] hover:translate-x-[3.5px] transition-all duration-300 ease-in-out' />
            </div>
            
            <form className="w-full">
                <div className='border-y border-customGray py-5 px-5 space-y-2'>
                    <div className="w-full">
                        <InputOne label='Fee Name*' name="feeName" placeholderText='Maintenance' value={'feeName'} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="w-full">
                        <InputTwo type='number' icon='chevron-selector-vertical.svg' label='Value' name="value" placeholderText="0" value={'value'} onChange={(e) => setValue(e.target.value)} />
                    </div>

                    <div className="w-full text-sm">
                        <h3 className='text-textGrayDarker py-1'>Currency</h3>
                        <div className="w-full flex items-center gap-3 text-gray-400 font-extralight">
                            <div className="flex items-center gap-2">
                                <input type="radio" checked disabled name="currency" id="NGN" value={'NGN'} onChange={(e) => setCurrency(e.target.value)} />
                                <label htmlFor="NGN">NGN</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="currency" id="USD" value={'USD'} onChange={(e) => setCurrency(e.target.value)} />
                                <label htmlFor="USD">USD</label>
                            </div>
                        </div>
                    </div>

                    <div className="w-full text-sm">
                        <h3 className='text-textGrayDarker py-1'>Fee Frequency</h3>
                        <div className="w-full flex items-center gap-3 text-gray-700 font-extralight">
                            <div className="flex items-center gap-2">
                                <input type="radio" name="feeFrequency" id="oneOff" value={'oneOff'} onChange={(e) => setFrequency(e.target.value)} />
                                <label htmlFor="oneOff">One Off</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="feeFrequency" id="monthly" value={'monthly'} onChange={(e) => setFrequency(e.target.value)} />
                                <label htmlFor="monthly">Monthly</label>
                            </div>
                        </div>
                    </div>

                    <div className="w-full text-sm">
                        <h3 className='text-textGrayDarker py-1'>Fee Impact</h3>
                        <div className="w-full flex items-center gap-3 text-gray-700 font-extralight">
                            <div className="flex items-center gap-2">
                                <input type="radio" name="feeImpact" id="issuance" value={'issuance'} onChange={(e) => setFeeImpact(e.target.value)} />
                                <label htmlFor="issuance">Issuance</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="feeImpact" id="pinReissue" value={'pinReissue'} onChange={(e) => setFeeImpact(e.target.value)} />
                                <label htmlFor="pinReissue">Pin Reissue</label>
                            </div>
                        </div>
                    </div>

                    <div className="w-full text-sm">
                        <h3 className='text-textGrayDarker py-1'>Account Pad</h3>
                        <div className="w-full flex items-center gap-y-2 gap-x-4 flex-wrap text-gray-700 font-extralight">                            
                            <div className="flex items-center gap-2">
                                <input type="radio" name="accountPad" id="none" value={'none'} onChange={(e) => setAccountPad(e.target.value)} />
                                <label htmlFor="none">None</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="accountPad" id="branchCodePrefix" value={'branchCodePrefix'} onChange={(e) => setAccountPad(e.target.value)} />
                                <label htmlFor="branchCodePrefix">Branch Code Prefix</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="accountPad" id="branchCodeSuffix" value={'branchCodeSuffix'} onChange={(e) => setAccountPad(e.target.value)} />
                                <label htmlFor="branchCodeSuffix">Branch Code Suffix</label>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <InputOne label='Account' name="account" value={'account'} onChange={(e) => setAccount(e.target.value)} />
                    </div>
                </div>

                <div className='py-5 px-5'>
                    <ButtonOne onClick={addNewFee} classes='py-2 px-8 w-full text-sm' btnText1='Add Fee' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default CardProfileFormModal;