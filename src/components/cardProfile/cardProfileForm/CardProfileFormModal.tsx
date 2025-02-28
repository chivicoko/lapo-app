import ButtonNeutral from '@/components/button/ButtonNeutral';
import ButtonOne from '@/components/button/ButtonOne';
import InputOne from '@/components/inputs/InputOne';
import InputTwo from '@/components/inputs/InputTwo';

interface CardProfileFormProps {
    handleModalToggle: () => void,
    addNewFee: (e: React.FormEvent<HTMLFormElement>) => void,
}
const CardProfileFormModal = ({handleModalToggle, addNewFee}: CardProfileFormProps) => {
  return (
    <section className="fixed inset-0 -top-5 bg-gray-800 bg-opacity-80 flex justify-center items-center p-2 z-[999999]">
        <div className="bg-white w-[27rem] rounded-radius-12 shadow-lg flex flex-col justify-center items-center">
            <div className="w-full py-4 px-4 flex items-start justify-between gap-4 rounded-radius-12">
                <div className="flex items-center gap-3">
                    <div className='rounded-radius-12 size-10 border border-gray-200 flex items-center justify-center'>
                        <div className='text-xl leading-tight size-4 rounded-radius-4 border border-textGray flex items-center justify-center'>+</div>
                    </div>
                    <div>
                        <h3 className='text-textGrayDarker'>Add Fee</h3>
                        <p className='text-sm text-textGray'>Fill in fee details</p>
                    </div>
                </div>
                
                <ButtonNeutral onClick={handleModalToggle} btnText1='&times;' title='Close modal' classes='px-2 rounded-full text-3xl text-textGray hover:text-red-700 hover:rotate-90 transition-all duration-300 ease-in-out' />
            </div>
            
            <form onSubmit={addNewFee} className="w-full">
                <div className='border-y border-customGray py-5 px-5 space-y-2'>
                    <div className="w-full">
                        <InputOne label='Fee Name*' name="feeName" placeholderText='Maintenance' />
                    </div>

                    <div className="w-full">
                        <InputTwo type='number' onChange={(e) => e.target.value} value={0} icon='chevron-selector-vertical.svg' label='Value' name="value" placeholderText="0" />
                    </div>

                    <div className="w-full text-sm">
                        <h3 className='text-textGrayDarker py-1'>Currency</h3>
                        <div className="w-full flex items-center gap-3 text-gray-400 font-extralight">
                            <div className="flex items-center gap-2">
                                <input type="radio" checked disabled onChange={(e) => e.target.value} name="currency" id="currency" />
                                <label htmlFor="currency">NGN</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" onChange={(e) => e.target.value} name="currency" id="currency" />
                                <label htmlFor="currency">USD</label>
                            </div>
                        </div>
                    </div>

                    <div className="w-full text-sm">
                        <h3 className='text-textGrayDarker py-1'>Fee Frequency</h3>
                        <div className="w-full flex items-center gap-3 text-gray-700 font-extralight">
                            <div className="flex items-center gap-2">
                                <input type="radio" onChange={(e) => e.target.value} name="feeFrequency" id="feeFrequency" />
                                <label htmlFor="feeFrequency">One Off</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" onChange={(e) => e.target.value} name="feeFrequency" id="feeFrequency" />
                                <label htmlFor="feeFrequency">Monthly</label>
                            </div>
                        </div>
                    </div>

                    <div className="w-full text-sm">
                        <h3 className='text-textGrayDarker py-1'>Fee Impact</h3>
                        <div className="w-full flex items-center gap-3 text-gray-700 font-extralight">
                            <div className="flex items-center gap-2">
                                <input type="radio" onChange={(e) => e.target.value} name="feeImpact" id="feeImpact" />
                                <label htmlFor="feeImpact">Issuance</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" onChange={(e) => e.target.value} name="feeImpact" id="feeImpact" />
                                <label htmlFor="feeImpact">Pin Reissue</label>
                            </div>
                        </div>
                    </div>

                    <div className="w-full text-sm">
                        <h3 className='text-textGrayDarker py-1'>Account Pad</h3>
                        <div className="w-full flex items-center gap-y-2 gap-x-4 flex-wrap text-gray-700 font-extralight">                            
                            <div className="flex items-center gap-2">
                                <input type="radio" checked onChange={(e) => e.target.value} name="accountPad" id="accountPad" />
                                <label htmlFor="accountPad">None</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" onChange={(e) => e.target.value} name="accountPad" id="accountPad" />
                                <label htmlFor="accountPad">Branch Code Prefix</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" onChange={(e) => e.target.value} name="accountPad" id="accountPad" />
                                <label htmlFor="accountPad">Branch Code Suffix</label>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <InputOne label='Account' name="account" />
                    </div>
                </div>

                <div className='py-5 px-5'>
                    <ButtonOne type='submit' classes='py-2 px-8 w-full text-sm' btnText1='Add Fee' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default CardProfileFormModal;